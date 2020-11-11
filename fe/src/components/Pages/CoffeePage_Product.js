import React from "react";
import styled from "styled-components";
import { Col } from "antd";

const Wrapper = styled.div`
  height: 270px;
  img {
    width: 100%;
  }
  p {
    font-size: 14px;
    text-align: center;
  }
`;

const CoffeePage_Product = ({ title, img }) => {
  return (
    <Col xs={12} sm={8} md={6}>
      <Wrapper>
        <img src={img} alt={title} />
        <p>{title}</p>
      </Wrapper>
    </Col>
  );
};

export default CoffeePage_Product;
