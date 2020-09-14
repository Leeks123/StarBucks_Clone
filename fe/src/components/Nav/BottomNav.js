import React from "react";
import styled from "styled-components";

const StyledBottomNav = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  border: 1px solid black;
  & > ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding-bottom: 10px;
    li {
      padding: 0 20px;
      height: 20px;
      font: normal 13px Avenir, Arial, georgia;
      color: #555;
      border: 1px solid red;
    }
  }
`;
const BottomNav = () => (
  <StyledBottomNav>
    <ul>
      <li>COFFEE</li>
      <li>MENU</li>
      <li>STORE</li>
      <li>RESPONSIBILITY</li>
      <li>STARTBUCKS REWARDS</li>
      <li>WHAT'S NEW</li>
    </ul>
  </StyledBottomNav>
);

export default BottomNav;
