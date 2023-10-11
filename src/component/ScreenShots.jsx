import { useEffect, useState } from "react";
import { getMovieImages } from "../service/movies.service";
import styled from "styled-components";

const ScreenShots = ({ movieId }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const result = await getMovieImages(movieId);
      setImages(
        result.data.backdrops.map((item) => item.file_path).slice(0, 4)
      );
    };
    getImages();
  }, []);
  return (
    <Container>
      <strong>ScreenShots</strong>
      <Grid>
        {images.map((img, i) => (
          <Item key={i}>
            <img
              src={`https://image.tmdb.org/t/p/original/${img}`}
              alt="poster-img"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Item>
        ))}
      </Grid>
    </Container>
  );
};
const Container = styled.div`
  strong {
    color: var(--main-color);
    font-family: Monoton;
    font-size: 2rem;
    font-weight: 400;
    display: block;
  }
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0 30px;
`;
const Item = styled.div`
  flex-basis: calc(100% / 2);
`;

export default ScreenShots;
