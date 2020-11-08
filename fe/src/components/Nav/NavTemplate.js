import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import NavSearch from "./NavSearch";
import logo from "../../images/logo.png";

import { SidebarContext } from "../../context/SidebarContext";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 120px;
  z-index: 30;
  background: #f6f5f0;
  box-sizing: border-box;

  @media (max-width: 950px) {
    height: 70px;
  }
`;
const StyledNavTemplate = styled.div`
  // position: ;
  float: inline-start;
  background: #f6f5f0;
  height: 120px;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: content-box;
  z-index: 10;
  & .nav_wrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 950px) {
    height: 70px;
  }
`;
const StyledA = styled.div`
  position: absolute;
  top: 22px;
  left: 17px;
  background-image: url(${logo});
  width: 75px;
  height: 75px;
  z-index: 20;

  @media (max-width: 950px) {
    top: 11px;
    left: 11px;
    width: 45px;
    height: 45px;
    background-size: cover;
  }
`;

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
    ${(props) =>
      props.sidebar && props.sidebar === true
        ? css`
            z-index: 50;
          `
        : css`
            z-index: -50;
          `}
    z-index: 50;
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
      <Wrapper>
        <StyledNavTemplate>
          <div className="nav_wrapper">
            <Link to="/">
              <StyledA />
            </Link>
            <TopNav />
            <NavSearch />
          </div>
          <BottomNav />
        </StyledNavTemplate>
      </Wrapper>
    </>
  );
};

export default NavTemplate;
