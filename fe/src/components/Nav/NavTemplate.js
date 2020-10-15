import React, { useContext } from "react";
import styled, { css } from "styled-components";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import NavSearch from "./NavSearch";
import logo from "../../images/logo.png";

import { SidebarContext } from "../../context/SidebarContext";

const StyledNavTemplate = styled.div`
  position: fixed;
  float: inline-start;
  background: #f6f5f0;
  left: 0;
  height: 120px;
  width: 100%;
  margin: 0 auto;
  box-sizing: content-box;
  z-index: 10;
  & .nav_wrapper {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 950px) {
    height: 70px;
  }
`;
const StyledA = styled.a`
  position: absolute;
  top: 22px;
  left: 22px;
  background-image: url(${logo});
  width: 75px;
  height: 75px;

  @media (max-width: 950px) {
    top: 11px;
    left: 11px;
    width: 45px;
    height: 45px;
    background-size: cover;
  }
`;
const wrapper = {
  width: "1100px",
  height: "120px",
  margin: "0 auto",
};

const Dim = styled.div`
  display: none;

  @media (max-width: 950px) {
    ${(props) =>
      props.sidebar && props.sidebar === true
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}

    width: 30vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 1px;
    z-index: 30;
    background-color: black;
    opacity: 0.5;
  }
`;

const NavTemplate = () => {
  const { sidebarOpened, sidebarToggle } = useContext(SidebarContext);

  const onClicked = () => {
    console.log("dim click");
    sidebarToggle();
  };
  return (
    <>
      <Dim className="dim" sidebar={sidebarOpened} onClick={onClicked} />
      <div style={wrapper}>
        <StyledNavTemplate>
          <div className="nav_wrapper">
            <StyledA />
            <TopNav />
            <NavSearch />
          </div>
          <BottomNav />
        </StyledNavTemplate>
      </div>
    </>
  );
};

export default NavTemplate;
