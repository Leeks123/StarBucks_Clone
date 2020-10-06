import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// img
import autumn_bg from "../../images/2020_autumn1_bg.jpg";
import autumn_emblem from "../../images/2020_autumn1_emblem.png";
import autumn_item01 from "../../images/2020_autumn1_item01.png";
import autumn_item02 from "../../images/2020_autumn1_item02.png";
import autumn_item03 from "../../images/2020_autumn1_item03.png";
import autumn_item04 from "../../images/2020_autumn1_item04.png";
import autumn_item01Name from "../../images/2020_autumn1_item01_name.png";
import autumn_item02Name from "../../images/2020_autumn1_item02_name.png";
import autumn_item03Name from "../../images/2020_autumn1_item03_name.png";
import autumn_item04Name from "../../images/2020_autumn1_item04_name.png";

const fadeIn = keyframes`
    from {
        opacity : 0;
    }
    to {
        opacity : 1;
    }
`;

const Content1 = styled.section`
  background: url(${autumn_bg});
  width: 100%;
  // height: calc(100%-120px);
  overflow: hidden;
  height: 646px;
  .wrapper {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    .title {
      position: absolute;
      width: 100%;
      height: 134px;
      top: 5rem;
      margin-left: 30px;
      background: url(${autumn_emblem}) no-repeat;
      opacity: 0;
      ${(props) =>
        props.loaded &&
        css`
          animation: ${fadeIn} 1s linear 4.5s forwards;
        `}
    }
    a {
      position: relative;
      top: 15rem;
      padding: 5px 20px;
      margin-left: 50px;
      border: 2px solid white;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      &:hover {
        background: #e2c383;
        color: black;
        text-decoration: underline;
      }
      opacity: 0;
      ${(props) =>
        props.loaded &&
        css`
          animation: ${fadeIn} 1s linear 5.5s forwards;
        `}
    }

    .item01 {
      display: block;
      position: absolute;
      width: 358px;
      height: 500px;
      top: 10rem;
      left: 17%;
      opacity: 0;

      img {
        width: 100%;
      }
      .itemName01 {
        position: absolute;
        width: 190px;
        height: 134px;
        top: 20rem;
        left: -10rem;
      }
      ${(props) =>
        props.loaded &&
        css`
          animation: ${fadeIn} 1s linear 0.5s forwards;
        `}
    }
    .item02 {
      position: absolute;
      width: 382px;
      height: 134px;
      top: 9rem;
      left: 26rem;
      opacity: 0;
      img {
        width: 100%;
      }
      .itemName02 {
        position: absolute;
        top: -1rem;
        left: 4.5rem;
        width: 132px;
        height: 134px;
      }
      ${(props) =>
        props.loaded &&
        css`
          animation: ${fadeIn} 1s linear 1.5s forwards;
        `}
    }
    .item03 {
      position: absolute;
      width: 328px;
      height: 134px;
      top: 10rem;
      left: 65%;
      opacity: 0;
      img {
        width: 100%;
      }
      .itemName03 {
        position: absolute;
        top: -3rem;
        left: 1.5rem;
        width: 124px;
        height: 134px;
      }
      ${(props) =>
        props.loaded &&
        css`
          animation: ${fadeIn} 1s linear 2.5s forwards;
        `}
    }
    .item04 {
      position: absolute;
      width: 304px;
      height: 134px;
      top: 5rem;
      right: -10%;
      opacity: 0;
      img {
        width: 100%;
      }
      .itemName04 {
        position: absolute;
        top: 27rem;
        width: 206px;
        height: 134px;
      }
      ${(props) =>
        props.loaded &&
        css`
          animation: ${fadeIn} 1s linear 3.5s forwards;
        `}
    }
  }
`;

const Content01 = () => {
  const [onLoaded, setOnLoaded] = useState(false);

  useEffect(() => {
    console.log("content01 loaded");
    setOnLoaded(true);
  }, []);

  return (
    <Content1 loaded={onLoaded}>
      <div className="wrapper">
        <div className="title" />
        <a href="/">자세히 보기</a>
        <div className="item01">
          <img src={autumn_item01} alt="" />
          <div className="itemName01">
            <img src={autumn_item01Name} alt="" />
          </div>
        </div>
        <div className="item02">
          <img src={autumn_item02} alt="" />
          <div className="itemName02">
            <img src={autumn_item02Name} alt="" />
          </div>
        </div>
        <div className="item03">
          <img src={autumn_item03} alt="" />
          <div className="itemName03">
            <img src={autumn_item03Name} alt="" />
          </div>
        </div>
        <div className="item04">
          <img src={autumn_item04} alt="" />
          <div className="itemName04">
            <img src={autumn_item04Name} alt="" />
          </div>
        </div>
      </div>
    </Content1>
  );
};

export default Content01;
