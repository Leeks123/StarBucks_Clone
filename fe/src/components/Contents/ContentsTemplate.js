import React from "react";
import styled from "styled-components";

// component
import Badge from "./Badge";
import Content01 from "./Content01";
import Content02 from "./Content02";
import Content03 from "./Content03";
import Content04 from "./Content04";
import Content05 from "./Content05";
import Content06 from "./Content06";
import Content07 from "./Content07";
import Content08 from "./Content08";

// img
import fav_bg from "../../images/fav_prod_bg.jpg";

const StyledContents = styled.div`
  padding-top: 120px;
  .favBg {
    position: fixed;
    left: -150px;
    right: 0px;
    width: 100wv;
    height: 100%;
    z-index: -20;

    img {
      overflow: visible;
      width: 100%;
      height: 85%;
    }
  }
`;

const ContentsTemplate = () => {
  return (
    <div>
      <Badge />
      <StyledContents>
        <div className="favBg">
          <img src={fav_bg} alt="fav_bg" />
        </div>
        <Content01 />
        <Content02 />
        <Content03 />
        <Content04 />
        <Content05 />
        <Content06 />
        <Content07 />
        <Content08 />
      </StyledContents>
    </div>
  );
};

export default ContentsTemplate;
