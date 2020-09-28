import React from "react";
import styled from "styled-components";
// img
import fav_txt1 from "../../images/fav_prod_txt01.png";
import fav_txt2 from "../../images/fav_prod_txt02.png";
import fav_prod from "../../images/fav_20_autumn1.png";

const Content_6 = styled.section`
  height: 650px;
  padding-top: 50px;
  position: relative;
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
    top: 18rem;
    left: 2rem;
    background: url(${fav_txt2}) no-repeat;
    width: 24rem;
    height: 12rem;
    margin: 0;
  }
  a {
    position: absolute;
    top: 30rem;
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
  return (
    <Content_6>
      <div className="txt1" />
      <div className="txt2" />
      <a>자세히 보기</a>
      <img src={fav_prod} alt="fav_prod" />
    </Content_6>
  );
};

export default Content06;
