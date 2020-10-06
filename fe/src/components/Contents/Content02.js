import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// icon
import { IoIosArrowDropdown } from "react-icons/io";
import { BsPlusCircle } from "react-icons/bs";

const Content2 = styled.section`
  width: 100wv;
  height: 62px;
  margin-top: -62px;
  margin-bottom: 62px;
  .notice_back,
  .promo_back {
    display: inline-block;
    position: relative;
    width: 50%;
    height: 62px;
    top: 62px;
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
    bottom: 3px;
    z-index: 0;
    width: 1080px;
    display: flex;
    height: 62px;
    margin: 0 auto;
    .notice {
      box-sizing: border-box;
      padding: 12px 0px 16px 80px;
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
      ul {
        overflow: hidden;
        margin: 0;
        margin-top: 10px;
        li {
          padding-left: 10px;
          margin-bottom: 5px;
          list-style: none;
        }
        &:hover {
          transform: translateY(-24px);
        }
      }
      .button {
        position: absolute;
        left: 80%;
        margin-left: 50px;
        margin-right: 10px;
      }
    }
    .promotion {
      display: flex;
      width: 50%;
      background: white;
      color: #666;
      a {
        margin: 12px 0 12px 80px;
        width: 234px;
        display: flex;
        cursor: pointer;
        .text {
          padding-top: 8px;
          font-size: 16px;
          font-weight: bold;
        }
        .button {
          margin-left: 60px;
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
