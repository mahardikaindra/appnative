import {SET_DATA_MOVIES, SET_CHARACTER_ID} from '../types';

const setDataMovies = (data: object) => ({
  type: SET_DATA_MOVIES,
  payload: data,
});

export const getMoviesFromApiAsync = (dispatch: any) => {
  return new Promise((resolve: any, reject: any) => {
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

const setDataCharacter = (id: number) => ({
  type: SET_CHARACTER_ID,
  id,
});

export const setDetailCharacter = (id: number) => {
  return (dispatch: any) => {
    dispatch(setDataCharacter(id));
  };
};
