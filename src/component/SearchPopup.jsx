import { useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchPopup = ({ setSearchValue, setSearchPopup, refInput }) => {
  const menuRef = useRef();
  const state = useSelector((state) => state.movie);
  const movies = state.searchMovies.results?.slice(0, 3);
  useEffect(() => {
    const closeMenu = (e) => {
      if ((e.target !== menuRef.current) & (e.target !== refInput.current)) {
        setSearchPopup(false);
      }
    };
    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);
  return (
    <Container ref={menuRef}>
      <Content>
        {state.loadingSearchMovies && (
          <Skeleton
            count={3}
            style={{ width: "400px", maxWidth: "100%" }}
            baseColor="#dadada"
          />
        )}
        {!state.loadingSearchMovies && state.errorSearchMovies ? (
          <div>{state.errorSearchMovies}</div>
        ) : null}
        {!state.loadingSearchMovies && movies.length ? (
          <Content>
            {movies.map((movie) => (
              <MovieInfo key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <LeftBox>
                    <Image>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt="movie-img"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Image>
                  </LeftBox>
                  <RightBox>
                    <Title>{movie.title}</Title>
                    <Date>{movie.release_date}</Date>
                    <Rating>
                      {movie.vote_average}
                      <img
                        src="/images/IMDb-icon.png"
                        alt="rate-img"
                        style={{
                          width: "20px",
                          height: "10px",
                          objectFit: "contain",
                        }}
                      />
                    </Rating>
                  </RightBox>
                </Link>
              </MovieInfo>
            ))}
            <More>
              <Link
                to={"/search/movies"}
                onClick={() => {
                  setSearchPopup(false);
                  setSearchValue("");
                }}
              >
                More
              </Link>
            </More>
          </Content>
        ) : null}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: calc(100% + 15px);
  right: 0;
  width: fit-content;
  height: fit-content;
  z-index: 100;
  background-color: rgba(14, 14, 14, 0.95);
  border-radius: 5px;
  padding: 15px;
  @media (max-width: 768px) {
    left: 0;
    width: 100%;
  }
`;
const Content = styled.div``;
const MovieInfo = styled.div`
  a {
    height: 100%;
    display: flex;
    gap: 15px;
    width: 400px;
    max-width: 100%;
    margin-bottom: 15px;
  }
`;
const LeftBox = styled.div``;
const RightBox = styled.div``;
const Image = styled.div`
  width: 100px;
  height: 100px;
`;
const Title = styled.strong`
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  color: #dfdfdf;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 10px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.6;
    transition: all 0.3s ease;
  }
`;
const Date = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.82);
`;
const Rating = styled.div`
  font-size: 0.8rem;
  color: white;
  letter-spacing: 1px;
  img {
    margin-left: 5px;
  }
`;
const More = styled.button`
  margin: 0 auto;
  width: 220px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff09;
  border: 1px solid #ffffff2c;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 0.9rem;
  color: white;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--main-color);
    transition: all 0.3s ease;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 40px;
  }
`;

export default SearchPopup;
