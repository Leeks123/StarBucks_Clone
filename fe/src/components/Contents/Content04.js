import React, { useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
// img
import bean_bg from "../../images/bean_bg.jpg";
import bean_img from "../../images/bean_img.png";
import bean_txt from "../../images/bean_txt.png";
import bean_txt_m from "../../images/bean_txt_m.png";

const fadeInLeft = keyframes`
    from {
        left : -26.6%;
    }
    to {
        left:26.6%;
    }
`;
const fadeInLeft_990 = keyframes`
    from {
        left : -16% 
    }
    to {
        left:16%;
    }
`;
const fadeInRight = keyframes`
    from {
        left : 106%;
    }
    to {
        left:53%;
    }
`;
const fadeInRight_990 = keyframes`
    from {
      left : 106%;
    }
    to {
      left:50%;
    }
`;

const Content4 = styled.section`
  .wrapper {
    background: url(${bean_bg}) no-repeat;
    background-size : cover;
    img {
      position: relative;
      top : 3rem;
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
      left : 80rem;
      background: url(${bean_txt}) no-repeat;
      background-size : contain;
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
      left : 80rem;
      top : -17rem;
      padding: 10px 20px;
      border: 2px solid black;
      border-radius : 5px;
      color : black;
      text-decoration : none;
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

  @media (max-width : 990px) {
    .wrapper {
      img {
        top : 3rem;
        left : 3rem;
        width : 210px;
        ${(props) =>
          props.scrolled &&
          css`
            animation: ${fadeInLeft_990} 1.5s linear 0s forwards;
          `}
      }
      .bean_txt {
        width : 450px;
        top : -21rem;
        left : 42.3%;
        ${(props) =>
          props.scrolled &&
          css`
            animation: ${fadeInRight_990} 1.5s linear 0s forwards;
          `}
      }
      a {
        left : 42.3%;
        top : -17rem;
        ${(props) =>
          props.scrolled &&
          css`
            animation: ${fadeInRight} 1.5s linear 0s forwards;
          `}
      }
    }
  }
  @media (max-width : 810px) {
    .wrapper {
      img {
        left : 2rem;
      }
      .bean_txt {
        width : 370px;
        top : -18rem;
      }
      
    }
    
  }
  @media (max-width : 660px) {
   .wrapper {
    height : 165vw;
     img {
       width : 33.4%;
       padding : 30px 33.3%;
       left : 0;
     }
     .bean_txt {
      background : url(${bean_txt_m}) no-repeat;
      background-position : center;
      background-size : contain;
      width : 100%;
      height : 21.6%;
      top : 7%;
      left : 0;
     }
     a {
      top : 17%;
      left : 50%;
      padding : 20px 70px;
      font-size : 20px;
      margin-left : -117px;
     }
   } 
  }
  @media (max-width : 500px) {
    .wrapper{
      a {
        top : 13%;
        left : 50%;
        padding : 10px 20px;
        font-size : 15px;
        margin-left : -56.5px
       }
    }
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
