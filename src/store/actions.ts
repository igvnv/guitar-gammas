import {
  CREATE_GAMMA,
  UPDATE_GAMMA,
  DELETE_GAMMA,
  CreateGammaActionType,
  UpdateGammaActionType,
  DeleteGammaActionType
} from './actionTypes';
import Gamma, { GammaId } from '../types/Gamma';

export const createGamma = (gamma: Gamma): CreateGammaActionType => ({
  type: CREATE_GAMMA,
  gamma
});

export const updateGamma = (gamma: Gamma): UpdateGammaActionType => ({
  type: UPDATE_GAMMA,
  gamma
});

export const deleteGamma = (gammaId: GammaId): DeleteGammaActionType => ({
  type: DELETE_GAMMA,
  id: gammaId
});
