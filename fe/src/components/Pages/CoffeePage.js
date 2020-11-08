import React from "react";
import styled from "styled-components";

import Category_check from "./CoffeePage_CategoryCheck";
import Category from "./CoffeePage_Category";

const Wrapper = styled.div`
  background-color: white;
  .wrapper {
    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
    padding-top: 120px;
    @media (max-width: 950px) {
      padding-top: 70px;
    }
  }
  @media (max-width: 1100px) {
    margin: 0 20px;
  }
`;

const Title = styled.h2`
  padding: 30px 0;
  margin: 0;
  font-size: 28px;
  @media (max-width: 1100px) {
    margin: 0 20px;
  }
`;

const CoffeePage = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <Title>커피</Title>
        <Category_check />
        <Category />
      </div>
    </Wrapper>
  );
};

export default CoffeePage;
