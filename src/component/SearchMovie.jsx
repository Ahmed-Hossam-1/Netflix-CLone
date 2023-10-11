import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const SearchMovie = () => {
  const state = useSelector((state) => state.movie);

  return (
    <Container>
      <div className="container">
        {state.loadingSearchMovies && (
          <Skeleton count={5} baseColor="#dadada" />
        )}
        {!state.loadingSearchMovies && state.errorSearchMovies ? (
          <div>{state.errorSearchMovies}</div>
        ) : null}
        {!state.searchMovies.results?.length && (
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--main-color)",
              height: "calc(100vh - 254px)",
            }}
          >
            Please Search for a Movie
          </h1>
        )}
        <Content>
          {!state.loadingSearchMovies &&
            state.searchMovies.results?.length &&
            state.searchMovies.results.map((movie) => (
              <MovieInfo key={movie.id}>
                <TopBox>
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
                </TopBox>
                <Discover>
                  <Link to={`/movies/${movie.id}`}>Discover</Link>
                </Discover>
              </MovieInfo>
            ))}
        </Content>
      </div>
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;
const TopBox = styled.div``;
const Image = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.strong`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
  color: #dfdfdf;
  letter-spacing: 0.5px;
  display: block;
`;
const Date = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.82);
`;
const Discover = styled.div`
  a {
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

    &:hover {
      background-color: var(--main-color);
      transition: all 0.3s ease;
    }
  }
`;
const Rating = styled.div`
  font-size: 0.8rem;
  color: white;
  letter-spacing: 1px;
  margin-bottom: 10px;
  img {
    margin-left: 5px;
  }
`;
export default SearchMovie;
