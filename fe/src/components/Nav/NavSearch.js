import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const StyledNavSearch = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 7px;
  margin: 8px;
  background: white;
  border: 1px solid #555555;
  border-radius: 5px;
  & > input {
    height: 20px;
    margin-right: 10px;
    border: 0px;
    padding: 0px;
  }
`;

const NavSearch = () => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(true);
  };

  return (
    <StyledNavSearch>
      {clicked && <input placeholder="통합검색" />}
      <BsSearch size="20" onClick={onClick} />
    </StyledNavSearch>
  );
};

export default NavSearch;
