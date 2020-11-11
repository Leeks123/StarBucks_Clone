import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import CategoryCheck from "./CoffeePage_CategoryCheck";
import Category from "./CoffeePage_Category";

const Wrapper = styled.div`
  background-color: white;
  .wrapper {
    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
    padding-top: 120px;
    @media (max-width: 950px) {
      padding-top: 70px;
    }
  }
  @media (max-width: 1100px) {
    margin: 0 20px;
  }
`;

const Title = styled.h2`
  padding: 30px 0;
  margin: 0;
  font-size: 28px;
  @media (max-width: 1100px) {
    margin: 0 20px;
  }
`;

const CoffeePage = ({ match }) => {
  const [category, setCategory] = useState("beans");
  const [types, setTypes] = useState(["blond", "medium", "dark", "flavor"]);

  useEffect(() => {
    console.log("match.params", match.params);

    // if (match.params) {
    //   setCategory(match.params);
    // }
  });

  console.log("state", category);

  const onCategoryChange = (btnState) => {
    if (btnState[0] === true) {
      setCategory("beans");
    } else if (btnState[1] === true) {
      setCategory("via");
    } else if (btnState[2] === true) {
      setCategory("origami");
    }
  };
  const onTypeChange = (checkedList) => {
    setTypes(checkedList);
  };

  return (
    <>
      <Wrapper>
        <div className="wrapper">
          <Title>커피</Title>
          <CategoryCheck
            category={category}
            type={types}
            onCategoryChange={onCategoryChange}
            onTypeChange={onTypeChange}
          />
          {types.map((type) => (
            <Category category={category} type={type} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default withRouter(CoffeePage);
