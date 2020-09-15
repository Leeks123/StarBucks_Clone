import React from "react";
import styled from "styled-components";

const StyledBottomNav = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  & > ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    width: 750px;
    padding: 0px;
    margin: 0px;
    li {
      white-space: nowrap;
      height: 58px;
      padding: 10px 30px 0px 30px;
      a {
        font: normal 13px Avenir, Arial, georgia;
        color: #555;
        font-weight: bold;
      }
    }
    li:hover {
      background: #2c2a29;
      a {
        text-decoration: underline;
        color: green;
      }
    }
  }
`;

const NavContents = styled.div`
  position: fixed;
  left: 0px;
  top: 120px;
  width: 100vw;
  padding-left: ;
  background: #2c2a29;
  color: white;
  .grid_wrapper {
    width: 1100px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 220px 220px 220px 220px;
    grid-gap: 20px;
    .grid {
      span {
        font-size: 14px;
      }
      ul {
        border: 1px solid red;
        margin: 10px 0;
        padding: 0;
        list-style: none;
        li {
          color: #999;
          font-size: 12px;
          padding: 3px;
          height: 1rem;
        }
      }
    }
  }
`;

const BottomNav = () => (
  <StyledBottomNav>
    <ul>
      <li>
        <a>COFFEE</a>
        <NavContents>
          <div class="grid_wrapper">
            <div class="grid">
              <span>커피</span>
              <ul>
                <li>dfdfdf</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
              </ul>
            </div>
            <div class="grid">
              <span>커피</span>
              <ul>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
              </ul>
            </div>
            <div class="grid">
              <span>커피</span>
              <ul>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
              </ul>
            </div>
            <div class="grid">
              <span>커피</span>
              <ul>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
              </ul>
            </div>
            <div class="grid">
              <span>커피</span>
              <ul>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
                <li>sdfkdsjfkd</li>
              </ul>
            </div>
          </div>
        </NavContents>
      </li>
      <li>
        <a>MENU</a>
      </li>
      <li>
        <a>STORE</a>
      </li>
      <li>
        <a>RESPONSIBILITY</a>
      </li>
      <li>
        <a>STARBUCKS REWARDS</a>
      </li>
      <li>
        <a>WHAT'S NEW</a>
      </li>
    </ul>
  </StyledBottomNav>
);

export default BottomNav;
