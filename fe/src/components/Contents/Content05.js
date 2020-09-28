import React from "react";
import styled from "styled-components";
// img
import reserve_logo from "../../images/reserve_logo.png";
import reserve_img from "../../images/reserve_ukambani_visual.png";
import reserve_txt from "../../images/reserve_ukambani.png";

const Content_5 = styled.section`
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
    &:hover {
      background: black;
      color: white;
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;
const Content05 = () => {
  return (
    <Content_5>
      <img src={reserve_logo} className="logo" />
      <img src={reserve_txt} className="txt" />
      <img src={reserve_img} className="img" />
      <a>자세히 보기</a>
    </Content_5>
  );
};

export default Content05;
