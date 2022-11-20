import {SET_DATA_MOVIES, SET_CHARACTER_ID} from '../types';
import createReducer from '../../utils/createReducers';

const initialState = {
  data: {},
};

export const dataMovies = createReducer(initialState, {
  [SET_DATA_MOVIES](state: any, action: any) {
    return {...state, data: action.data};
  },
});

export const dataCharacter = createReducer(
  {},
  {
    [SET_CHARACTER_ID](state: any, action: any) {
      return {...state, id: action.id};
    },
  },
);
