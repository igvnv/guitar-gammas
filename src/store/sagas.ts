import { all, put, call, takeEvery, delay } from 'redux-saga/effects';

import { FETCH_GAMMAS } from './types';
import * as action from './actions';
import Gamma from 'types/Gamma';
import { LoadingState } from 'types/LoadingState';

export function* fetchGammas() {
  yield put(action.setGammasLoadingState(LoadingState.LOADING));

  try {
    const storageKey = 'gammasList';
    let gammas: Gamma[] = [];

    // TODO: temporary, must be deleted
    yield delay(1000);
    const data = yield call([localStorage, 'getItem'], storageKey);
    if (data) {
      gammas = JSON.parse(data);
    }

    yield put(action.receiveGammas(gammas));
    yield put(action.setGammasLoadingState(LoadingState.DONE));
  } catch (e) {
    yield put(action.setGammasLoadingState(LoadingState.FAILED));
    yield call(console.error, e);
  }
}

export function* watchFetchGammas() {
  yield takeEvery(FETCH_GAMMAS, fetchGammas);
}

export default function* rootSaga() {
  yield all([watchFetchGammas()]);
}
