import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

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
  .personIcon,
  .mapMarker {
    display: none;
  }
  @media (max-width: 950px) {
    position: relative;
    ul {
      display: block;
      li {
        display: none;
      }
      li:nth-child(2) {
        display: block;
        background: red;
      }
    }
    display: flex;
    .personIcon,
    .mapMarker {
      display: block;
      position: relative;
      right: 60px;

      margin: 17px 10px;
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
    <BsFillPersonFill className="personIcon" size="36" />
    <FaMapMarkerAlt className="mapMarker" size="36" />
  </StyledTopNav>
);

export default TopNav;
