import React from "react";
import styled from "styled-components";

const StyledContents = styled.div`
  height: 100vh;
  padding-top: 120px;
  @media (max-width: 950px) {
    padding-top: 70px;
  }
`;
const LikePage = () => {
  return <StyledContents>파인드스토어</StyledContents>;
};

export default LikePage;
