import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "animate.css";

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

const Content_1 = styled.section`
  background: url(${autumn_bg});
  width: 100%;
  // height: calc(100%-120px);
  height: 646px;
  .wrapper {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    .title {
      position: absolute;
      width: 382px;
      height: 134px;
      top: 5rem;
      background: url(${autumn_emblem}) no-repeat;
    }
    a {
      position: relative;
      top: 15rem;
      padding: 5px 20px;
      border: 2px solid white;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      &:hover {
        background: #111;
        border: 2px solid #111;
        color: black;
        text-decoration: underline;
      }
    }
    .item01 {
      display: none;
    }
    .item01.animate__animated.animate__fadeIn.animate__delay-5s {
      display: block;
      position: absolute;
      width: 358px;
      height: 500px;
      top: 10rem;
      left: 17%;
      animation: fadeIn;
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
      &:hover {
        animation: fadeIn;
      }
    }
    .item02 {
      position: absolute;
      width: 382px;
      height: 134px;
      top: 9rem;
      left: 26rem;
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
    }
    .item03 {
      position: absolute;
      width: 328px;
      height: 134px;
      top: 10rem;
      left: 65%;
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
    }
    .item04 {
      position: absolute;
      width: 304px;
      height: 134px;
      top: 5rem;
      left: 83%;
      img {
        width: 100%;
      }
      .itemName04 {
        position: absolute;
        top: 27rem;
        width: 206px;
        height: 134px;
      }
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
    <Content_1>
      <div className="wrapper">
        <div className="title" />
        <a>자세히 보기</a>
        <div
          className={
            "item01 " +
            (onLoaded
              ? "animate__animated animate__fadeIn animate__delay-5s"
              : "")
          }
        >
          <img src={autumn_item01} />
          <div className="itemName01">
            <img src={autumn_item01Name} />
          </div>
        </div>
        <div className="item02">
          <img src={autumn_item02} />
          <div className="itemName02">
            <img src={autumn_item02Name} />
          </div>
        </div>
        <div className="item03">
          <img src={autumn_item03} />
          <div className="itemName03">
            <img src={autumn_item03Name} />
          </div>
        </div>
        <div className="item04">
          <img src={autumn_item04} />
          <div className="itemName04">
            <img src={autumn_item04Name} />
          </div>
        </div>
      </div>
    </Content_1>
  );
};

export default Content01;
