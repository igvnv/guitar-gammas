import {
  CREATE_GAMMA,
  UPDATE_GAMMA,
  DELETE_GAMMA,
  FETCH_GAMMAS,
  GAMMAS_LOADING_STATE,
  RECEIVE_GAMMAS,
  CreateGammaActionType,
  UpdateGammaActionType,
  DeleteGammaActionType,
  FetchGammasActionType,
  GammasLoadingStateActionType,
  ReceiveGammasActionType,
} from './types';
import Gamma, { GammaId } from '../types/Gamma';
import { LoadingState } from 'types/LoadingState';

export const createGamma = (gamma: Gamma): CreateGammaActionType => ({
  type: CREATE_GAMMA,
  gamma,
});

export const updateGamma = (gamma: Gamma): UpdateGammaActionType => ({
  type: UPDATE_GAMMA,
  gamma,
});

export const deleteGamma = (gammaId: GammaId): DeleteGammaActionType => ({
  type: DELETE_GAMMA,
  id: gammaId,
});

export const fetchGammas = (): FetchGammasActionType => ({
  type: FETCH_GAMMAS,
});

export const receiveGammas = (gammas: Gamma[]): ReceiveGammasActionType => ({
  type: RECEIVE_GAMMAS,
  gammas,
});

export const setGammasLoadingState = (
  state: LoadingState
): GammasLoadingStateActionType => ({
  type: GAMMAS_LOADING_STATE,
  state,
});
