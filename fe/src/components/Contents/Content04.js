import React, { useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
// img
import bean_bg from "../../images/bean_bg.jpg";
import bean_img from "../../images/bean_img.png";
import bean_txt from "../../images/bean_txt.png";

const fadeInLeft = keyframes`
    from {
        left : -20rem
    }
    to {
        left:20rem;
    }
`;
const fadeInRight = keyframes`
    from {
        left : 80rem;
    }
    to {
        left:40rem;
    }
`;

const Content4 = styled.section`
  .wrapper {
    background: url(${bean_bg}) no-repeat;
    img {
      position: relative;
      top : 3rem;
    //   left : 20rem;
    left : -20rem;
      padding : 30px;
      ${(props) =>
        props.scrolled &&
        css`
          animation: ${fadeInLeft} 1.5s linear 0s forwards;
        `}
    }
    .bean_txt {
      position relative;
      top : -21rem;
    //   left : 40rem;
    left : 80rem;
      background: url(${bean_txt}) no-repeat;
      width: 453px;
      height: 129px;
      ${(props) =>
        props.scrolled &&
        css`
          animation: ${fadeInRight} 1.5s linear 0s forwards;
        `}
    }
    a {
      position : relative;
    //   left : 40rem;
    left : 80rem;
      top : -17rem;
      padding: 10px 20px;
      border: 2px solid black;
      border-radius : 5px;
      ${(props) =>
        props.scrolled &&
        css`
          animation: ${fadeInRight} 1.5s linear 0s forwards;
        `}
      &:hover {
        background : black;
        color : white;
        text-decoration : underline;
        font-weight : bold;
      }
    }
  }

  @media (max-width : 960px) {

  }
  @media (max-width : 810px) {
    
  }
  @media (max-width : 660px) {
    
  }
  @media (max-width : 500px) {
    
  }
`;
const Content04 = () => {
  const [scrolled, setScrolled] = useState(false);
  const topOffset = useRef();
  const onScrolled = () => {
    // console.log(topOffset.current.getBoundingClientRect().top);
    const topPosition = topOffset.current.getBoundingClientRect().top;
    if (topPosition < 550) {
      setScrolled(true);
    }
  };
  return (
    <Content4 onWheel={onScrolled} scrolled={scrolled}>
      <div className="wrapper" ref={topOffset}>
        <img src={bean_img} alt="" />
        <div className="bean_txt" />
        <a href="/" className="bean_more">
          자세히 보기
        </a>
      </div>
    </Content4>
  );
};

export default Content04;
