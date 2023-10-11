import { useLoaderData, useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovie, getMovieVideo } from "../service/movies.service";
import MovieInfo from "./MovieInfo";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ReactPlayer from "react-player";
import Progress from "./Progress";
import MovieDetails from "./MovieDetails";
import ScreenShots from "./ScreenShots";
import DownloadMovie from "./DownloadMovie";

const Movie = () => {
  const { MovieId } = useParams();
  const movieData = useLoaderData();
  const [open, setOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");

  useEffect(() => {
    const getVideo = async () => {
      const video = await getMovieVideo(MovieId);
      setVideoLink(video.data?.results[0]?.key);
    };

    getVideo();
  }, [MovieId]);
  return (
    <Container>
      <div className="container">
        <Top>
          <Image>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
              alt="movie-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Image>
          <MovieInfo movie={movieData} setOpen={setOpen} />
        </Top>
        <Bottom>
          <MovieDetails movie={movieData} />
          <ScreenShots movieId={MovieId} />
          <DownloadMovie videoLink={videoLink} />
        </Bottom>

        <Progress />
      </div>
      {open && (
        <VideoContainer>
          <CloseBtn onClick={() => setOpen(false)}>
            <XMarkIcon />
          </CloseBtn>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoLink}`}
            width="100%"
            height="100%"
            playing={true}
          />
        </VideoContainer>
      )}
    </Container>
  );
};

const Container = styled.section``;
const Top = styled.div`
  position: relative;
`;
const Bottom = styled.div`
  margin: 50px 0;
`;
const Image = styled.div`
  height: 520px;
  @media (max-width: 768px) {
    height: 540px;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -90deg,
      rgba(37, 37, 37, 0.2) 0%,
      rgba(32, 32, 32, 0.8) 100%
    );
  }
  img {
    border-radius: 5px;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 50px;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 15, 15, 0.7);
  z-index: 108;

  gap: 30px;
  @media (max-width: 575px) {
    padding: 30px 15px;
  }
`;
const CloseBtn = styled.button`
  background-color: #dadada;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease;
    background-color: #b8b3b3;
  }
  svg {
    position: relative;
    width: 24px;
    height: 24px;
    fill: var(--main-color);
  }
`;
export default Movie;

export async function loader({ params }) {
  const result = await getMovie(params.MovieId);
  return result.data;
}
