import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";

const Auth = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <LandingImg>
        <img
          src="/images/img.jpg"
          alt="img"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </LandingImg>
      <div className="container">
        <Content>
          <Title>{pathname === "/auth/login" ? "Sign In" : "Sign Up"}</Title>
          <Form pathname={pathname} />
          <Desc>
            <span>
              {pathname === "/auth/login"
                ? "New to HD Movies?"
                : "Already joined to HD Movies?"}
            </span>
            <Link
              to={
                pathname === "/auth/login"
                  ? "/auth/signup"
                  : pathname === "/auth/signup"
                  ? "/auth/login"
                  : "/"
              }
            >
              {pathname === "/auth/login" ? "Sinup now" : "Signin now"}
            </Link>
          </Desc>
        </Content>
      </div>
    </Container>
  );
};

const Container = styled.section`
  height: calc((100vh + 50px) - (134.4px + 79.6px));
  @media (max-width: 768px) {
    height: calc(100vh - (100px + 101.2px));
  }
`;
const LandingImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh + 50px);
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
const Content = styled.div`
  width: 450px;
  max-width: 100%;
  margin: 0 auto 50px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px;
  @media (max-width: 768px) {
    padding: 15px;
    margin: 0 auto;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: white;
  margin-bottom: 30px;
`;
const Desc = styled.h1`
  margin-top: 60px;
  font-size: 16px;
  span {
    color: #666666;
    margin-right: 5px;
  }
  a {
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Auth;
