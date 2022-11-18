import {combineReducers} from 'redux';

import * as MovieReducers from '../collections/movies/reducer';

export default combineReducers(Object.assign(MovieReducers));
