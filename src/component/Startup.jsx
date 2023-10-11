import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Startup() {
  return (
    <Content>
      <LandingImg>
        <img
          src="/images/img.jpg"
          alt="img"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </LandingImg>
      <Container className="container">
        <Box>
          <Title>Unlimited movies, TV shows, and more</Title>
          <Dec>
            Ready to watch? Click get Started to watch All HD Movies Free!
          </Dec>
          <Start>
            <Link to="/auth/signup">
              Get started for free <ArrowRightIcon width={24} height={24} />
            </Link>
          </Start>
        </Box>
      </Container>
    </Content>
  );
}
const Content = styled.div`
  height: calc(100vh - (134.4px + 79.6px));
  @media (max-width: 768px) {
    height: calc(100vh - (100px + 101.2px));
  }
`;
const Container = styled.div`
  position: relative;
  height: calc(100vh - (134.4px + 79.6px));
  @media (max-width: 768px) {
    height: calc(100vh - (174.4px + 101.2px));
  }
`;
const Title = styled.h1`
  font-size: 48px;
  letter-spacing: 0.8px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const Dec = styled.p`
  color: #dadada;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
`;
const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;
const LandingImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
    z-index: 1;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Start = styled.div`
  width: fit-content;

  height: 58px;
  border-radius: 1000000px;
  background-color: var(--main-color);
  transition: all 0.3s ease;
  &:hover {
    background-color: #cc062f;
    transition: all 0.3s ease;
  }
  a {
    width: 100%;
    height: 100%;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    color: white;
    svg {
      margin-left: 15px;
      animation: moveRight 1.2s linear infinite;
      transition: all 0.3s ease;
    }
  }
`;
export default Startup;
