import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavTemplate from "./components/Nav/NavTemplate";
import ContentsTemplate from "./components/Contents/ContentsTemplate";
import FooterTemplate from "./components/Footer/FooterTemplate";

import SidebarProvider from "./context/SidebarContext.Provider";

import CoffeePage from "./components/Pages/CoffeePage";
import LikePage from "./components/Pages/LikePage";
import FindStorePage from "./components/Pages/FindStorePage";
import EnjoyPage from "./components/Pages/EnjoyPage";

const App = () => {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Route path="/">
          <NavTemplate />
        </Route>
      </SidebarProvider>

      <Switch>
        <Route exact path="/" component={ContentsTemplate} />
        <Route path="/coffee" compoenent={CoffeePage} />
        <Route path="/like" compoenent={LikePage} />
        <Route path="/find_store" compoenent={FindStorePage} />
        <Route path="/enjoy" compoenent={EnjoyPage} />
      </Switch>
      {/* <ContentsTemplate /> */}
      <FooterTemplate />
    </BrowserRouter>
  );
};

export default App;
