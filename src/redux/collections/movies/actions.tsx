import {SET_DATA_MOVIES} from '../types';

const setDataMovies = (data: object) => ({
  type: SET_DATA_MOVIES,
  payload: data,
});

export const getMoviesFromApiAsync = (dispatch: any) => {
  new Promise((resolve: any, reject: any) => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        dispatch(setDataMovies(json.movies));
        resolve(json.movies);
      })
      .catch(error => {
        reject(error);
      });
  });
};
