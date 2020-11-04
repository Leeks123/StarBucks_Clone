import React from "react";
import styled from "styled-components";

const StyledContents = styled.div`
  height: 100vh;
  padding-top: 120px;
  @media (max-width: 950px) {
    padding-top: 70px;
  }
`;

const CoffeePage = () => {
  return (
    <div>
      <StyledContents>
        <div className="favBg">hellow fucnkfjdklfjiwjgiajigjsijfisjfijseij</div>
      </StyledContents>
    </div>
  );
};

export default CoffeePage;
