import axios from 'axios';

const API_KEY = '?api_key=6295881d104dda08db4ad0327ab9a326';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrending = () =>
  axios.get(`${BASE_URL}trending/movie/day${API_KEY}`);

export const getMovieById = (movieId) =>
  axios.get(`${BASE_URL}movie/${movieId}${API_KEY}`);

  export const getMovieBySearch = (query) =>
  axios.get(`${BASE_URL}search/movie${API_KEY}&query=${query}`);

  export const getCast = (movieId) =>
  axios.get(`${BASE_URL}movie/${movieId}/credits${API_KEY}`);

  export const getReviews = (movieId) =>
  axios.get(`${BASE_URL}movie/${movieId}/reviews${API_KEY}`);