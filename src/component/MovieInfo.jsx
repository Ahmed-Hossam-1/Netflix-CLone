import styled from "styled-components";
import { Link } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";

function MovieInfo({ movie, setOpen }) {
  return (
    <Container>
      <TopTitle>
        <h1>{movie.title}</h1>
        <AboutMovie>
          <span>Full HD</span>
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
          <span>{movie.release_date}</span>
          <span>{movie.runtime} min</span>
        </AboutMovie>
        <Language>
          <span>{movie.original_language}</span>
        </Language>
      </TopTitle>
      <BottomTitle>
        <Category>
          <strong>Category</strong>
          {movie.genres?.map((genre) => (
            <Link to="/" key={genre.id}>
              {genre.name} <span>,</span>
            </Link>
          ))}
        </Category>
        <WatchTrailer>
          <Link to="/">Watch Trailer</Link>
        </WatchTrailer>
      </BottomTitle>
      <PlayContainer onClick={() => setOpen(true)}>
        <PlayBtn>
          <PlayIcon />
        </PlayBtn>
      </PlayContainer>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
`;

const TopTitle = styled.div`
  h1 {
    color: white;
    font-weight: 600;
    font-size: 2.3rem;
    line-height: 50px;
    letter-spacing: 1px;
  }
`;
const AboutMovie = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  span:first-child {
    background-color: var(--main-color);
    color: #080808;
    font-weight: 600;
    padding: 0 5px;
    height: 20px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;
const Rating = styled.div`
  font-size: 0.8rem;
  color: white;
  letter-spacing: 1px;
  img {
    margin-left: 5px;
  }
`;
const Language = styled.div`
  span {
    background-color: #dfdfdf0e;
    padding: 5px 10px;
    margin-right: 10px;
    color: #dfdfdf;
    font-size: 0%.8rem;
    text-transform: capitalize;
  }
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;
const BottomTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
const Category = styled.div`
  strong {
    font-weight: 500;
    color: white;
    display: block;
  }
  a {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--main-color);
    span {
      color: #dadada;
    }
    &:last-child {
      span {
        color: transparent;
      }
    }
  }
`;
const WatchTrailer = styled.div`
  a {
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
const PlayContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 25%;
  @media (max-width: 768px) {
    top: 66%;
  }
`;
const PlayBtn = styled.button`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #dadada48;
  z-index: 3;
  background-color: rgba(255, 0, 0, 0.185);
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--main-color);
    transition: all 0.3s ease;
  }
  svg {
    width: 22px;
    fill: white;
  }
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 150%;
    height: 150%;
    border: 1px solid #ffffff26;
    background-color: #ffffff18;
    z-index: -1;
  }
`;
export default MovieInfo;
