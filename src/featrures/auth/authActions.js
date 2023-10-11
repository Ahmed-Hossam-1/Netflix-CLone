import { createAsyncThunk } from "@reduxjs/toolkit";
import { signup, login, logout } from "../../service/auth.service.js";
const userSignup = createAsyncThunk(
  "/auth/signup",
  async (userData, thunkAPI) => {
    try {
      return await signup(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
const userLogin = createAsyncThunk(
  "/auth/login",
  async (userData, thunkAPI) => {
    try {
      return await login(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
const userLogout = createAsyncThunk("/auth/logout", async () => {
  await logout();
});

export { userSignup, userLogin, userLogout };
