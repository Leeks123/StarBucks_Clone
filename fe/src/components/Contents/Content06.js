import React, { useState, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
// img
import fav_txt1 from "../../images/fav_prod_txt01.png";
import fav_txt2 from "../../images/fav_prod_txt02.png";
import fav_prod from "../../images/fav_20_autumn1.png";
import fav_txt1_m from "../../images/menu_txt01_m.png";
import fav_txt2_m from "../../images/menu_txt02_m.png";

const fadeInLeft = keyframes`
    from {
        left : -400px;
    }
    to {
        left:0%;
    }
`;
const fadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;
const Content6 = styled.section`
  height: 650px;
  padding-top: 50px;
  position: relative;
  .txts {
    position: relative;
    width: 33.3vw;
    height: 100%;
    left: -400px;
    ${(props) =>
      props.scrolled &&
      css`
        animation: ${fadeInLeft} 1.5s linear 0s forwards;
      `}
    .txt1 {
      position: absolute;
      left: 8.5rem;
      background: url(${fav_txt1}) no-repeat;
      background-size: contain;
      width: 21.6vw;
      height: 20vw;
      margin: 0;
    }
    .txt2 {
      position: absolute;
      top: 16rem;
      left: 2rem;
      background: url(${fav_txt2}) no-repeat;
      background-size: contain;
      width: 32vw;
      height: 16vw;
      margin: 0;
    }
  }

  a {
    position: absolute;
    top: 32rem;
    left: 22.6vw;
    padding: 10px 20px;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    opacity: 0;
    ${(props) =>
      props.scrolled &&
      css`
        animation: ${fadeIn} 2s linear 0s forwards;
      `}
    &:hover {
      background: white;
      color: black;
      text-decoration: underline;
      font-weight: bold;
    }
  }
  img {
    position: absolute;
    top: 10%;
    right: 3rem;
    width: 56vw;
  }

  @media (max-width: 950px) {
    height: 1000px;
    .txts {
      left: 0;
      width: 100vw;
      .txt1 {
        width: 350px;
        height: 72px;
        background: url(${fav_txt1_m}) no-repeat;
        background-size: contain;
        top: 42%;
        left: 50%;
        margin-left: -175px;
      }
      .txt2 {
        width: 440px;
        height: 129px;
        background: url(${fav_txt2_m}) no-repeat;
        background-size: contain;
        top: 57%;
        left: 50%;
        margin-left: -220px;
      }
    }
    a {
      top: 80%;
      left: 50%;
      margin-left: -58px;
      opacity: 1;
    }
    img {
      width: 620px;
      right: 0;
      left: 50%;
      margin-left: -310px;
      top: 0.5rem;
    }
  }
  @media (max-width: 670px) {
    height: 800px;
    .txts {
      .txt1 {
        animation: none;
      }
      .txt2 {
        animation: none;
      }
    }
    a {
      animation: none;
    }
    img {
      width: 90vw;
      margin-left: -45vw;
      animation: none;
    }
  }
  @media (max-width: 460px) {
    .txts {
      .txt1 {
        width: 90vw;
        background-position: center;
        left: 50%;
        margin-left: -45vw;
      }
      .txt2 {
        width: 90vw;
        left: 50%;
        margin-left: -45vw;
      }
    }
    a {
    }
    img {
      width: 90vw;
      margin-left: -45vw;
    }
  }
`;
const Content06 = () => {
  const [scrolled, setScrolled] = useState(false);
  const topOffset = useRef();
  const onScrolled = () => {
    // console.log(topOffset.current.getBoundingClientRect().top);
    const topPosition = topOffset.current.getBoundingClientRect().top;
    if (topPosition < 450) {
      setScrolled(true);
    }
  };
  return (
    <Content6 onWheel={onScrolled} ref={topOffset} scrolled={scrolled}>
      <div className="txts">
        <div className="txt1" />
        <div className="txt2" />
      </div>
      <a href="/">자세히 보기</a>
      <img src={fav_prod} alt="fav_prod" />
    </Content6>
  );
};

export default Content06;
