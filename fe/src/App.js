import React from "react";
import { Route, Switch } from "react-router-dom";

import NavTemplate from "./components/Nav/NavTemplate";
import ContentsTemplate from "./components/Contents/ContentsTemplate";
import FooterTemplate from "./components/Footer/FooterTemplate";

import SidebarProvider from "./context/SidebarContext.Provider";

import CoffeePage from "./components/Pages/CoffeePage";
import ProductPage from "./components/Pages/ProductPage";
import LikePage from "./components/Pages/LikePage";
import FindStorePage from "./components/Pages/FindStorePage";
import EnjoyPage from "./components/Pages/EnjoyPage";

const App = () => {
  return (
    <>
      <SidebarProvider>
        <NavTemplate />
      </SidebarProvider>

      <Switch>
        <Route path="/" exact render={ContentsTemplate} />
        <Route path="/Starbucks_clone" exact render={ContentsTemplate} />
        <Route exact path="/coffee" render={() => <CoffeePage />} />
        <Route path="/coffee/:product/:type/:title" component={ProductPage} />
        <Route path="/coffee/:product" render={() => <CoffeePage />} />
        <Route path="/like" render={() => <LikePage />} />
        <Route path="/find_store" render={FindStorePage} />
        <Route path="/enjoy" render={EnjoyPage} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>

      {/* <ContentsTemplate /> */}
      <FooterTemplate />
    </>
  );
};

export default App;
