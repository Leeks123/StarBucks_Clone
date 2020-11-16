import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { beans, via, origami } from "../../data/CoffePageData";
import ReactImageMagnify from "react-image-magnify";

import blondIcon from "../../images/bean_icon_blond.png";
import mediumIcon from "../../images/bean_icon_medium.png";
import darkIcon from "../../images/bean_icon_dark.png";

const Wrapper = styled.div`
  background-color: white;
  .wrapper {
    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
    padding-top: 120px;
    h1 {
      font-weight: bold;
      padding-top: 30px;
    }
    .upperBox {
      display: flex;
      .shortDesc {
        width: 100%;
        padding: 20px;
        h2 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 0;
        }
        span {
          font-size: 14px;
          color: #666;
        }
        p {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 2px solid black;
          font-size: 14px;
          color: #444;
        }
        .type {
          display: flex;
          background-color: #f4f4f2;
          width: 100%;
          height: 70px;
          margin: 100px 0;
          .typeName {
            ${(props) =>
              props.typeImg &&
              css`
                background: url(${props.typeImg}) no-repeat;
              `};
            height: 40px;
            margin: 15px 20px;
            padding-left: 50px;
            padding-top: 8px;
            span {
              font-size: 16px;
              font-weight: bold;
            }
          }
          .typeDesc {
            padding-top: 8px;
            margin: 15px 0;
            span {
              font-size: 14px;
              padding-left: 20px;
              border-left: 1px solid #bbb;
            }
          }
        }
      }
    }
    .bottomBox {
      display: flex;
      padding: 50px 20px;
      border-top: 1px solid #ddd;
      .longDesc {
        width: 64%;
        font-size: 16px;
        color: #444;
        word-break: keep-all;
      }
      .TasteNote {
        margin-left: 60px;
        padding: 20px;
        width: 35%;
        background-color: #f4f4f2;
        h4 {
          font-size: 16px;
          color: #222;
        }
        p {
          font-size: 14px;
          color: #666;
        }
        .tastingNote {
          padding-bottom: 20px;
          border-bottom: 1px solid #ccc;
        }
        .enjoyWith {
          padding-top: 20px;
        }
      }
    }
    @media (max-width: 950px) {
      padding-top: 70px;
    }
    @media (max-width: 860px) {
      .upperBox {
        .shortDesc {
          .type {
            height: 90px;
          }
        }
      }
    }
    @media (max-width: 640px) {
      .upperBox {
        display: block;
        position: relative;
        img {
          width: 100%;
          position: relative;
          top: 45vw;
        }
        .shortDesc {
          position: relative;
          top: -97.3vw;
          .type {
            height: 70px;
            margin: 10px 0;
            .typeName {
              span {
              }
            }
            .typeDesc {
              span {
              }
            }
          }
        }
      }
      .bottomBox {
        display: block;
        .longDesc {
          width: 100%;
        }
        .TasteNote {
          width: 100%;
          margin-left: 0px;
          margin-top: 30px;
          h4 {
          }
          p {
          }
          .tastingNote {
          }
          .enjoyWith {
          }
        }
      }
    }
    @media (max-width: 520px) {
      .upperBox {
        img {
          top: 50vw;
        }
        .shortDesc {
          .type {
            margin: 10px 0;
            padding: 10px;
            display: block;
            height: 80px;
            .typeName {
              margin: 0;
            }
            .typeDesc {
              margin-top: 0;
              padding-top: 0;
              span {
                padding-left: 50px;
                border: 0px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1100px) {
    margin: 0 20px;
  }
`;

const ProductPage = ({ match }) => {
  const [category, setCategory] = useState(
    match.params.product === "beans"
      ? "beans"
      : match.params.product === "via"
      ? "via"
      : "origami"
  );
  const [type, setType] = useState(
    match.params.type === "blond"
      ? "blond"
      : match.params.type === "medium"
      ? "medium"
      : match.params.type === "dark"
      ? "dark"
      : "flavor"
  );
  const [productData, setProduct] = useState({});
  const [magnifySize, setMagnifySize] = useState([450, 470]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const types = {
    blond: {
      title: "블론드 로스트",
      desc: "은은하고 부드러운 맛 Subtle & Mellow",
    },
    medium: {
      title: "미디엄 로스트",
      desc: "균형잡힌 부드러움 Balance & Mellow",
    },
    dark: {
      title: "다크 로스트",
      desc: "강렬하고 강인한 맛 Strong & Powerful",
    },
  };
  const typeImage =
    type === "blond" ? blondIcon : type === "medium" ? mediumIcon : darkIcon;

  useEffect(() => {
    console.log(beans[type]);
    let ret = {};
    if (category === "beans") {
      beans[type].forEach((product) => {
        if (product.title === match.params.title) {
          ret = product;
        }
      });
    } else if (category === "via") {
      via[type].forEach((product) => {
        if (product.title === match.params.title) {
          ret = product;
        }
      });
    } else {
      origami[type].forEach((product) => {
        if (product.title === match.params.title) {
          ret = product;
        }
      });
    }
    setProduct(ret);
  }, []);

  useEffect(() => {
    if (windowWidth < 1100) {
      setMagnifySize([windowWidth * 0.409, windowWidth * 0.427]);
    }
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () =>
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
  }, []);
  console.log(productData);
  return (
    <Wrapper typeImg={typeImage}>
      <div className="wrapper">
        <h1>스타벅스 원두</h1>
        <div className="upperBox">
          {windowWidth > 640 ? (
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  src: productData.img,
                  width: magnifySize[0],
                  height: magnifySize[1],
                },
                largeImage: {
                  src: productData.img,
                  width: magnifySize[0] * 2,
                  height: magnifySize[1] * 2,
                },
                enlargedImagePosition: "over",
                className: "magnify",
              }}
            />
          ) : (
            <img src={productData.img} />
          )}
          <div className="shortDesc">
            <h2>{productData.title}</h2>
            <span>{productData.title_en}</span>
            <p>{productData.desc_short}</p>
            <div className="type">
              <div className="typeName">
                <span>{types[type].title}</span>
              </div>
              <div className="typeDesc">
                <span>{types[type].desc}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomBox">
          <div className="longDesc">{productData.desc_long}</div>
          <div className="TasteNote">
            <div className="tastingNote">
              <h4>Tasting Note</h4>
              <p>{productData.TastingNote}</p>
            </div>
            <div className="enjoyWith">
              <h4>Enjoy With</h4>
              <p>{productData.EnjoyWith}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductPage;
