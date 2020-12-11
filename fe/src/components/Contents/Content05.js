import React from "react";
import styled from "styled-components";
// img
import reserve_logo from "../../images/reserve_logo.png";
import reserve_img from "../../images/reserve_ukambani_visual.png";
import reserve_txt from "../../images/reserve_ukambani.png";

const Content5 = styled.section`
  background: #f4eed9;
  height: 342px;
  position: relative;
  top: -77px;
  .logo {
    position: absolute;
    top: 8rem;
    left: 2rem;
    height: 6rem;
  }
  .txt {
    position: absolute;
    top: 4rem;
    left: 20%;
    width: 12rem;
  }
  .img {
    height: 100%;
    width: 40wv;
    position: absolute;
    right: 0px;
  }
  a {
    position: absolute;
    top: 14rem;
    left: 20%;
    padding: 10px 20px;
    border: 2px solid black;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    &:hover {
      background: black;
      color: white;
      text-decoration: underline;
      font-weight: bold;
    }
  }
  @media (max-width: 1000px) {
    height: 150vw;
    .logo {
      box-sizing: content-box;
      position: relative;
      top: 5%;
      left: 0;
      width: 16%;
      padding: 0 42%;
      height: auto;
    }
    .txt {
      position: relative;
      top: 10%;
      left: 0%;
      width: 30%;
      height: auto;
      padding: 10px 35%;
    }
    .img {
      position: relative;
      left: 0;
      top: 15%;
      width: 100vw;
      height: auto;
    }
    a {
      box-sizing: content-box;
      // position: relative;
      left: 50%;
      top: 83%;
      padding: 20px 70px;
      font-size: 20px;
      color: black;
      text-decoration: none;
      width: 93px;
      margin-left: -115px;
    }
  }
  @media (max-width: 440px) {
    height: 170vw;
    
    a {
      top: 70%;
    }
  }
`;
const Content05 = () => {
  return (
    <Content5>
      <img src={reserve_logo} alt="" className="logo" />
      <img src={reserve_txt} alt="" className="txt" />
      <img src={reserve_img} alt="" className="img" />
      <a href="/">자세히 보기</a>
    </Content5>
  );
};

export default Content05;
