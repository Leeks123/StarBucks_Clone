import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { BiMenu } from "react-icons/bi";
import { SidebarContext } from "../../context/SidebarContext";

const StyledBottomNav = styled.div`
  display: flex;
  position : relative;
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
      height: 60px;
      padding: 10px 30px 0px 30px;
      .menu {
        font: normal 13px Avenir, Arial, georgia;
        color: #555;
        font-weight: bold;
      }
    }
    li:hover {
      background: #2c2a29;
      .menu {
        text-decoration: underline;
        color: green;
      }
      & > div {
        display: block;
      }
    }
  }

  @media (max-width: 950px) {
    overflow-y: scroll;
    position: fixed;
    top: 0px;
    padding-top : 186px;
    bottom : 0px;
    left: 30vw;
    width: 70vw;
    margin-right: 0px;
    
    & > ul {
      position: absolute;
      left: 1px;
      
      background: black;
      ${(props) =>
        props.sidebarOpen && props.sidebarOpen === true
          ? css`
              display: block;
            `
          : css`
              display: none;
            `}
      width: 100%;
      height: 100vh;
      list-style-type: none;
      padding: 0px;
      margin: 0px;
      li {
        border-bottom: 0.5px solid #aaaa;
        z-index: 20;
        ${(props) =>
          props.submenuClicked === 0
            ? css`
                & > div {
                  display: none;
                }
              `
            : css`
                &:nth-child(${props.submenuClicked}) > div {
                  display: block;
                  top: ${props.submenuClicked * 70}px;
                }
              `}
        .menu {
          font: normal 28px Avenir, Arial, georgia;
          color: #fff;
          font-weight: bold;
        }
      }

      li:hover {
        background: black;
        .menu {
          text-decoration: underline;
          color: white;
        }
        ${(props) =>
          props.submenuClicked === 0
            ? css`
                & > div {
                  display: none;
                }
              `
            : css`
                & > div {
                  display: none;
                }
                &:nth-child(${props.submenuClicked}) > div {
                  display: block;
                  top: ${props.submenuClicked * 70}px;
                }
              `}
        
        }
      }
    }
    .menuBar {
      ${(props) =>
        props.sidebarOpen && props.sidebarOpen === true
          ? css`
              display: none;
            `
          : css`
              display: block;
            `}
      position : absolute;
      top : 0px;
      right : 0px;
      z-index : 30;
      margin : 17px;
    }
    
  }
  @media (min-width:950px){
    .menuBar {
      display : none;
    }
  }

  @media (max-width: 670px) {
    padding-top : 186px;
    & > ul {
      li {
        box-sizing: border-box;
        padding-top: 25px;
        height: 72px;
        ${(props) =>
          props.submenuClicked === 0
            ? css`
                & > div {
                  display: none;
                }
              `
            : css`
                &:nth-child(${props.submenuClicked}) > div {
                  display: block;
                  top: ${props.submenuClicked * 70}px;
                }
              `}
        .menu {
          font: normal 18px Avenir, Arial, georgia;
          font-weight: bold;
        }
        &>div{
          span {
            font: normal 18px Avenir, Arial, georgia;
            font-weight: bold;
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    padding-top : 120px;
    & > ul {
      li {
        box-sizing: border-box;
        padding-top: 15px;
        height: 50px;
        ${(props) =>
          props.submenuClicked === 0
            ? css`
                & > div {
                  display: none;
                }
              `
            : css`
                &:nth-child(${props.submenuClicked}) > div {
                  display: block;
                  top: ${props.submenuClicked * 50}px;
                }
              `}
              &:hover {
                ${(props) =>
                  props.submenuClicked === 0
                    ? css`
                        & > div {
                          display: none;
                        }
                      `
                    : css`
                        & > div {
                          display: none;
                        }
                        &:nth-child(${props.submenuClicked}) > div {
                          display: block;
                          top: ${props.submenuClicked * 50}px;
                        }
                      `}
              }
        .menu {
          font: bold 15px Avenir, Arial, georgia;
        }
      }
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
  padding: 0 30px;

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
  @media (max-width: 950px) {
    position: absolute;

    width: 70vw;
    padding: 0;
    .grid_wrapper {
      overflow: scroll;
      display: block;
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      .grid {
        border-bottom: 0.5px solid #aaa;
        height: 70px;
        width: 100%;
        span {
          display: block;
          font: bold 28px Avenir, Arial, georgia;
          color: #fff;

          padding: 15px 30px;
        }
        ul {
          display: none;
        }
      }
    }
  }
  @media (max-width: 670px) {
    .grid_wrapper {
      .grid {
        span {
          font: 18px Avenir, Arial, georgia;
          font-weight: bold;
          padding-top: 20px;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .grid_wrapper {
      .grid {
        height: 50px;
        span {
          font: 15px Avenir, Arial, georgia;
          padding-top: 15px;
        }
      }
    }
  }
`;

const BottomNav = () => {
  const { sidebarOpened, sidebarToggle } = useContext(SidebarContext);
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(0);

  const onClicked = () => {
    setMenu(true);
    sidebarToggle();
    console.log("sibebarButton clicked", menu);
  };
  const onClickMenu = (e) => {
    const elem = e.target.parentElement;
    subMenu === elem.id ? setSubMenu(0) : setSubMenu(elem.id);
    console.log("subMenu clicked", elem.id);
  };
  console.log("submenu", subMenu);
  return (
    <StyledBottomNav submenuClicked={subMenu} sidebarOpen={sidebarOpened}>
      <div className="menuBar">
        <BiMenu size="40" onClick={onClicked} />
      </div>

      <ul>
        <li id={1} onClick={(e) => onClickMenu(e)}>
          <span className="menu">COFFEE</span>
          <NavContents submenu={subMenu}>
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
        <li id={2} onClick={(e) => onClickMenu(e)}>
          <span className="menu">MENU</span>
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
        <li id={3} onClick={(e) => onClickMenu(e)}>
          <span className="menu">STORE</span>
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
        <li id={4} onClick={(e) => onClickMenu(e)}>
          <span className="menu">RESPONSIBILITY</span>
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
        <li id={5} onClick={(e) => onClickMenu(e)}>
          <span className="menu">STARBUCKS REWARDS</span>
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
        <li id={6} onClick={(e) => onClickMenu(e)}>
          <span className="menu">WHAT'S NEW</span>
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
