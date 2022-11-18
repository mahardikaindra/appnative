import {SET_DATA_MOVIES} from '../types';
import createReducer from '../../utils/createReducers';

const initialState = {
  data: {},
};

export const dataMovies = createReducer(initialState, {
  [SET_DATA_MOVIES](state: any, action: any) {
    return {...state, data: action.data};
  },
});
