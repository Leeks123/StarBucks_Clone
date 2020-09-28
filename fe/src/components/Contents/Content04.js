import React from "react";
import styled from "styled-components";
// img
import bean_bg from "../../images/bean_bg.jpg";
import bean_img from "../../images/bean_img.png";
import bean_txt from "../../images/bean_txt.png";

const Content_4 = styled.section`
  .wrapper {
    background: url(${bean_bg}) no-repeat;
    img {
      position: relative;
      top : 3rem;
      left : 20rem;
      padding : 30px;
    }
    .bean_txt {
      position relative;
      top : -21rem;
      left : 40rem;
      background: url(${bean_txt}) no-repeat;
      width: 453px;
      height: 129px;
    }
    a {
        position : relative;
        left : 40rem;
        top : -17rem;
      padding: 10px 20px;
      border: 2px solid black;
      border-radius : 5px;
      &:hover {
          background : black;
          color : white;
          text-decoration : underline;
          font-weight : bold;
      }
    }
  }
`;
const Content04 = () => {
  return (
    <Content_4>
      <div className="wrapper">
        <img src={bean_img} />
        <div className="bean_txt"></div>
        <a className="bean_more">자세히 보기</a>
      </div>
    </Content_4>
  );
};

export default Content04;
