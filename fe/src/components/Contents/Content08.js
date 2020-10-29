import React from "react";
import styled from "styled-components";
// img
import store_img01 from "../../images/store_exp_img01.png";
import store_img02 from "../../images/store_exp_img02.png";
import store_img03 from "../../images/store_exp_img03.png";
import store_img04 from "../../images/store_exp_img04.png";
import store_bg from "../../images/store_bg.jpg";
import store_txt01 from "../../images/store_txt01.png";
import store_txt02 from "../../images/store_txt02.png";
import store_txt01_m from "../../images/store_txt01_m.png";
import store_txt02_m from "../../images/store_txt02_m.png";

const Content8 = styled.section`
  background: url(${store_bg});
  height: 400px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  .img01 {
    position: absolute;
    background: url(${store_img01}) no-repeat;
    width: 228px;
    height: 228px;
    z-index: 1;
    top: 35%;
    left: 27%;
  }
  .img02 {
    position: absolute;
    background: url(${store_img02}) no-repeat;
    width: 360px;
    height: 312px;
    z-index: 0;
    left: 10%;
  }
  .img03 {
    position: absolute;
    background: url(${store_img03}) no-repeat;
    width: 343px;
    height: 142px;
    left: 40%;
    top: -14%;
    z-index: 0;
  }
  .img04 {
    position: absolute;
    background: url(${store_img04}) no-repeat;
    width: 230px;
    height: 102px;
    right: -15px;
    bottom: 0;
  }
  .txt01 {
    position: absolute;
    background: url(${store_txt01}) no-repeat;
    top: 6.5rem;
    left: 60%;
    width: 385px;
    height: 54px;
  }
  .txt02 {
    position: absolute;
    background: url(${store_txt02}) no-repeat;
    top: 11rem;
    left: 60%;
    width: 366px;
    height: 61px;
  }

  a {
    position: absolute;
    left: 60%;
    top: 16rem;
    padding: 5px 20px;
    border: 2px solid black;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    &:hover {
      background: #111;
      border: 2px solid #111;
      color: white;
      text-decoration: underline;
    }
  }

  @media (max-width: 960px) {
    height: 750px;

    .img01 {
      width: 200px;
      height: 199px;
      background-size: contain;
      left: 47%;
      top: 19%;
    }
    .img02 {
      width: 300px;
      height: 255px;
      background-size: contain;
      left: 18%;
    }
    .img03 {
      width: 280px;
      height: 115px;
      background-size: contain;
      top: 33%;
      left: 18%;
    }
    .img04 {
      width: 170px;
      height: 75px;
      background-size: contain;
    }
    .txt01 {
      width: 380px;
      height: 96px;
      left: 50%;
      top: 24rem;
      margin-left: -190px;
      background: url(${store_txt01_m}) no-repeat;
      background-size: contain;
    }
    .txt02 {
      width: 440px;
      height: 104px;
      left: 50%;
      top: 32rem;
      margin-left: -220px;
      background: url(${store_txt02_m}) no-repeat;
      background-size: contain;
    }
    a {
      top: 40rem;
      left: 50%;
      padding: 15px 40px;
      margin-left: -72px;
    }
  }
`;
const Content08 = () => {
  return (
    <Content8>
      <div className="img01" />
      <div className="img02" />
      <div className="img03" />
      <div className="img04" />
      <div className="txt01" />
      <div className="txt02" />
      <a href="/">매장 찾기</a>
    </Content8>
  );
};

export default Content08;
