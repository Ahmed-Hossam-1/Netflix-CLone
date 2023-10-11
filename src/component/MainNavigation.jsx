import { Link } from "react-router-dom";
import styled from "styled-components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../featrures/auth/authActions";
import { fetchSearchMovies } from "../featrures/movies/movieActions";
import SearchPopup from "./SearchPopup";

const MainNavigation = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchPopup, setSearchPopup] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const refInput = useRef();
  useEffect(() => {
    if (searchValue) {
      setSearchPopup(true);
      dispatch(fetchSearchMovies(searchValue));
      return;
    } else {
      setSearchPopup(false);
      return;
    }
  }, [searchValue]);
  useEffect(() => {
    refInput.current?.focus();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const Links = ["home", "genre", "tv shown", "movies", "contact"];
  const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  // Submit Search
  const handelSubmit = () => {};
  return (
    <Header>
      <Container className="container">
        <Logo>
          <HumbergerButton style={center} onClick={() => setIsOpen(!isOpen)}>
            <Bars open={isOpen} />
          </HumbergerButton>
          <Link to="/">
            Netflix<span>.hd</span>
          </Link>
        </Logo>
        {isOpen && (
          <Nav style={center}>
            <Menu style={center}>
              {Links.map((link) => (
                <MenuList key={link}>
                  <Link
                    to={`/${
                      link === "tv shown"
                        ? link.replace(" ", "-")
                        : link === "home"
                        ? ""
                        : link === "movies"
                        ? ""
                        : link
                    }`}
                  >
                    {link}
                  </Link>
                </MenuList>
              ))}
            </Menu>
          </Nav>
        )}
        {user ? (
          <RightBox>
            <SearchContainer>
              <Form onSubmit={handelSubmit}>
                <SearchInput
                  type="text"
                  required
                  ref={refInput}
                  name="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search Movie"
                />
                <SubmitButton type="submit">
                  <MagnifyingGlassIcon />
                </SubmitButton>
              </Form>
              {searchPopup && (
                <SearchPopup
                  setSearchValue={setSearchValue}
                  setSearchPopup={setSearchPopup}
                  refInput={refInput}
                />
              )}
            </SearchContainer>

            <Start>
              <button onClick={() => dispatch(userLogout())}>Logout</button>
            </Start>
          </RightBox>
        ) : (
          <Start>
            <Link to="/auth/login">Sign In</Link>
          </Start>
        )}
      </Container>
    </Header>
  );
};

const Header = styled.header``;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 0;
  position: relative;
  @media (max-width: 767px) {
    padding: 30px 15px;
    gap: 15px;
    justify-content: center;
  }
  @media (max-width: 500px) {
    display: ${(props) => (props.user ? "block" : "flex")};
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
  a {
    color: var(--main-color);
    cursor: pointer;
    font-size: 3rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-family: "Monoton", cursive;
    letter-spacing: 1px;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    span {
      font-size: 1.2rem;
      margin-left: 5px;
      font-weight: 700;
      letter-spacing: 2px;
      color: var(--main-color);
    }
  }
`;
const HumbergerButton = styled.div`
  cursor: pointer;
  z-index: 101;
  margin-right: 40px;
  width: 40px;
  height: 40px;
  @media (max-width: 768px) {
    margin-right: 15px;
  }
`;
const Bars = styled.span`
  display: block;
  height: 2px;
  width: 25px;
  background-color: ${(props) => (props.open ? "transparent" : "white")};
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: white;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.4s;
  }
  &::before {
    top: ${(props) => (props.open ? "0" : "-8px")};
    rotate: ${(props) => (props.open ? "45deg" : "0")};
  }
  &::after {
    top: ${(props) => (props.open ? "0" : "8px")};
    rotate: ${(props) => (props.open ? "-45deg" : "0")};
  }
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111111f1;
  z-index: 100;
  animation: fade 0.5s;
`;
const Menu = styled.ul`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const MenuList = styled.li`
  @media (max-width: 768px) {
    margin: 15px 0;
  }
  a {
    color: white;
    margin: 0 40px;
    font-size: 2rem;
    font-family: "Monoton", cursive;
    transition: all 0.3s ease;
    text-transform: capitalize;
    &:hover {
      font-size: 2.3rem;
      color: var(--main-color);
      transition: all 0.3s ease;
    }
    @media (max-width: 1200px) {
      margin: 0 20px;
    }
    @media (max-width: 992px) {
      margin: 0 10px;
    }
    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;
const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SearchContainer = styled.div`
  background-color: #d1d1d111;
  border-radius: 20px;
  height: 40px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  color: white;
  background-color: transparent;
  padding: 3px 20px;
  font-size: 15px;
  &::placeholder {
    color: #ffffff5e;
  }
`;
const SubmitButton = styled.button`
  color: #ffffffc9;
  width: 15px;
  height: 15px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  background-color: transparent;
`;
const Start = styled.div`
  width: fit-content;
  border-radius: 5px;
  height: 35px;
  background-color: var(--main-color);
  transition: all 0.3s ease;
  &:hover {
    background-color: #cc062f;
    transition: all 0.3s ease;
  }
  a,
  button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    cursor: pointer;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    color: white;
    svg {
      margin-left: 15px;
      animation: moveRight 1.2s linear infinite;
      transition: all 0.3s ease;
    }
  }
`;

export default MainNavigation;
