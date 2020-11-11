import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import bean_icon from "../../images/bean_icon_blond.png";
import Product from "./CoffeePage_Product";

import { beans, via, origami } from "../../data/CoffePageData";

const Wrapper = styled.div`
  margin-top: 60px;
  dl {
    dt {
      background: #f4f4f2 url(${bean_icon}) 20px center no-repeat;
      width: 100%;
      padding: 20px 40px;
      span {
        font-size: 18px;
        font-weight: bold;
        margin-left: 35px;
      }
    }
    dd {
      padding: 20px;
    }
  }
`;

const CoffeePage_Category = ({ category, type }) => {
  const renderCategory =
    category === "beans" ? beans : category === "via" ? via : origami;

  return (
    <Wrapper>
      <dl>
        <dt>
          <span>{type}</span>
        </dt>
        <dd>
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {renderCategory[type] &&
              renderCategory[type].map((product, i) => (
                <Product title={product.title} img={product.img} key={i} />
              ))}
          </Row>
        </dd>
      </dl>
    </Wrapper>
  );
};

export default CoffeePage_Category;
