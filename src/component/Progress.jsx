import { useEffect, useRef } from "react";
import { styled } from "styled-components";

const Progress = () => {
  const progressRef = useRef();
  useEffect(() => {
    const handleProgress = () => {
      const pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.floor((pos * 100) / calcHeight);

      progressRef.current
        ? (progressRef.current.style.background = `conic-gradient(#e70634 ${scrollValue}%,#2b2f38 ${scrollValue}%)`)
        : "";
    };
    window.addEventListener("scroll", handleProgress);

    return () => {
      window.addEventListener("scroll", handleProgress);
    };
  }, []);
  return (
    <ProgressContainer ref={progressRef}>
      <span></span>
    </ProgressContainer>
  );
};
const ProgressContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  right: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
  z-index: 2;
  span {
    display: block;
    height: calc(100% - 5px);
    width: calc(100% - 5px);
    background-color: #1c1f25;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 600;
    font-size: 0px;
  }
`;
export default Progress;
