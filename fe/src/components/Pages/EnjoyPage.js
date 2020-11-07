import React from "react";
import styled from "styled-components";

const StyledContents = styled.div`
  height: 100vh;
  padding-top: 120px;
  @media (max-width: 950px) {
    padding-top: 70px;
  }
`;
const EnjoyPage = () => {
  return <StyledContents>커피를 즐기는 방법</StyledContents>;
};

export default EnjoyPage;
