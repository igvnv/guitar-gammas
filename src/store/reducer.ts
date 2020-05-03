import {
  CREATE_GAMMA,
  UPDATE_GAMMA,
  DELETE_GAMMA,
  RECEIVE_GAMMAS,
  GAMMAS_LOADING_STATE,
  ActionTypes,
} from './types';
import Gamma from 'types/Gamma';
import { LoadingState } from 'types/LoadingState';

export type AppState = {
  gammas: Gamma[];
  loadingState: LoadingState;
};

export const defaultState: AppState = {
  gammas: [],
  loadingState: LoadingState.PRISTINE,
};

const reducer = (state: AppState = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case CREATE_GAMMA:
      return {
        ...state,
        gammas: [...state.gammas, action.gamma],
      };

    case UPDATE_GAMMA:
      return {
        ...state,
        gammas: state.gammas.map((gamma) => {
          return gamma.id !== action.gamma.id ? gamma : action.gamma;
        }),
      };

    case DELETE_GAMMA:
      return {
        ...state,
        gammas: state.gammas.filter((gamma) => gamma.id !== action.id),
      };

    case RECEIVE_GAMMAS:
      return {
        ...state,
        gammas: action.gammas,
      };

    case GAMMAS_LOADING_STATE:
      return {
        ...state,
        loadingState: action.state,
      };

    default:
      return state;
  }
};

export default reducer;
