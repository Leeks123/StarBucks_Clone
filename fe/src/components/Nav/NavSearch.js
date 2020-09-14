import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const StyledNavSearch = styled.div`
  width: 20px;
  height: 20px;
  padding: 7px;
  margin: 8px;
  position: absolute;
  right: 45px;
  border: 1px solid red;
`;

const NavSearch = () => (
  <StyledNavSearch>
    <BsSearch size="20" />
  </StyledNavSearch>
);

export default NavSearch;
