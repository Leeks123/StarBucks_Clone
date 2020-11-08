import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import bean_icon from "../../images/bean_icon_blond.png";
import Product from "./CoffeePage_Product";

import { bean, via, origami } from "../../data/CoffePageData";

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

const style = { background: "#0092ff", padding: "8px 0", height: "300px" };
const CoffeePage_Category = ({ title }) => {
  console.log(bean);
  return (
    <Wrapper>
      <dl>
        <dt>
          <span>블론드</span>
        </dt>
        <dd>
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            <Product title="hello" img="hello" />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Row>
        </dd>
      </dl>
    </Wrapper>
  );
};

export default CoffeePage_Category;
