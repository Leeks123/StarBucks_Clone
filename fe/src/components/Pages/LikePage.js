import React from "react";
import styled from "styled-components";

import find_wrap_bg from "../../images/like/findWrap_bg.jpg";

import taste_ttl1 from "../../images/like/taste_find_ttl1.png";
import taste_ttl2 from "../../images/like/taste_find_ttl2.png";
import taste_ttl3 from "../../images/like/taste_find_ttl3.png";

import taste1_1 from "../../images/like/taste1_1.png";
import taste1_2 from "../../images/like/taste1_2.png";
import taste1_3 from "../../images/like/taste1_3.png";
import taste1_4 from "../../images/like/taste1_4.png";
import taste2_1 from "../../images/like/taste2_1.png";
import taste2_2 from "../../images/like/taste2_2.png";
import taste2_3 from "../../images/like/taste2_3.png";
import taste3_1 from "../../images/like/taste3_1.png";
import taste3_2 from "../../images/like/taste3_2.png";
import taste3_3 from "../../images/like/taste3_3.png";

const tasteImg = [
  {
    ttl: taste_ttl1,
    tastes: [
      { img: taste1_1, desc: "짭짤한 맛" },
      { img: taste1_2, desc: "과일 맛" },
      { img: taste1_3, desc: "구운 맛" },
      { img: taste1_4, desc: "달콤한(캐러멜) 맛" },
    ],
  },
  {
    ttl: taste_ttl2,
    tastes: [
      { img: taste2_1, desc: "상쾌한 느낌" },
      { img: taste2_2, desc: "부드러운 느낌" },
      { img: taste2_3, desc: "오랫동안 여운이 남는 느낌" },
    ],
  },
  {
    ttl: taste_ttl3,
    tastes: [
      { img: taste3_1, desc: "은은하고 부드러움" },
      { img: taste3_2, desc: "미디엄으로 균형잡힘" },
      { img: taste3_3, desc: "강도가 세고 강렬함" },
    ],
  },
];

const StyledContents = styled.div`
  padding-top: 120px;
  h1 {
    padding: 30px 20px 0 20px;
    font-weight: bold;
    font-size: 28px;
  }
  h4 {
    padding: 0 20px 20px 20px;
    font-size: 16px;
  }
  .find_wrap {
    background: url(${find_wrap_bg}) no-repeat;
    background-position: contain;
    .find_frame {
      border: 1px solid red;

      width: 96%;
      margin: 0 auto;
      height: 585px;
    }
  }
  @media (max-width: 950px) {
    padding-top: 70px;
  }
`;

const LikePage = () => {
  return (
    <StyledContents>
      <h1>나와 어울리는 커피</h1>
      <h4>여러분에게 잘 맞는 커피를 찾기 위한 3가지 질문입니다.</h4>
      <div className="find_wrap">
        <div className="find_frame">
          <div className="find_section01">
            <img />
            <div className="find_taste"></div>
          </div>
          <div className="find_section01">
            <img />
            <div className="find_taste"></div>
          </div>
          <div className="find_section01">
            <img />
            <div className="find_taste"></div>
          </div>
        </div>
      </div>
    </StyledContents>
  );
};

export default LikePage;
