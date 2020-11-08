import React from "react";
import styled from "styled-components";
import footer_logo from "../../images/footer_logo.png";
import Awards from "./Awards";
import BottomFooter from "./BottomFooter";

const StyledFooter = styled.div`
  z-index: -20;
  width: 100vw;
  height: 800px;
  background: #2c2a29;
  padding: 32px 0px;
  box-sizing: border-box;
  & a {
    color: white;
    text-decoration: none;
    l &:hover {
      text-decoration: underline;
    }
  }
  & ul {
    padding: 0;
    li {
      list-style: none;
    }
  }
  @media (max-width: 660px) {
    height: 1450px;
    padding: 0;
  }
`;
const TopFooter = styled.div`
  background: url(${footer_logo}) right 8px no-repeat;
  width: 600px;
  margin: 0px auto;
  padding-bottom: 30px;
  .wrapper {
    display: grid;
    grid-template-columns: 195px 195px 195px;
    row-gap: 25px;
    & span {
      font: 14px arial, HelveticaNeue, DroidSans, Sans-serif, Helvetica;
      color: white;
    }
    & li {
      font: 12px "nbg", "맑은 고딕", HelveticaNeue, DroidSans, Sans-serif,
        Helvetica;
      color: white;
      height: 24px;
    }
    & a {
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 660px) {
    margin: 0;
    width: 100vw;
    .wrapper {
      display: block;
      & span {
        box-sizing: content-box;
        display: block;
        background-color: #645952;
        height: 17px;
        padding: 16.5px 0;
        padding-left: 10px;
        font-size: 14px;
      }
      ul {
        margin: 0;
        & li {
          box-sizing: content-box;
          background-color: #8c8279;
          height: 17px;
          padding: 16.5px 0;
        }
        & a {
          font-size: 14px;
          color: #e6dbd3;

          margin-left: 10px;
        }
      }
    }
  }
`;
const MidFooter = styled.div`
  .wrapper {
    width: 620px;
    margin: 0 auto;
  }
  height: 80px;
  padding: 10px;
  background: #282828;
  box-sizing: border-box;

  @media (max-width: 660px) {
    .wrapper {
      width: 100%;
    }
  }
`;
const FooterTemplate = () => {
  return (
    <StyledFooter>
      <TopFooter>
        <div className="wrapper">
          <div className="grid">
            <span>
              <a href="/">COMPANY</a>
            </span>
            <ul>
              <li>
                <a href="/">한눈에 보기</a>
              </li>
              <li>
                <a href="/">스타벅스 사명</a>
              </li>
              <li>
                <a href="/">스타벅스 소개</a>
              </li>
              <li>
                <a href="/">국내 뉴스룸</a>
              </li>
              <li>
                <a href="/">세계의 스타벅스</a>
              </li>
              <li>
                <a href="/">글로벌 뉴스룸</a>
              </li>
            </ul>
          </div>
          <div className="grid">
            <span>
              <a href="/">CORPORATE SALES</a>
            </span>
            <ul>
              <li>
                <a href="/">단체 및 기업 구매 안내</a>
              </li>
            </ul>
          </div>
          <div className="grid">
            <span>
              <a href="/">PARTNERSHIP</a>
            </span>
            <ul>
              <li>
                <a href="/">신규 입점 제외</a>
              </li>
              <li>
                <a href="/">협력 고객사 등록신청</a>
              </li>
            </ul>
          </div>
          <div className="grid">
            <span>
              <a href="/">ONLINE COMMUNITY</a>
            </span>
            <ul>
              <li>
                <a href="/">페이스북</a>
              </li>
              <li>
                <a href="/">트위터</a>
              </li>
              <li>
                <a href="/">유튜브</a>
              </li>
              <li>
                <a href="/">블로그</a>
              </li>
              <li>
                <a href="/">인스타그램</a>
              </li>
            </ul>
          </div>
          <div className="grid">
            <span>
              <a href="/">RECRUIT</a>
            </span>
            <ul>
              <li>
                <a href="/">채용 소개</a>
              </li>
              <li>
                <a href="/">채용 지원하기</a>
              </li>
            </ul>
          </div>
        </div>
      </TopFooter>
      <MidFooter>
        <div className="wrapper">
          <Awards />
        </div>
      </MidFooter>
      <BottomFooter />
    </StyledFooter>
  );
};

export default FooterTemplate;
