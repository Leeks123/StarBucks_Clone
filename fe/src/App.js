import React from "react";
import NavTemplate from "./components/Nav/NavTemplate";
import ContentsTemplate from "./components/Contents/ContentsTemplate";
import FooterTemplate from "./components/Footer/FooterTemplate";

import SidebarProvider from "./context/SidebarContext.Provider";

const App = () => {
  return (
    <>
      <SidebarProvider>
        <NavTemplate />
      </SidebarProvider>

      <ContentsTemplate />
      <FooterTemplate />
    </>
  );
};

export default App;
