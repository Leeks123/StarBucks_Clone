import React from "react";
import styled from "styled-components";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { BsPlusCircle } from "react-icons/bs";
import badge from "../../images/nStore_badge_pc.png";
import rewards_logo from "../../images/rewards-logo.png";
import bean_bg from "../../images/bean_bg.jpg";
import bean_img from "../../images/bean_img.png";
import bean_txt from "../../images/bean_txt.png";
import reserve_logo from "../../images/reserve_logo.png";
import reserve_img from "../../images/reserve_ukambani_visual.png";
import reserve_txt from "../../images/reserve_ukambani.png";

const StyledContents = styled.div`
  padding-top: 120px;
`;
const Badge = styled.div`
  display: none;
  position: fixed;
  top: 135px;
  right: 10px;
  float: right;
  width: 200px;
  height: 290px;
  background: url(${badge});
  z-index: 10;
`;

const Content_1 = styled.div``;
const Content_2 = styled.section`
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
const Content_3 = styled.section`
background: #1e3932;
.wrapper {
    width : 1080px;
    margin : 0 auto;
    display: flex;

    height: 167px;
    padding: 35px;
    color: white;
    a {
      border: 2px solid white;
      border-radius: 5px;
      padding: 10px 18px;
      &:hover {
        text-decoration: underline;
      }
    }
    img {
      width: 176px;
      height: 152px;
    }
    .reward_contents {
        width : 100%;
      padding: 0 40px;
     
      .reward_text {
          border-bottom : 0.5px solid white;
          h2{
              margin : 0px;
              font-size : 26px;
          }
          .reward_text_login{
              display : flex;
              justify-content : space-between;
              p {
                  margin-right : 50px;
                  margin : 0;
                  padding : 16px 0;
              }
              .btns {
                padding : 22px 0 16px 0;
                #green {
                    background : #00704a;
                    border : 1px solid #00704a;
                }
                a {
                    margin : auto 0;
                    margin-left : 10px;
                    position : relative;
                    right : 0;
                    font-weight : bold;
                  }
              }
          }
      }
      .ecard_text {
          display : flex;
          justify-content : space-between;
          padding : 16px 0;
          p {
              margin : 0px;
          }
      }
    }
`;
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
const Content_5 = styled.section`
  background: #f4eed9;
  height: 342px;
  position: relative;
  top: -77px;
  .logo {
    position: absolute;
    top: 8rem;
    left: 2rem;
    height: 6rem;
  }
  .txt {
    position: absolute;
    top: 4rem;
    left: 20%;
    width: 12rem;
  }
  .img {
    height: 100%;
    width: 40wv;
    position: absolute;
    right: 0px;
  }
  a {
    position: absolute;
    top: 14rem;
    left: 20%;
    padding: 10px 20px;
    border: 2px solid black;
    border-radius: 5px;
    &:hover {
      background: black;
      color: white;
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;
const Content_6 = styled.div``;
const Content_7 = styled.div``;

const ContentsTemplate = () => {
  return (
    <div>
      <Badge />
      <StyledContents>
        <section className="content_1">dfkjdkf</section>
        <Content_2>
          <div className="notice_back"></div>
          <div className="promo_back"></div>
          <div className="wrapper">
            <div className="notice">
              <div className="text">공지사항</div>
              <ul>
                <li>개인정보 처리방침 개정안내</li>
                <li>스타벅스 카드 약관 개정안내</li>
                <li>스타벅스 카드/홈페이지 이용안내</li>
                <li>사이렌 오더 음료 기본 설정 변경 안내</li>
              </ul>
              <div className="button">
                <BsPlusCircle size={36} />
              </div>
            </div>
            <div className="promotion">
              <a>
                <div className="text">스타벅스 프로모션</div>
                <div className="button">
                  <IoIosArrowDropdown size={36} />
                </div>
              </a>
            </div>
          </div>
        </Content_2>
        <Content_3>
          <div className="wrapper">
            <img src={rewards_logo} alt="rewards_logo" />
            <div className="reward_contents">
              <div className="reward_text">
                <h2>스타벅스만의 특별한 혜택, 스타벅스 리워드</h2>
                <div className="reward_text_login">
                  <p>
                    <strong>스타벅스 회원이세요?</strong> 로그인을 통해 나만의
                    리워드를 확인해보세요.
                    <br />
                    <strong>스타벅스 회원이 아니세요?</strong> 가입을 통해
                    리워드 혜택을 즐기세요.
                  </p>
                  <div className="btns">
                    <a id="green">회원가입</a>
                    <a>로그인</a>
                  </div>
                </div>
              </div>
              <div className="ecard_text">
                <p>
                  회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로
                  구매하시고, 편리하게 등록하세요!
                  <br />
                  카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를
                  하시면 무료 음료쿠폰을 드립니다!
                </p>
                <a>e-Gift Card 선물하기</a>
              </div>
            </div>
          </div>
        </Content_3>
        <Content_4>
          <div className="wrapper">
            <img src={bean_img} />
            <div className="bean_txt"></div>
            <a className="bean_more">자세히 보기</a>
          </div>
        </Content_4>
        <Content_5>
          <img src={reserve_logo} className="logo" />
          <img src={reserve_txt} className="txt" />
          <img src={reserve_img} className="img" />
          <a>자세히 보기</a>
        </Content_5>
        <section className="content_6">dfkjdkf</section>
        <section className="content_7">dfkjdkf</section>
      </StyledContents>
    </div>
  );
};

export default ContentsTemplate;
