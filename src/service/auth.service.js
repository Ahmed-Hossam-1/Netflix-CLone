import axios from "axios";
import Cookies from "js-cookie";
const signup = async (userData) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
    userData
  );
  if (res.data) {
    Cookies.set("refreshToken", res.data.refreshToken);
    Cookies.set("accessToken", res.data.accessToken);
  }
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
    userData
  );
  if (res.data) {
    Cookies.set("refreshToken", res.data.refreshToken);
    Cookies.set("accessToken", res.data.accessToken);
  }
  return res.data;
};

const logout = async () => {
  Cookies.remove("refreshToken");
  Cookies.remove("accessToken");
};

export { signup, login, logout };
