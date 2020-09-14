import React from "react";
import styled from "styled-components";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import NavSearch from "./NavSearch";
import logo from "../../images/logo.png";

const StyledNavTemplate = styled.div`
  position: relative;
  border: 1px solid black;

  height: 120px;
  width: 100%;
  margin: 0 auto;
  box-sizing: content-box;
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
        <StyledA />
        <TopNav />
        <NavSearch />
        <BottomNav />
      </StyledNavTemplate>
    </div>
  );
};

export default NavTemplate;
