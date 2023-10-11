import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getGenres,
  getLastMovies,
  getMovies,
  getSearchMovie,
} from "../../service/movies.service";

const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  const res = await getMovies();
  return res.data;
});
const fetchGenres = createAsyncThunk("movie/fetchGenres", async () => {
  const res = await getGenres();
  return res.data;
});
const fetchLastMovies = createAsyncThunk(
  "movie/fetchLastMoveis",
  async (page) => {
    const res = await getLastMovies(page);
    return res.data;
  }
);
const fetchSearchMovies = createAsyncThunk(
  "movie/fetchSearchMovies",
  async (movieName) => {
    const res = await getSearchMovie(movieName);
    return res.data;
  }
);
export { fetchMovies, fetchGenres, fetchLastMovies, fetchSearchMovies };
