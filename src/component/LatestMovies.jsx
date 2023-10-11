import styled from "styled-components";
import Heading from "./Heading";
import Pagination from "./Pagination";

const LatestMovies = ({ genres, latestMovies, setPageNumber }) => {
  return (
    <Container>
      <HeadingContainer>
        <Heading title="Latest Movies" />
      </HeadingContainer>
      <Pagination
        totalMovies={latestMovies}
        setPageNumber={setPageNumber}
        genres={genres}
      />
    </Container>
  );
};

const Container = styled.section`
  margin: 30px 0;
`;
const HeadingContainer = styled.div`
  margin-bottom: 15px;
`;
export default LatestMovies;
