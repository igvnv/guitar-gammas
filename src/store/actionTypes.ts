import Gamma, { GammaId } from '../types/Gamma';

export const CREATE_GAMMA = 'CREATE_GAMMA';
export const UPDATE_GAMMA = 'UPDATE_GAMMA';
export const DELETE_GAMMA = 'DELETE_GAMMA';

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

export type ActionTypes =
  | CreateGammaActionType
  | UpdateGammaActionType
  | DeleteGammaActionType;
