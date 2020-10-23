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
  position: relative;
  background: url(${autumn_bg});
  background-size : cover;
  width: 100%;
  overflow: hidden;
  height: 646px;
  .wrapper {
    max-width: 1100px;
    height: 100%;
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
      position: relative;
      max-width: 100%;
      height: 100%;
      padding: 0 auto;

      opacity: 0;

      & > img {
        max-width: 32.5%;
        position: absolute;
        height: auto;
        bottom: 16px;
        left: 17%;
      }
      .itemName01 {
        max-width: 100%;
        & > img {
          position: absolute;
          max-width: 17.2%;
          height: auto;
          bottom: 150px;
          left: 30px;
        }
      }
      ${(props) =>
        props.loaded &&
        css`
          animation: ${fadeIn} 1s linear 0.5s forwards;
        `}
    }
    .item02 {
      display : block
      position: absolute;
      max-width: 100%;
      height: 100%;

      opacity: 0;
      & > img {
        max-width: 34.7%;
        position: absolute;
        height: auto;
        bottom :75px;
        left : 38%;
      }
      
      .itemName02 {
        max-width : 100%;
        & > img {
          position: absolute;
          max-width: 12%;
          height: auto;
          // top : 80.4%;
          bottom : 55px;
          left : 45%;
        }
      }
     

      ${(props) =>
        props.loaded &&
        css`
          animation: ${fadeIn} 1s linear 1.5s forwards;
        `}
    }
    .item03 {
      display : block
      position: absolute;
      max-width: 100%;
      height: 100%;

      opacity: 0;
      .item03_wrapper {
        position : absolute;
        max-width : 29.8%;
        height : auto;
        bottom : 10%;
        left : 63%;
        &>img {
          max-width: 100%;
          position: relative;
          height: auto;
        }
        
        .itemName03 {
          max-width : 60%;
          position : relative;
          left : 15px;
          & > img {
            position: relative;
            max-width: 80%;
            // width : 80%
            height: auto;
          }
        }
      }
      
      ${(props) =>
        props.loaded &&
        css`
          animation: ${fadeIn} 1s linear 2.5s forwards;
        `}
    }
    .item04 {
      display : block
      position: absolute;
      max-width: 100%;
      height: 100%;

      opacity: 0;
      img {
        max-width: 30.9%;
        position: absolute;
        height: auto;
        bottom :25px;
        right : -10%;
      }
      .itemName04 {
        max-width : 100%;
        & > img {
          position: absolute;
          max-width: 18.7%;
          height: auto;
          left : 79%;
          bottom : 45px;
        }
      }
      ${(props) =>
        props.loaded &&
        css`
          animation: ${fadeIn} 1s linear 3.5s forwards;
        `}
    }
  }
  @media (max-width: 670px) {

    height: 1550px;
    .wrapper {
      max-width : 100%;
      .title {
        max-width : 100%;
        background-size : contain;
        background-position : center;
        margin : 0;
        ${(props) =>
          props.loaded &&
          css`
            animation: ${fadeIn} 1s linear 0.5s forwards;
          `}
      }
      a {
        margin : 0;
        margin-left : -59px;
        top : 1475px;
        left : 50%;
        ${(props) =>
          props.loaded &&
          css`
            animation: ${fadeIn} 1s linear 5.5s forwards;
          `}
      }
      .item01 {
      max-width: 100%;
      height: 100%;
      padding: 0 auto;
        & > img {
          max-width: 57.2%;
          top : 11%;
          left : 47%;
        }
        .itemName01 {
          max-width: 70%;
          & > img {
            max-width: 100%;
            top : 21%;
            left : 12%;
          }
        }
      }
      .item02 {
        & > img {
          max-width: 67%;
          top : 30%;
          left : 2%;
        }
        
        .itemName02 {
          max-width : 100%;
          & > img {
            position: absolute;
            max-width: 100%;
            height: auto;
            top : 45%;
            left : 60%;
          }
        }
      }
      .item03 {
        max-width : 100%;
        .item03_wrapper {
          max-width : 83%;
          height : auto;
          bottom : 17%;
          left : 45%;
          &>img {
            max-width: 100%;
            left : 20%;
          }
          
          .itemName03 {
            max-width : 100%;
            position : absolute;
            left : -35%;
            top : 25%;
            & > img {
              position: relative;
              max-width: 100%;
              // width : 80%
              height: auto;
            }
          }
        }
      }
      .item04 {
        img {
          max-width: 52.9%;
          left : 10%;
          bottom : -2%;
        }
        .itemName04 {
          max-width : 100%;
          & > img {
            position: absolute;
            max-width: 100%;
            height: auto;
            left : 50%;
            bottom : 11%;
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    height: 1200px;
    .wrapper {
      .title {
      }
      a {
        top : 1155px;
      }
      .item01 {
        &>img {
          max-width: 50.2%;
          top : 15%;
          left : 52%;
        }
        .itemName01 {
          max-width: 100%;
          & > img {
            max-width: 50%;
            top : 25%;
            left : 10%;
          }
        }
      }
      
      .item02 {
        & > img {
          max-width: 67%;
          top : 32%;
          left : 2%;
        }
        
        .itemName02 {
          max-width : 100%;
          & > img {
            max-width: 40%;
            top : 42%;
            left : 55%;
          }
        }
      }
      .item03 {
        max-width : 100%;
        .item03_wrapper {
          max-width : 83%;
          height : auto;
          bottom : 19%;
          left : 45%;
          &>img {
            max-width: 100%;
            left : 20%;
          }
          
          .itemName03 {
            max-width : 70%;
            position : absolute;
            left : -55%;
            top : 25%;
            & > img {
              position: relative;
              max-width: 100%;
              height: auto;
            }
          }
        }
      }
      .item04 {
        img {
          max-width: 52.9%;
          left : 10%;
          bottom : 0%;
        }
        .itemName04 {
          max-width : 100%;
          & > img {
            max-width: 50%;
            left : 45%;
            bottom : 11%;
          }
        }
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
          <div className="item03_wrapper">
            <div className="itemName03">
              <img src={autumn_item03Name} alt="" />
            </div>
            <img src={autumn_item03} alt="" />
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
