import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../featrures/auth/authSlice";
import movieReducer from "../featrures/movies/movieSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV === "development",
});

export default store;
