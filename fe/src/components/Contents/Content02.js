import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// icon
import { IoIosArrowDropdown } from "react-icons/io";
import { BsPlusCircle } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";

const Content2 = styled.section`
  max-width: 100wv;
  height: 64px;
  margin-top: -64px;
  margin-bottom: 64px;
  .notice_back,
  .promo_back {
    display: inline-block;
    position: relative;
    width: 50%;
    height: 100%;
    top: 64px;
    margin: 0;
    z-index: -1;
  }
  .notice_back {
    background: black;
    left: 0px;
  }
  .promo_back {
    background: white;
    left: 50wv;
  }
  .wrapper {
    position: relative;
    bottom: 6px;
    z-index: 0;
    max-width: 1080px;
    display: flex;
    justify-content: spance-between;
    height: 64px;
    margin: 0 auto;
    .notice {
      box-sizing: border-box;
      padding: 12px 0px 16px 20px;
      display: flex;
      position: relative;
      width: 50%;
      background: black;
      color: white;
      .text {
        margin: 8px;
        font-size: 16px;
        font-weight: bold;
      }
      .speaker {
        display: none;
      }
      ul {
        overflow: hidden;
        margin: 0;
        margin-top: 10px;
        padding: 0;
        li {
          padding-left: 10px;
          margin-bottom: 5px;
          list-style: none;
        }
      }
      .button {
        position: absolute;
        left: 80%;
        margin-left: 20px;
        margin-right: 20px;
      }
    }
    .promotion {
      display: flex;
      width: 50%;
      background: white;
      color: #666;
      a {
        color: black;
        text-decoration: none;
        margin: 12px 0 12px 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
        .text {
          padding-top: 8px;
          font-size: 16px;
          font-weight: bold;
        }
        .button {
          margin-right: 50px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    height: 80px;
    .notice_back {
      width: 60%;
    }
    .promo_back {
      width: 40%;
      left: 60wv;
    }
    .wrapper {
      height: 100%;
      .notice {
        width: 60%;
      }
      .promotion {
        width: 40%;
      }
    }
  }
  @media (max-width: 650px) {
    height: 220px;
    .notice_back,
    .promo_back {
      width: 100%;
      height: 50%;
    }
    .promo_back {
      top: 58px;
    }

    .wrapper {
      width: 100%;
      height: 100%;
      bottom: 164px;
      display: block;
      .notice {
        padding: 40px 0 0 30px;
        height: 50%;
        width: 100%;
        .text {
          display: none;
        }
        .speaker {
          display: block;
        }
        ul {
          margin-left: 25px;
          li {
            font-size: 18px;
          }
        }
        .button {
        }
      }
      .promotion {
        height: 50%;
        width: 100%;
        & > a {
          vertical-align: center;
          margin-top: 30px;
          justify-content: space-around;
          .text {
            margin-left: 10px;
            font-size: 2em;
          }
          .button {
            margin-top: 10px;
          }
        }
      }
    }
    @media (max-width: 440px) {
      .wrapper {
        .notice {
          ul {
            li {
              width : 61.4vw;
              font-size: 18px;
              text-overflow:ellipsis;
              overflow:hidden;
              white-space:nowrap;
              word-wrap:normal;
            }
          }
        }
        .promotion {
          & > a {
            .text {
              font-size: 1.5em;
            }
           }
        }
      }
  }
`;

const listData = {
  1: "개인정보 처리방침 개정안내",
  2: "스타벅스 카드 약관 개정안내",
  3: "스타벅스 카드/홈페이지 이용안내",
  4: "사이렌 오더 음료 기본 설정 변경 안내",
};
const Content02 = () => {
  const [listCount, setListCount] = useState(1);
  const listText = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setListCount((listCount) => {
        if (listCount === 4) {
          return 1;
        }
        return listCount + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    listText.current.innerText = listData[listCount];
  }, [listCount]);

  return (
    <Content2>
      <div className="notice_back"></div>
      <div className="promo_back"></div>
      <div className="wrapper">
        <div className="notice">
          <div className="text">공지사항</div>
          <HiSpeakerphone className="speaker" size={36} />
          <ul>
            <li ref={listText}></li>
            {/* <li>개인정보 처리방침 개정안내</li>
            <li>스타벅스 카드 약관 개정안내</li>
            <li>스타벅스 카드/홈페이지 이용안내</li>
            <li>사이렌 오더 음료 기본 설정 변경 안내</li> */}
          </ul>
          <div className="button">
            <BsPlusCircle size={36} />
          </div>
        </div>
        <div className="promotion">
          <a href="/">
            <div className="text">스타벅스 프로모션</div>
            <div className="button">
              <IoIosArrowDropdown size={36} />
            </div>
          </a>
        </div>
      </div>
    </Content2>
  );
};

export default Content02;
