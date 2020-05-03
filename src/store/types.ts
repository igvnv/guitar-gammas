import Gamma, { GammaId } from 'types/Gamma';
import { LoadingState } from 'types/LoadingState';

export const CREATE_GAMMA = 'CREATE_GAMMA';
export const UPDATE_GAMMA = 'UPDATE_GAMMA';
export const DELETE_GAMMA = 'DELETE_GAMMA';
export const FETCH_GAMMAS = 'FETCH_GAMMAS';
export const GAMMAS_LOADING_STATE = 'GAMMAS_LOADING_STATE';
export const RECEIVE_GAMMAS = 'RECEIVE_GAMMAS';

export type CreateGammaActionType = {
  type: typeof CREATE_GAMMA;
  gamma: Gamma;
};

export type UpdateGammaActionType = {
  type: typeof UPDATE_GAMMA;
  gamma: Gamma;
};

export type DeleteGammaActionType = {
  type: typeof DELETE_GAMMA;
  id: GammaId;
};

export type FetchGammasActionType = {
  type: typeof FETCH_GAMMAS;
};

export type GammasLoadingStateActionType = {
  type: typeof GAMMAS_LOADING_STATE;
  state: LoadingState;
};

export type ReceiveGammasActionType = {
  type: typeof RECEIVE_GAMMAS;
  gammas: Gamma[];
};

export type ActionTypes =
  | CreateGammaActionType
  | UpdateGammaActionType
  | DeleteGammaActionType
  | FetchGammasActionType
  | ReceiveGammasActionType
  | GammasLoadingStateActionType;
