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
  @media (max-width: 660px) {
    width: 310px;
    height: 290px;
    margin: 0 auto;
    .termOfUse {
      ul {
        margin: 0;
        width: 100%;
        display: block;
        overflow : 
        &::first-child {
          color: #00b050;
        }
        li {
          display : inline-block;
          padding: 5px 5px;
          color: #cccccc;
          font-size: 12px;
          a {
            white-space : normal;
          }
        }
      }
    }
    .LookLikeButton {
      ul {
        margin : 10px 0;
        li {
          border: 2px solid white;
          padding: 5px 14px;
        }
      }
    }
    .copyrightAndSoOn {
      padding: 10px 50px;
      
    }
  }
`;

const BottomFooter = () => {
  return (
    <StyledDiv>
      <div className="termOfUse">
        <ul>
          <li>
            <a id="green" href="/">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a href="/">영상정보처리기기 운영관리 방침</a>
          </li>
          <li>
            <a href="/">홈페이지 이용약관</a>
          </li>
          <li>
            <a href="/">위치정보 이용약관</a>
          </li>
          <li>
            <a href="/">스타벅스 카드 이용약관</a>
          </li>
          <li>
            <a href="/">비회원 이용약관</a>
          </li>
          <li>
            <a href="/">윤리경영 핫라인</a>
          </li>
        </ul>
      </div>
      <div className="LookLikeButton">
        <ul>
          <li>
            <a href="/">찾아오시는 길</a>
          </li>
          <li>
            <a href="/">신규입점제의</a>
          </li>
          <li>
            <a href="/">사이트 맵</a>
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
