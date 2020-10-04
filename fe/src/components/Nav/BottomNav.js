import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BiMenu } from "react-icons/bi";

const StyledBottomNav = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  & > ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    width: 750px;
    padding: 0px;
    margin: 0px;
    li {
      white-space: nowrap;
      height: 58px;
      padding: 10px 30px 0px 30px;
      a {
        font: normal 13px Avenir, Arial, georgia;
        color: #555;
        font-weight: bold;
      }
    }
    li:hover {
      background: #2c2a29;
      a {
        text-decoration: underline;
        color: green;
      }
      & > div {
        display: block;
      }
    }
  }
  .menuBar {
    display: none;
  }

  @media (max-width: 950px) {
    display: block;
    position: relative;
    left: 30vw;
    width: 70vw;
    height: 100vh;
    margin-right: 0;
    & > ul {
      position: absolute;
      left: 70vw;
      background: black;
      display: block;

      width: 100%;
      height: 100vh;
      list-style-type: none;
      padding: 0px;
      margin: 0px;
      li {
        white-space: nowrap;
        height: 58px;
        padding: 10px 30px 0px 30px;
        z-index: 20;
        a {
          font: normal 13px Avenir, Arial, georgia;
          color: #555;
          font-weight: bold;
        }
      }
      li:hover {
        a {
          text-decoration: underline;
          color: green;
        }
        & > div {
          display: block;
        }
      }
    }

    .menuBar {
      display: block;
      position: absolute;
      top: -70px;
      right: 0px;
      margin: 16px;
    }
  }
