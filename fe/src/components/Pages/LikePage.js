import React, { useState } from "react";
import {withRouter} from "react-router-dom"
import styled, {keyframes,css} from "styled-components";

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

const sectionMove = (sectionTop)=>keyframes`
  from {
    position :relative;
    top : ${(sectionTop+1)*100}%;
  }
  to {
    position :relative;
    top : ${(sectionTop)*100}%;
  }
`
const tastesMove = keyframes`
from {
  top : 350px;
}
to {
  top : 150px;
}
`;
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
    background-size: cover;
    height : 700px;
    .find_frame {
      max-width: 1100px;
      height : 100%;
      overflow : hidden;
      margin: 0 auto;
      position : relative;
      .find_section {
        width : 100%;
        height : 100%;
        & >img {
          position : relative;
          top : 85px;
          left : 50%;
          margin-left : -262px;
        }
        .find_taste {
          position : relative;
          
          top : 350px;
          animation : ${tastesMove} 1s linear forwards;

          display : flex;
          justify-content : space-around;
          margin : 30px;
          .taste_item {
            img {
              width : 100%;
              margin : 0;
            }
            p {
              text-align : center;
              margin-top : 20px;
            }
          }
        }
        ${(props) =>
          props.sectionTop &&
          css`
            animation: ${sectionMove(props.sectionTop)} 1s linear forwards;
          `}

      }
    }
  }
  @media (max-width: 1100px) {
    .find_wrap {
      .find_frame {
        .find_section {
          & >img {
          }
          .find_taste {
            .taste_item {
              width : 20.1%;
              img {
              }
              p {
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 950px) {
    padding-top: 70px;
    .find_wrap {
      .find_frame {
        .find_section {
          & >img {
          }
          .find_taste {
            margin : 10px;
            .taste_item {
              width : 21.1%;
              img {
              }
              p {
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 640px) {
    .find_wrap {
      .find_frame {
        .find_section {
          & >img {
            width : 76.5%;
            top : 50px;
            margin-left : -38.25%;
          }
          .find_taste {
            top : 100px;
            flex-wrap :wrap;
            width : 57.5%;
            margin : 10px auto;
            .taste_item {
              width : 39.9%;
              img {
              }
              p {
              }
            }
          }
        }
      }
    }
  }
`;



const LikePage = ({history}) => {
  const [flavor,setFlavor] = useState(0);
  const [feel,setFeel] = useState(0);
  const [strength,setStrength] = useState(0); 
  const [sectionTop,setSectionTop] = useState(0);

  const onClickFn = {
    0 : (e)=>{
      setFlavor(String(e.target.id));
      setSectionTop(-1);
    },
    1 : (e)=>{
      setFeel(String(e.target.id));
      setSectionTop(-2);
    },
    2 : (e)=>{
      setStrength(String(e.target.id))
      console.log(flavor,feel,strength)
      if(["000","010"].includes(flavor+feel+strength)) {
       history.push("/coffee/beans/blond/크리스마스%20블론드%20로스트%20250g")
      }else if(["002","020","012","022"].includes(flavor+feel+strength)) {
        history.push("/coffee/beans/dark/크리스마스%20블렌드%20250g")
      }else if(["100"].includes(flavor+feel+strength)) {
        history.push("/coffee/beans/medium/르완다%20힝가카와%20250g")
      }else if(["201"].includes(flavor+feel+strength)) {
        history.push("/coffee/beans/medium/블랙퍼스트%20블렌드%20250g")
      }else if(["011","211"].includes(flavor+feel+strength)) {
        history.push("/coffee/beans/medium/하우스%20블렌드%20250g")
      }else if(["202","122","212","222","302","312","322"].includes(flavor+feel+strength)) {
        history.push("/coffee/beans/dark/에스프레소%20로스트%20250g")
      }
    },
  }


  return (
    <StyledContents sectionTop={sectionTop}>
      <h1>나와 어울리는 커피</h1>
      <h4>여러분에게 잘 맞는 커피를 찾기 위한 3가지 질문입니다.</h4>
      <div className="find_wrap">
        <div className="find_frame">
          {tasteImg.map((section,i)=>(
          <div className="find_section" key={i} >
            <img src={section.ttl} alt="ttl"/>
              <div className="find_taste"> 
                {section.tastes.map((taste,j)=>(
                  <div className="taste_item" id={j} key={j} onClick={onClickFn[i]}>
                    <img src={taste.img} id={j} alt="taste"/>
                    <p id={j}>{taste.desc}</p>
                  </div>
                ))}
              </div>
          </div>
          ))}
          
          
        </div>
      </div>
    </StyledContents>
  );
};

export default withRouter(LikePage);
