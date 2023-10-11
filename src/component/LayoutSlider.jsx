// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { styled } from "styled-components";
import { Autoplay } from "swiper/modules";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
const LayoutSlider = ({ movies, genres, latestMovies }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const swiperSliderStyles = {
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    border: "1px solid #0e0e0ec2",
    userSelect: "none",
    position: "relative",
    height: "450px",
    overflow: "hidden",
  };
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const getTargetGenre = (ids) => {
    return ids
      .map((id) => genres?.find((genre) => genre.id === id))
      .map((item) => item?.name);
  };
  return (
    <div>
      <Swiper
        autoplay={
          latestMovies && {
            delay: 5000,
            disableOnInteraction: false,
          }
        }
        ref={sliderRef}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: latestMovies ? 35 : 20,
          },
          768: {
            slidesPerView: latestMovies ? 3 : 2,
            spaceBetween: latestMovies ? 35 : 20,
          },
          992: {
            slidesPerView: latestMovies ? 4 : 3,
            spaceBetween: latestMovies ? 35 : 50,
          },
        }}
      >
        {movies?.map((movie) => (
          <SwiperSlide
            style={swiperSliderStyles}
            className="main-slider-box"
            key={movie.id}
            onClick={() =>
              latestMovies ? null : navigate(`/movies/${movie.id}`)
            }
          >
            {!latestMovies && (
              <Overlay className="overlay">
                <PlayIcon />
              </Overlay>
            )}
            <div style={{ width: "100%", height: "450px" }}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <SliderText>
              <Quality>Full HD</Quality>
              <MovieInfo>
                <MovieName>
                  <span>{movie.release_date}</span>
                  {latestMovies ? (
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                  ) : (
                    <strong>{movie.title}</strong>
                  )}
                </MovieName>
                <CategoryRating>
                  <CatContainer>
                    {getTargetGenre(movie.genre_ids).map((genre, id) => (
                      <CatItem key={id}>
                        {genre} <span>,</span>
                      </CatItem>
                    ))}
                  </CatContainer>

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
                </CategoryRating>
              </MovieInfo>
            </SliderText>
          </SwiperSlide>
        ))}
      </Swiper>
      {!latestMovies && (
        <SliderNavigation>
          <PrevBtn onClick={handlePrev}>
            <ChevronLeftIcon />
          </PrevBtn>
          <NextBtn onClick={handleNext}>
            <ChevronRightIcon />
          </NextBtn>
        </SliderNavigation>
      )}
    </div>
  );
};
const SliderNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
  }
  margin-top: 30px;
  button {
    width: 25px;
    height: 25px;
    background-color: transparent;
    cursor: pointer;
    svg {
      fill: white;
      &:hover {
        fill: var(--main-color);
      }
    }
  }
`;
const NextBtn = styled.button``;
const PrevBtn = styled.button``;
const SliderText = styled.div`
  cursor: grab;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    360deg,
    #161616b9 35%,
    rgba(73, 73, 73, 0.23) 64%
  );
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
`;
const MovieInfo = styled.div`
  width: 100%;
`;
const Quality = styled.span`
  background-color: var(--main-color);
  color: #080808;
  font-weight: 600;
  padding: 0 5px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
const MovieName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    font-size: 0.9rem;
    letter-spacing: 1px;
    font-weight: 400;
    color: rgba(240, 240, 240, 0.82);
  }
  strong,
  a {
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    margin-top: 10px;
    color: #dfdfdf;
    letter-spacing: 0.5px;
  }
  a {
    &:hover {
      opacity: 0.8;
      transition: all ease 0.3s;
    }
  }
`;
const CategoryRating = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 15px;
`;
const CatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const CatItem = styled.div`
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
`;
const Rating = styled.div`
  font-size: 0.8rem;
  color: white;
  letter-spacing: 1px;
  img {
    margin-left: 5px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 100%;
  background-color: rgba(27, 27, 27, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: all ease 0.3s;
  z-index: 1;
  svg {
    width: 2rem;
  }
`;

export default LayoutSlider;
