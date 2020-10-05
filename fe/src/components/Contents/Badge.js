import React from "react";
import styled from "styled-components";
import badge from "../../images/nStore_badge_pc.png";

const StyledBadge = styled.div`
  // display: block;
  display: none;
  position: fixed;
  top: 135px;
  right: 10px;
  float: right;
  width: 200px;
  height: 290px;
  background: url(${badge});
  z-index: 10;
`;
const Badge = () => <StyledBadge />;

export default Badge;