`;

const NavContents = styled.div`
  display: none;
  position: fixed;
  left: 0px;
  top: 120px;
  width: 100vw;
  background: #2c2a29;
  color: white;

  .grid_wrapper {
    width: 1100px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 220px 220px 220px 220px;
    grid-gap: 20px;
    .grid {
      span {
        font-size: 14px;
      }
      ul {
        margin: 10px 0;
        padding: 0;
        list-style: none;
        li {
          color: #999;
          font-size: 12px;
          padding: 3px;
          height: 1rem;
        }
        li:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const MobileStyledBottomNav = styled.div``;

const BottomNav = () => {
  const [menu, setMenu] = useState(false);
  const onClicked = () => {
    setMenu(true);
    console.log(menu);
  };
  return (
    <StyledBottomNav>
      <BiMenu className="menuBar" size="40" onClick={onClicked} />
      <ul>
        <li>
          <a>COFFEE</a>
          <NavContents>
            <div className="grid_wrapper">
              <div className="grid">
                <span>커피</span>
                <ul>
                  <li>스타벅스 원두</li>
                  <li>스타벅스 비아</li>
                  <li>스타벅스 오리가미</li>
                </ul>
              </div>
              <div className="grid">
                <span>나와 어울리는 커피</span>
              </div>
              <div className="grid">
                <span>스타벅스 리저브</span>
                <ul>
                  <li>RESERVE MEGAZINE</li>
                </ul>
              </div>
              <div className="grid">
                <span>에스프레소 음료</span>
                <ul>
                  <li>도피오</li>
                  <li>에스프레소 마끼아또</li>
                  <li>아메리카노</li>
                  <li>마끼아또</li>
                  <li>카푸치노</li>
                  <li>라뗴</li>
                  <li>모카</li>
                  <li>리스트레또 비안코</li>
                </ul>
              </div>
              <div className="grid">
                <span>최상의 커피를 즐기는 법</span>
                <ul>
                  <li>커피 프레스</li>
                  <li>푸어 오버</li>
                  <li>아이스 푸어오버</li>
                  <li>커피 메이커</li>
                  <li>리저브를 매장에서 다양하게 즐기는 법</li>
                </ul>
              </div>
              <div className="grid">
                <span>커피 이야기</span>
                <ul>
                  <li>스타벅스 로스트 스펙트럼</li>
                  <li>최상의 아라비카 원두</li>
                  <li>한 잔의 커피가 완성되기까지</li>
                  <li>클로버 커피추출 시스템</li>
                  <li>스타벅스 디카페인</li>
                </ul>
              </div>
            </div>
          </NavContents>
        </li>
        <li>
          <a>MENU</a>
          <NavContents>
            <div className="grid_wrapper">
              <div className="grid">
                <span>음료</span>
                <ul>
                  <li>콜드 브루</li>
                  <li>브루드 커피</li>
                  <li>에스프레소</li>
                  <li>프라푸치노</li>
                  <li>블렌디드</li>
                  <li>스타벅스 피지오</li>
                  <li>티(티바나)</li>
                  <li>기타 제조 음료</li>
                  <li>스타벅스 주스(병음료)</li>
                </ul>
              </div>
              <div className="grid">
                <span>푸드</span>
                <ul>
                  <li>브레드</li>
                  <li>케이크</li>
                  <li>샌드위치 & 샐러드</li>
                  <li>따뜻한 푸드</li>
                  <li>과일 & 요거트</li>
                  <li>스낵 & 미니 디저트</li>
                  <li>아이스크림</li>
                </ul>
              </div>
              <div className="grid">
                <span>상품</span>
                <ul>
                  <li>머그</li>
                  <li>글라스</li>
                  <li>플라스틱 텀블러</li>
                  <li>스테인리스 텀블러</li>
                  <li>보온병</li>
                  <li>액세서리</li>
                  <li>커피 용품</li>
                  <li>패키지 티(티바나)</li>
                  <li>스타벅스 플래너</li>
                </ul>
              </div>
              <div className="grid">
                <span>카드</span>
                <ul>
                  <li>실물 카드</li>
                  <li>e-Gift 카드</li>
                </ul>
              </div>
              <div className="grid">
                <span>메뉴 이야기</span>
                <ul>
                  <li>나이트로 콜드브루</li>
                  <li>콜드 브루</li>
                  <li>스타벅스 티바나</li>
                </ul>
              </div>
            </div>
          </NavContents>
        </li>
        <li>
          <a>STORE</a>
          <NavContents>
            <div className="grid_wrapper">
              <div className="grid">
                <span>매장 찾기</span>
                <ul>
                  <li>퀵 검색</li>
                  <li>지역 검색</li>
                  <li>My 매장</li>
                </ul>
              </div>
              <div className="grid">
                <span>드라이브 스루 매장</span>
              </div>
              <div className="grid">
                <span>스타벅스 리저브 매장</span>
              </div>
              <div className="grid">
                <span>커뮤니티 스토어 매장</span>
              </div>
              <div className="grid">
                <span>매장 이야기</span>
                <ul>
                  <li>청담스타</li>
                  <li>티바나 바 매장</li>
                  <li>파미에파크</li>
                </ul>
              </div>
            </div>
          </NavContents>
        </li>
        <li>
          <a>RESPONSIBILITY</a>
          <NavContents>
            <div className="grid_wrapper">
              <div className="grid">
                <span>사회 공헌 캠페인</span>
              </div>
              <div className="grid">
                <span>지역 사회 참여 활동</span>
                <ul>
                  <li>희망배달 캠페인</li>
                  <li>재능 기부 카페 소식</li>
                  <li>커뮤니티 스토어</li>
                  <li>청년인재 양성</li>
                  <li>우리 농산물 사랑 캠페인</li>
                  <li>우리 문화 지키기</li>
                </ul>
              </div>
              <div className="grid">
                <span>환경 보호 활동</span>
                <ul>
                  <li>환경 발자국 줄이기</li>
                  <li>일회용 컵 없는 매장</li>
                  <li>커피 원두 재활용</li>
                </ul>
              </div>
              <div className="grid">
                <span>윤리 구매</span>
                <ul>
                  <li>윤리적 원두 구매</li>
                  <li>공정무역 인증</li>
                  <li>커피 농가 지원 활동</li>
                </ul>
              </div>
              <div className="grid">
                <span>글로벌 사회 공헌</span>
                <ul>
                  <li>윤리 경영 보고서</li>
                  <li>스타벅스 재단</li>
                  <li>지구촌 봉사의 달</li>
                </ul>
              </div>
            </div>
          </NavContents>
        </li>
        <li>
          <a>STARBUCKS REWARDS</a>
          <NavContents>
            <div className="grid_wrapper">
              <div className="grid">
                <span>스타벅스 리워드</span>
                <ul>
                  <li>스타벅스 리워드 소개</li>
                  <li>등급 및 혜택</li>
                  <li>스타벅스 별</li>
                  <li>자주하는 질문</li>
                </ul>
              </div>
              <div className="grid">
                <span>스타벅스 카드</span>
                <ul>
                  <li>스타벅스 카드 소개</li>
                  <li>스타벅스 카드 갤러리</li>
                  <li>등록 및 조회</li>
                  <li>충전 및 이용 안내</li>
                  <li>분실신고/환불신청</li>
                  <li>자주하는 질문</li>
                </ul>
              </div>
              <div className="grid">
                <span>스타벅스 e-Gift Card</span>
                <ul>
                  <li>스타벅스 e-Gift Card 소개</li>
                  <li>이용 안내</li>
                  <li>선물하기</li>
                  <li>자주하는 질문</li>
                </ul>
              </div>
            </div>
          </NavContents>
        </li>
        <li>
          <a>WHAT'S NEW</a>
          <NavContents>
            <div className="grid_wrapper">
              <div className="grid">
                <span>프로모션 & 이벤트</span>
                <ul>
                  <li>전체</li>
                  <li>스타벅스 카드</li>
                  <li>스타벅스 리워드</li>
                  <li>온라인</li>
                </ul>
              </div>
              <div className="grid">
                <span>새소식</span>
                <ul>
                  <li>전체</li>
                  <li>상품 출시</li>
                  <li>스타벅스와 문화</li>
                  <li>스타벅스 사회공헌</li>
                  <li>스타벅스 카드 출시</li>
                </ul>
              </div>
              <div className="grid">
                <span>매장별 이벤트</span>
                <ul>
                  <li>일반 매장</li>
                  <li>신규 매장</li>
                </ul>
              </div>
              <div className="grid">
                <span>공지사항</span>
              </div>
              <div className="grid">
                <span>월페이퍼</span>
              </div>
            </div>
          </NavContents>
        </li>
      </ul>
    </StyledBottomNav>
  );
};

export default BottomNav;