import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout";
import Auth from "./auth/Auth";
import Home from "./pages/Home";
import SearchMovie from "./component/SearchMovie";
import { useSelector } from "react-redux";
import Movie, { loader } from "./component/Movie";
import { loader as movieLoader } from "./component/Movie";
const App = () => {
  const { user } = useSelector((state) => state.auth);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth/login" element={<Auth />} />
        <Route path="auth/signup" element={<Auth />} />
        <Route
          path="/search/movies"
          element={
            user ? <SearchMovie /> : <Navigate to="auth/login" replace />
          }
        />
        <Route
          path="/movies/:MovieId"
          element={user ? <Movie /> : <Navigate to="auth/login" replace />}
          loader={movieLoader}
        />
        <Route
          path="*"
          element={
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "var(--main-color)",
                height: "calc(100vh - (79.6px + 134.4px))",
              }}
            >
              Page Not Found
            </h1>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
