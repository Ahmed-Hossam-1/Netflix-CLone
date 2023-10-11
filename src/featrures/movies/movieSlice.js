import { createSlice } from "@reduxjs/toolkit";
import {
  fetchGenres,
  fetchLastMovies,
  fetchMovies,
  fetchSearchMovies,
} from "./movieActions";
const initialState = {
  loadingMovies: false,
  movies: [],
  errorMovies: "",
  loadingGenres: false,
  genres: [],
  errorGenres: "",
  loadingSearchMovies: false,
  searchMovies: [],
  errorSearchMovies: "",
  loadingLatestMovies: false,
  latestMovies: [],
  errorLatestMovies: "",
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all movies
    builder.addCase(fetchMovies.pending, (state) => {
      state.loadingMovies = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loadingMovies = false;
      state.movies = action.payload;
      state.errorMovies = "";
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loadingMovies = false;
      state.movies = [];
      state.errorMovies = action.error.message;
    });
    // fetch all genres
    builder.addCase(fetchGenres.pending, (state) => {
      state.loadingGenres = true;
    });
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.loadingGenres = false;
      state.genres = action.payload;
      state.errorGenres = "";
    });
    builder.addCase(fetchGenres.rejected, (state, action) => {
      state.loadingGenres = false;
      state.genres = [];
      state.errorGenres = action.error.message;
    });
    // fetch all last movies
    builder.addCase(fetchLastMovies.pending, (state) => {
      state.loadingLatestMovies = true;
    });
    builder.addCase(fetchLastMovies.fulfilled, (state, action) => {
      state.loadingLatestMovies = false;
      state.latestMovies = action.payload;
      state.errorLatestMovies = "";
    });
    builder.addCase(fetchLastMovies.rejected, (state, action) => {
      state.loadingLatestMovies = false;
      state.latestMovies = [];
      state.errorLatestMovies = action.error.message;
    });
    // fetch all search movies
    builder.addCase(fetchSearchMovies.pending, (state) => {
      state.loadingSearchMovies = true;
    });
    builder.addCase(fetchSearchMovies.fulfilled, (state, action) => {
      state.loadingSearchMovies = false;
      state.searchMovies = action.payload;
      state.errorSearchMovies = "";
    });
    builder.addCase(fetchSearchMovies.rejected, (state, action) => {
      state.loadingSearchMovies = false;
      state.searchMovies = [];
      state.errorSearchMovies = action.error.message;
    });
  },
});
export default movieSlice.reducer;
