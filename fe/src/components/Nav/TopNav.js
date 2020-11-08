import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SidebarContext } from "../../context/SidebarContext";

const StyledTopNav = styled.div`
  & > ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
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
  .icons {
    display: none;
  }
  @media (max-width: 950px) {
    position: relative;
    width: 70vw;
    ul {
      display: block;
      width: 70vw;
      margin: 0;
      height: 76px;
      li {
        display: none;
      }
      li:nth-child(2) {
        ${(props) =>
          props.sidebarOpened && props.sidebarOpened === true
            ? css`
                display: block;
              `
            : css`
                display: none;
              `}
        box-sizing: border-box;
        position: fixed;
        top: 112px;
        right: -1px;
        border: 0px;
        border-top: 1px solid black;
        padding: 10px 30px;
        background: #403a36;
        width: 70vw;
        height: 76px;

        font: bold 28px Avenir, Arial, georgia;
        color: #fff;

        &:hover {
          text-decoration: underline;
        }
      }
    }
    .icons {
      display: block;
      position: absolute;
      padding: 17px;
      right: 40px;
      top: -5px;
      svg {
        padding-right: 20px;
      }
    }
  }
  @media (max-width: 670px) {
    ul {
      li:nth-child(2) {
        box-sizing: border-box;
        padding-top: 25px;
        height: 74px;
        font: normal 18px Avenir, Arial, georgia;
        font-weight: bold;
      }
    }
  }
  @media (max-width: 480px) {
    ul {
      li:nth-child(2) {
        box-sizing: border-box;
        top: 70px;
        padding-top: 15px;
        height: 50px;
        font: normal 14px Avenir, Arial, georgia;
        font-weight: bold;
      }
    }
  }
`;
const TopNav = () => {
  const { sidebarOpened } = useContext(SidebarContext);

  return (
    <StyledTopNav sidebarOpened={sidebarOpened}>
      <ul>
        <li>Sign In</li>
        <li>My StarBucks</li>
        <li>Custommer Service & Ideas</li>
        <li>Find a Store</li>
      </ul>
      <div className="icons">
        <BsFillPersonFill className="personIcon" size="43" />
        <FaMapMarkerAlt className="mapMarker" size="43" />
      </div>
    </StyledTopNav>
  );
};

export default TopNav;
