import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { beans, via, origami } from "../../data/CoffePageData";
import ReactImageMagnify from "react-image-magnify";

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
      .magnify {
        img {
          width: 40.9%;
          height: 42.7%;
        }
      }
      .shortDesc {
        padding: 20px;
      }
    }
    .bottomBox {
      display: flex;
      .longDesc {
      }
      .TasteNote {
      }
    }
    @media (max-width: 950px) {
      padding-top: 70px;
    }
    @media (max-width: 640px) {
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

  console.log(productData);
  return (
    <Wrapper>
      <div className="wrapper">
        <h1>스타벅스 원두</h1>
        <div className="upperBox">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                src: productData.img,
                isFluidWidth: true,
              },
              largeImage: {
                src: productData.img,
                width: 310 * 2,
                height: 325 * 2,
              },
              enlargedImagePosition: "over",
              className: "magnify",
            }}
          />
          <div className="shortDesc">
            <p>{match.params.title}</p>
          </div>
        </div>
        <div className="bottomBox">
          <div className="longDesc">dkfjsklfjklsdjfklsdjflksjkl</div>
          <div className="TasteNote"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductPage;
