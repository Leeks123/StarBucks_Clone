import React from "react";
import styled from "styled-components";
import badge from "../../images/nStore_badge_pc.png";

const StyledBadge = styled.div`
  display: block;
  // display: none;
  position: fixed;
  top: 135px;
  right: 10px;
  float: right;
  width: 200px;
  height: 290px;
  background: url(${badge}) no-repeat;
  z-index: 10;

  @media (max-width: 960px) {
    width: 16.6vw;
    height: 23.6vw;
    background-size: contain;
  }
  @media (max-width: 660px) {
    width: 24.6vw;
    height: 35.1vw;
    background-size: contain;
  }
`;
const Badge = () => <StyledBadge />;

export default Badge;
