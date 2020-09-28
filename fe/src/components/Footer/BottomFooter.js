import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100wv;
  height: 180px;
  .termOfUse {
    #green {
      color: #00b050;
    }
    ul {
      margin: 20px auto;
      width: 80%;
      display: flex;
      justify-content: center;
      &::first-child {
        color: #00b050;
      }
      li {
        padding: 5px 18px;
        color: #cccccc;
        font-size: 12px;
      }
    }
  }
  .LookLikeButton {
    ul {
      width: 300px;
      display: flex;
      margin: 15px auto;

      li {
        color: white;
        border: 1px solid white;
        border-radius: 3px;
        padding: 5px 10px;
        margin: 5px;
        a {
          font-size: 12px;
        }
      }
    }
  }
  .copyrightAndSoOn {
    padding: 10px 0;
    p {
      color: #999;
      font-size: 12px;
      text-align: center;
    }
  }
`;

const BottomFooter = () => {
  return (
    <StyledDiv>
      <div className="termOfUse">
        <ul>
          <li>
            <a id="green">개인정보처리방침</a>
          </li>
          <li>
            <a>영상정보처리기기 운영관리 방침</a>
          </li>
          <li>
            <a>홈페이지 이용약관</a>
          </li>
          <li>
            <a>위치정보 이용약관</a>
          </li>
          <li>
            <a>스타벅스 카드 이용약관</a>
          </li>
          <li>
            <a>비회원 이용약관</a>
          </li>
          <li>
            <a>윤리경영 핫라인</a>
          </li>
        </ul>
      </div>
      <div className="LookLikeButton">
        <ul>
          <li>
            <a>찾아오시는 길</a>
          </li>
          <li>
            <a>신규입점제의</a>
          </li>
          <li>
            <a>사이트 맵</a>
          </li>
        </ul>
      </div>
      <div className="copyrightAndSoOn">
        <p>
          사업자등록번호 : 201-81-21515 (주)스타벅스커피 코리아 : 송 데이비드
          호섭 TEL : 1522-3232 개인정보 책임자 : 장석현
        </p>
        <p>© 2020 Starbucks Coffee Company. All Rights Reserved.</p>
      </div>
    </StyledDiv>
  );
};

export default BottomFooter;
