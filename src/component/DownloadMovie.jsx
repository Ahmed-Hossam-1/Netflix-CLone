import { ServerIcon } from "@heroicons/react/24/solid";
import styled from "styled-components";

const DownloadMovie = () => {
  const items = [
    { server: 1, lang: "English", quality: "1080p" },
    { server: 2, lang: "English", quality: "720p" },
    { server: 3, lang: "English", quality: "480p" },
  ];
  return (
    <Container>
      {items.map((item) => (
        <Box key={item.server}>
          <span>
            <ServerIcon width={20} height={20} />
            Server {item.server}
          </span>
          <span>{item.lang}</span>
          <span>{item.quality}</span>
          <a href={`/images/Movie.mp4`} download>
            Download
          </a>
        </Box>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    gap: 15px;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(136, 136, 136, 0.06);
  @media (max-width: 768px) {
    flex-direction: column;
  }
  span:first-child {
    display: flex;
    gap: 8px;
  }
  span,
  a {
    flex-basis: calc(100% / 4);
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #2a2a2a52;
    color: #d8d8d8;
    letter-spacing: 1px;
    width: 100%;
  }
  a {
    color: var(--main-color);
    transition: all 0.3s ease;

    &:hover {
      color: #c51e3f;
      transition: all 0.3s ease;
    }
    @media (max-width: 768px) {
      flex-basis: 100%;
    }
  }
`;
export default DownloadMovie;
