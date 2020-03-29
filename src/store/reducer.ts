import {
  CREATE_GAMMA,
  UPDATE_GAMMA,
  DELETE_GAMMA,
  ActionTypes
} from './actionTypes';
import Gamma from '../types/Gamma';

export type StateType = {
  gammas: Gamma[];
};

const defaultState: StateType = {
  gammas: []
};

const reducer = (state: StateType = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case CREATE_GAMMA:
      const gammaId = Math.max(...state.gammas.map((gamma) => gamma.id!)) + 1;
      return {
        ...state,
        gammas: [...state.gammas, { ...action.gamma, id: gammaId }]
      };

    case UPDATE_GAMMA:
      return {
        ...state,
        gammas: state.gammas.map((gamma) => {
          return gamma.id !== action.gamma.id ? gamma : action.gamma;
        })
      };

    case DELETE_GAMMA:
      return {
        ...state,
        gammas: state.gammas.filter((gamma) => gamma.id !== action.id)
      };

    default:
      return state;
  }
};

export default reducer;
