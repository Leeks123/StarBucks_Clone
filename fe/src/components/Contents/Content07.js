import React, { useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
// img
import reserve_visual from "../../images/reserve_visual_pc.png";
import reserve_text from "../../images/reserve_text_pc.png";

const fadeInRight = keyframes`
    from {
        left : 100%;
    }
    to {
        left:50%;
    }
`;

const Content7 = styled.section`
  z-index: 2;
  position: relative;
  background: white;
  width: 100%;
  height: 500px;
  padding: 100px 0;
  .reserve_left {
    position: absolute;
    left: 10%;
    background: url(${reserve_visual}) no-repeat;
    width: 35%;
    height: 506px;
  }
  .reserve_right {
    position: absolute;
    top: 37%;
    left: 100%;
    background: url(${reserve_text}) no-repeat;
    width: 42%;
    height: 85px;
    ${(props) =>
      props.scrolled &&
      css`
        animation: ${fadeInRight} 1.5s linear 0s forwards;
      `}
  }
  a {
    position: absolute;
    top: 65%;
    left: 100%;
    color: #666;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    padding: 5px;
    ${(props) =>
      props.scrolled &&
      css`
        animation: ${fadeInRight} 1.5s linear 0s forwards;
      `}
    &:hover {
      background-color: #c19d55;
      color: white;
    }
  }
`;
const Content07 = () => {
  const [scrolled, setScrolled] = useState(false);
  const topOffset = useRef();
  const onScrolled = () => {
    console.log(topOffset.current.getBoundingClientRect().top);
    const topPosition = topOffset.current.getBoundingClientRect().top;
    if (topPosition < 550) {
      setScrolled(true);
    }
  };
  return (
    <Content7 onWheel={onScrolled} ref={topOffset} scrolled={scrolled}>
      <div className="reserve_left" />
      <div className="reserve_right" />
      <a href="/">EXPLORE OUR STORY</a>
    </Content7>
  );
};

export default Content07;
