import React from "react";
import styled from "styled-components";

const StyledTopNav = styled.div`
  & > ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    li {
      padding: 0 15px;
      height: 20px;
      font: normal 13px Avenir, Arial, georgia;
      color: #555;
    }
    li:hover {
      text-decoration: underline;
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
