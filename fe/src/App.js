import React from "react";
import NavTemplate from "./components/Nav/NavTemplate";
import ContentsTemplate from "./components/Contents/ContentsTemplate";
import FooterTemplate from "./components/Footer/FooterTemplate";

const App = () => {
  return (
    <div>
      <NavTemplate />
      <ContentsTemplate />
      <FooterTemplate />
    </div>
  );
};

export default App;
