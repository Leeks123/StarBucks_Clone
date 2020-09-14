import React from "react";
import styled from "styled-components";

const StyledTopNav = styled.div`
  position: absolute;
  top: 0px;
  right: 90px;
  border: 1px solid black;
  & > ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    li {
      padding: 0 15px;
      height: 20px;
      font: normal 13px Avenir, Arial, georgia;
      color: #555;
      border: 1px solid red;
    }
  }
`;
const TopNav = () => (
  <StyledTopNav>
    <ul>
      <li>Sign In</li>
      <li>My StarBucks</li>
      <li>Custommer Service & Ideas</li>
      <li>Find a Store</li>
    </ul>
  </StyledTopNav>
);

export default TopNav;
