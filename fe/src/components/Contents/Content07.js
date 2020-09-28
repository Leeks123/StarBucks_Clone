import React from "react";
import styled from "styled-components";
// img
import reserve_visual from "../../images/reserve_visual_pc.png";
import reserve_text from "../../images/reserve_text_pc.png";

const Content_7 = styled.section`
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
    left: 50%;
    background: url(${reserve_text}) no-repeat;
    width: 42%;
    height: 85px;
  }
  a {
    position: absolute;
    top: 65%;
    left: 50%;
    color: #666;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    padding: 5px;
    &:hover {
      background-color: #c19d55;

      color: white;
    }
  }
`;
const Content07 = () => {
  return (
    <Content_7>
      <div className="reserve_left" />
      <div className="reserve_right" />
      <a>EXPLORE OUR STORY</a>
    </Content_7>
  );
};

export default Content07;
