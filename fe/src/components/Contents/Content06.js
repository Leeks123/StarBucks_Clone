import React, { useState, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
// img
import fav_txt1 from "../../images/fav_prod_txt01.png";
import fav_txt2 from "../../images/fav_prod_txt02.png";
import fav_prod from "../../images/fav_20_autumn1.png";

const fadeInLeft = keyframes`
    from {
        left : -400px;
    }
    to {
        left:0px;
    }
`;
const Content_6 = styled.section`
  height: 650px;
  padding-top: 50px;
  position: relative;
  .txts {
    position: relative;
    width: 400px;
    height: 100%;
    left: -400px;
    ${(props) =>
      props.scrolled &&
      css`
        animation: ${fadeInLeft} 1s linear 0s forwards;
      `}
    .txt1 {
      position: absolute;
      left: 8.5rem;
      background: url(${fav_txt1}) no-repeat;
      width: 260px;
      height: 240px;
      margin: 0;
    }
    .txt2 {
      position: absolute;
      top: 16rem;
      left: 2rem;
      background: url(${fav_txt2}) no-repeat;
      width: 24rem;
      height: 12rem;
      margin: 0;
    }
  }

  a {
    position: absolute;
    top: 32rem;
    left: 17rem;
    padding: 10px 20px;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    &:hover {
      background: white;
      color: black;
      text-decoration: underline;
      font-weight: bold;
    }
  }
  img {
    position: absolute;
    top: 0;
    right: 3rem;
  }
`;
const Content06 = () => {
  const [scrolled, setScrolled] = useState(false);
  const topOffset = useRef();
  const onScrolled = () => {
    console.log(topOffset.current.getBoundingClientRect().top);
    const topPosition = topOffset.current.getBoundingClientRect().top;
    if (topPosition < 450) {
      setScrolled(true);
    }
  };
  return (
    <Content_6 onWheel={onScrolled} ref={topOffset} scrolled={scrolled}>
      <div className="txts">
        <div className="txt1" />
        <div className="txt2" />
      </div>
      <a>자세히 보기</a>
      <img src={fav_prod} alt="fav_prod" />
    </Content_6>
  );
};

export default Content06;
