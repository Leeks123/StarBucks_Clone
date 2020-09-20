import React from "react";
import styled from "styled-components";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import NavSearch from "./NavSearch";
import logo from "../../images/logo.png";

const StyledNavTemplate = styled.div`
  position: fixed;
  float: inline-start;
  background: #f6f5f0;
  left: 0;
  height: 120px;
  width: 100%;
  margin: 0 auto;
  box-sizing: content-box;
  & .nav_wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;
const StyledA = styled.a`
  position: absolute;
  top: 22px;
  left: 22px;
  background-image: url(${logo});
  width: 75px;
  height: 75px;
`;
const wrapper = {
  width: "1100px",
  margin: "0 auto",
};

const NavTemplate = () => {
  return (
    <div style={wrapper}>
      <StyledNavTemplate>
        <div class="nav_wrapper">
          <StyledA />
          <TopNav />
          <NavSearch />
        </div>
        <BottomNav />
      </StyledNavTemplate>
    </div>
  );
};

export default NavTemplate;
