import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Startup from "../component/Startup";
import { useEffect, useState } from "react";
import {
  fetchMovies,
  fetchGenres,
  fetchLastMovies,
} from "../featrures/movies/movieActions";
import LayoutSlider from "../component/LayoutSlider";
import Progress from "../component/Progress";
import Skeleton from "react-loading-skeleton";
import LatestMovies from "../component/LatestMovies";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { user } = useSelector((state) => state.auth);
  const moviesState = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchLastMovies());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);
  return (
    <Section>
      {user ? (
        <>
          <div className="container">
            {moviesState.loadingMovies && (
              <Skeleton count={4} baseColor="#dadada" />
            )}
            {!moviesState.loadingMovies && moviesState.errorMovies ? (
              <div>Error : {moviesState.errorMovies}</div>
            ) : null}
            {
              !moviesState.loadingMovies &&
                moviesState.movies &&
                moviesState.movies.results?.length && (
                  <LayoutSlider
                    movies={moviesState.movies.results}
                    genres={moviesState.genres.genres}
                  />
                )
              //  : (
              //   <h1 style={{ color: "white" }}>No Movies Found</h1>
              // )
            }
            {moviesState.loadingLatestMovies && (
              <Skeleton count={4} baseColor="#dadada" />
            )}
            {!moviesState.loadingLatestMovies &&
            moviesState.errorLatestMovies ? (
              <div>Error : {moviesState.errorLatestMovies}</div>
            ) : null}
            {!moviesState.loadingLatestMovies &&
              moviesState.latestMovies &&
              moviesState.latestMovies.results?.length && (
                <LatestMovies
                  genres={moviesState.genres.genres}
                  latestMovies={moviesState.latestMovies.results}
                  setPageNumber={setPageNumber}
                />
              )}
          </div>
          <Progress />
        </>
      ) : (
        <Startup />
      )}
    </Section>
  );
};

const Section = styled.section``;
export default Home;
