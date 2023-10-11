import styled from "styled-components";

const Heading = ({ title }) => {
  return (
    <HeadingContainer>
      <H1>{title}</H1>
    </HeadingContainer>
  );
};

const HeadingContainer = styled.div`
  background-color: #0e0e0ec2;
  border: 1px solid #161616b9;
  padding: 10px 20px;
`;
const H1 = styled.h1`
  color: #dadada;
  font-size: 1.3rem;
  font-weight: 500;
`;

export default Heading;
