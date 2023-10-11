import styled from "styled-components";

const MovieDetails = ({ movie }) => {
  return (
    <Container>
      <strong>{movie.title}</strong>
      <p>{movie.overview}</p>
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 30px;
  strong {
    color: white;
    font-size: 1.3rem;
    letter-spacing: 1px;
    font-weight: 600;
  }
  p {
    color: #474747;
    margin: 10px 0;
  }
`;
export default MovieDetails;
