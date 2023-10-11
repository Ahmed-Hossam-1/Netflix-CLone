import axios from "axios";

const getMovies = () => {
  return axios.get(
    `${import.meta.env.VITE_BASE_URL_Movies}/movie/now_playing`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: "application/json",
      },
    }
  );
};
const getGenres = () => {
  return axios.get(
    `${import.meta.env.VITE_BASE_URL_Movies}/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: "application/json",
      },
    }
  );
};
const getLastMovies = (page) => {
  return axios.get(
    `${
      import.meta.env.VITE_BASE_URL_Movies
    }/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: "application/json",
      },
    }
  );
};
const getMovie = (movieId) => {
  return axios.get(
    `${import.meta.env.VITE_BASE_URL_Movies}/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: "application/json",
      },
    }
  );
};
const getMovieVideo = (movieId) => {
  return axios.get(
    `${
      import.meta.env.VITE_BASE_URL_Movies
    }/movie/${movieId}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: "application/json",
      },
    }
  );
};
const getMovieImages = (movieId) => {
  return axios.get(
    `${import.meta.env.VITE_BASE_URL_Movies}/movie/${movieId}/images`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: "application/json",
      },
    }
  );
};
const getSearchMovie = (movieName) => {
  return axios.get(
    `${
      import.meta.env.VITE_BASE_URL_Movies
    }/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        accept: "application/json",
      },
    }
  );
};
export {
  getMovies,
  getGenres,
  getLastMovies,
  getMovieVideo,
  getMovieImages,
  getSearchMovie,
  getMovie,
};
