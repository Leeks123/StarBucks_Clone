import React from "react";
import styled from "styled-components";
import { Col } from "antd";
import { Link, withRouter } from "react-router-dom";

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

const CoffeePage_Product = ({ title, type, img, match }) => {
  return (
    <Col xs={12} sm={8} md={6}>
      <Wrapper>
        <Link to={`${match.url}/${type}/${title}`}>
          <img src={img} alt={title} />
        </Link>
        <p>{title}</p>
      </Wrapper>
    </Col>
  );
};

export default withRouter(CoffeePage_Product);
