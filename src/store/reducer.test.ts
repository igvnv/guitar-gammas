import reducer, { AppState, defaultState } from './reducer';
import { LoadingState } from 'types/LoadingState';
import {
  createGamma,
  updateGamma,
  deleteGamma,
  receiveGammas,
  setGammasLoadingState,
} from './actions';
import Gamma from 'types/Gamma';

describe('reducer', () => {
  test('default state has PRISTINE state for loading status', () => {
    expect(defaultState.loadingState).toEqual(LoadingState.PRISTINE);
  });

  test('default state has an empty list of gammas', () => {
    expect(defaultState.gammas).toEqual([]);
  });

  test('CREATE_GAMMA adds gamma', () => {
    const gamma: Gamma = { id: 1, name: 'A new gamma', frets: [] };
    expect(reducer(defaultState, createGamma(gamma)).gammas).toEqual([gamma]);
  });

  test('UPDATE_GAMMA replaces a gamma by id', () => {
    const firstGamma = { id: 1, name: 'First gamma', frets: [] };
    const secondGamma = { id: 2, name: 'Second gamma', frets: [] };
    const updatedGamma = { id: 2, name: 'Updated gamma', frets: [] };

    const state: AppState = {
      ...defaultState,
      gammas: [firstGamma, secondGamma],
    };

    expect(reducer(state, updateGamma(updatedGamma)).gammas).toEqual([
      firstGamma,
      updatedGamma,
    ]);
  });

  test('DELETE_GAMMA deletes a gamma by id', () => {
    const firstGamma = { id: 1, name: 'First gamma', frets: [] };
    const secondGamma = { id: 2, name: 'Second gamma', frets: [] };

    const state: AppState = {
      ...defaultState,
      gammas: [firstGamma, secondGamma],
    };

    expect(reducer(state, deleteGamma(firstGamma.id)).gammas).toEqual([
      secondGamma,
    ]);
  });

  test('FETCH_GAMMAS sets gammas list', () => {
    const firstGamma = { id: 1, name: 'First gamma', frets: [] };
    const secondGamma = { id: 2, name: 'Second gamma', frets: [] };
    const gammasList = [firstGamma, secondGamma];

    expect(reducer(defaultState, receiveGammas(gammasList)).gammas).toEqual(
      gammasList
    );
  });

  test('LOADING_STATE sets loading state', () => {
    expect(
      reducer(defaultState, setGammasLoadingState(LoadingState.DONE))
        .loadingState
    ).toEqual(LoadingState.DONE);
  });
});
