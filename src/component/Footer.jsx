import styled from "styled-components";

const Footer = () => {
  const date = new Date();
  return (
    <FooterContainer>
      <Container className="container">
        <Logo
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          Netflix<span>.hd</span>
        </Logo>
        <CopyRight>CopyRight &copy; {date.getFullYear()} - Netflix </CopyRight>
      </Container>
    </FooterContainer>
  );
};
const FooterContainer = styled.footer`
  background-color: #0e0e0ec2;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Logo = styled.button`
  display: flex;
  align-items: center;
  justify-content: "center";
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--main-color);
  background-color: transparent;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Monoton", cursive;
  letter-spacing: 1px;
  span {
    font-size: 1rem;
    margin-left: 5px;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--main-color);
  }
`;
const CopyRight = styled.span`
  color: #777777;
  font-size: 0.9rem;
`;

export default Footer;
