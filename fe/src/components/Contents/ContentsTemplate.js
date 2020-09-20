import React from "react";
import styled from "styled-components";
import badge from "../../images/nStore_badge_pc.png";
import rewards_logo from "../../images/rewards-logo.png";

const StyledContents = styled.div`
  padding-top: 120px;
  box-sizing: border-box;
  & section {
    width: 100vw;
    height: 200px;
    background: #222;
    border: 1px solid red;
  }
  .content_1 {
  }
  .content_2 {
  }
  .content_3 {
    display: flex;
    background: #1e3932;
    height: 237px;
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
      padding: 0 40px;
      .reward_text {
      }
      .ecard_text {
      }
    }
  }
`;
const Badge = styled.div`
  position: fixed;
  top: 135px;
  right: 10px;
  float: right;
  width: 200px;
  height: 290px;
  background: url(${badge});
`;

const ContentsTemplate = () => {
  return (
    <div>
      <Badge />
      <StyledContents>
        <section className="content_1">dfkjdkf</section>
        <section className="content_2">
          <div className="notice">notice bar</div>
        </section>
        <section className="content_3">
          <img src={rewards_logo} alt="rewards_logo" />
          <div className="reward_contents">
            <div className="reward_text">
              <h2>스타벅스만의 특별한 혜택, 스타벅스 리워드</h2>
              <div className="reward_text_login">
                <p>
                  스타벅스 회원이세요? 로그인을 통해 나만의 리워드를
                  확인해보세요.
                  <br />
                  스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.
                </p>
                <a>회원가입</a>
                <a>로그인</a>
              </div>
            </div>
            <div className="ecard_text">
              <p>
                회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로
                구매하시고, 편리하게 등록하세요!
                <br />
                카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면
                무료 음료쿠폰을 드립니다!
              </p>
              <a>e-Gift Card 선물하기</a>
            </div>
          </div>
        </section>
        <section className="content_4">dfkjdkf</section>
        <section className="content_5">dfkjdkf</section>
        <section className="content_6">dfkjdkf</section>
        <section className="content_7">dfkjdkf</section>
      </StyledContents>
    </div>
  );
};

export default ContentsTemplate;
