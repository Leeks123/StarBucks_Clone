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
import fav_bg from "../../images/fav_prod_bg.jpg";
import fav_txt1 from "../../images/fav_prod_txt01.png";
import fav_txt2 from "../../images/fav_prod_txt02.png";
import fav_prod from "../../images/fav_20_autumn1.png";
import reserve_visual from "../../images/reserve_visual_pc.png";
import reserve_text from "../../images/reserve_text_pc.png";
import store_img01 from "../../images/store_exp_img01.png";
import store_img02 from "../../images/store_exp_img02.png";
import store_img03 from "../../images/store_exp_img03.png";
import store_img04 from "../../images/store_exp_img04.png";
import store_bg from "../../images/store_bg.jpg";
import store_txt01 from "../../images/store_txt01.png";
import store_txt02 from "../../images/store_txt02.png";
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

const StyledContents = styled.div`
  padding-top: 120px;
  .favBg {
    position: fixed;
    left: -150px;
    right: 0px;
    width: 100wv;
    height: 100%;
    z-index: -20;

    img {
      overflow: visible;
      width: 100%;
      height: 85%;
    }
  }
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

const Content_1 = styled.section`
  background: url(${autumn_bg});
  width: 100%;
  // height: calc(100%-120px);
  height: 646px;
  .wrapper {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    .title {
      position: absolute;
      width: 382px;
      height: 134px;
      top: 5rem;
      background: url(${autumn_emblem}) no-repeat;
    }
    a {
      position: relative;
      top: 15rem;
      padding: 5px 20px;
      border: 2px solid white;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      &:hover {
        background: #111;
        border: 2px solid #111;
        color: black;
        text-decoration: underline;
      }
    }
    .item01 {
      position: absolute;
      width: 358px;
      height: 500px;
      top: 10rem;
      left: 17%;
      img {
        width: 100%;
      }
      .itemName01 {
        position: absolute;
        width: 190px;
        height: 134px;
        top: 20rem;
        left: -10rem;
      }
    }
    .item02 {
      position: absolute;
      width: 382px;
      height: 134px;
      top: 9rem;
      left: 26rem;
      img {
        width: 100%;
      }
      .itemName02 {
        position: absolute;
        top: -1rem;
        left: 4.5rem;
        width: 132px;
        height: 134px;
      }
    }
    .item03 {
      position: absolute;
      width: 328px;
      height: 134px;
      top: 10rem;
      left: 65%;
      img {
        width: 100%;
      }
      .itemName03 {
        position: absolute;
        top: -3rem;
        left: 1.5rem;
        width: 124px;
        height: 134px;
      }
    }
    .item04 {
      position: absolute;
      width: 304px;
      height: 134px;
      top: 5rem;
      left: 83%;
      img {
        width: 100%;
      }
      .itemName04 {
        position: absolute;
        top: 27rem;
        width: 206px;
        height: 134px;
      }
    }
  }
`;
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
const Content_6 = styled.section`
  height: 650px;
  padding-top: 50px;
  position: relative;
  .txt1 {
    position: absolute;
    left: 8.5rem;
    background: url(${fav_txt1}) no-repeat;
    width: 260px;
    height: 240px;
    margin: 0;
  }
  .txt2 {
    position: absolute;
    top: 18rem;
    left: 2rem;
    background: url(${fav_txt2}) no-repeat;
    width: 24rem;
    height: 12rem;
    margin: 0;
  }
  a {
    position: absolute;
    top: 30rem;
    left: 17rem;
    padding: 10px 20px;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    &:hover {
      background: white;
      color: black;
      text-decoration: underline;
      font-weight: bold;
    }
  }
  img {
    position: absolute;
    top: 0;
    right: 3rem;
  }
`;
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
const Content_8 = styled.section`
  background: url(${store_bg});
  height: 400px;
  position: relative;
  z-index: 1;
  .img01 {
    position: absolute;
    background: url(${store_img01}) no-repeat;
    width: 228px;
    height: 228px;
    z-index: 1;
    top: 35%;
    left: 27%;
  }
  .img02 {
    position: absolute;
    background: url(${store_img02}) no-repeat;
    width: 360px;
    height: 312px;
    z-index: 0;
    left: 10%;
  }
  .img03 {
    position: absolute;
    background: url(${store_img03}) no-repeat;
    width: 343px;
    height: 142px;
    left: 40%;
    top: -14%;
    z-index: 0;
  }
  .img04 {
    position: absolute;
    background: url(${store_img04}) no-repeat;
    width: 230px;
    height: 102px;
    right: 0px;
    bottom: 0;
  }
  .txt01 {
    position: absolute;
    background: url(${store_txt01}) no-repeat;
    top: 6.5rem;
    left: 60%;
    width: 385px;
    height: 54px;
  }
  .txt02 {
    position: absolute;
    background: url(${store_txt02}) no-repeat;
    top: 11rem;
    left: 60%;
    width: 366px;
    height: 61px;
  }

  a {
    position: absolute;
    left: 60%;
    top: 16rem;
    padding: 5px 20px;
    border: 2px solid black;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    &:hover {
      background: #111;
      border: 2px solid #111;
      color: white;
      text-decoration: underline;
    }
  }
`;

const ContentsTemplate = () => {
  return (
    <div>
      <Badge />

      <StyledContents>
        <div class="favBg">
          <img src={fav_bg} alt="fav_bg" />
        </div>
        <Content_1>
          <div className="wrapper">
            <div className="title" />
            <a>자세히 보기</a>
            <div className="item01">
              <img src={autumn_item01} />
              <div className="itemName01">
                <img src={autumn_item01Name} />
              </div>
            </div>
            <div className="item02">
              <img src={autumn_item02} />
              <div className="itemName02">
                <img src={autumn_item02Name} />
              </div>
            </div>
            <div className="item03">
              <img src={autumn_item03} />
              <div className="itemName03">
                <img src={autumn_item03Name} />
              </div>
            </div>
            <div className="item04">
              <img src={autumn_item04} />
              <div className="itemName04">
                <img src={autumn_item04Name} />
              </div>
            </div>
          </div>
        </Content_1>
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
        <Content_6>
          <div class="txt1">dkfjlkdjlfskf</div>
          <div class="txt2">fdkfdlk</div>
          <a>자세히 보기</a>
          <img src={fav_prod} alt="fav_prod" />
        </Content_6>
        <Content_7>
          <div className="reserve_left" />
          <div className="reserve_right" />
          <a>EXPLORE OUR STORY</a>
        </Content_7>
        <Content_8>
          <div className="img01" />
          <div className="img02" />
          <div className="img03" />
          <div className="img04" />
          <div className="txt01" />
          <div className="txt02" />
          <a>매장 찾기</a>
        </Content_8>
      </StyledContents>
    </div>
  );
};

export default ContentsTemplate;
