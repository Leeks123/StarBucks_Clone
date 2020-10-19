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
    .wrapper {
      max-width : 100%;
      .title {
        position: absolute;
        max-width: 100%;
        height: 134px;
        margin-left : 0;
        
        background: url(${autumn_emblem}) no-repeat;
        opacity: 0;
        ${(props) =>
          props.loaded &&
          css`
            animation: ${fadeIn} 1s linear 4.5s forwards;
          `}
      }
      a {
      }
      .item01 {
        img {
        }
        .itemName01 {
        }
      }
      .item02 {
        img {
        }
        .itemName02 {
        }
      }
      .item03 {
        img {
        }
        .itemName01 {
        }
      }
      .item04 {
        img {
        }
        .itemName04 {
        }
      }
    }
  }
  @media (max-width: 480px) {
    .wrapper {
      .title {
      }
      a {
      }
      .item01 {
        img {
        }
        .itemName01 {
        }
      }
      .item02 {
        img {
        }
        .itemName02 {
        }
      }
      .item03 {
        img {
        }
        .itemName01 {
        }
      }
      .item04 {
        img {
        }
        .itemName04 {
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
