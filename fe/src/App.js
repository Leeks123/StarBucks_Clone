import React from "react";
import NavTemplate from "./components/Nav/NavTemplate";
import ContentsTemplate from "./components/Contents/ContentsTemplate";
import FooterTemplate from "./components/Footer/FooterTemplate";
import Awards from "./components/Footer/Awards";

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
