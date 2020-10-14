import React, { useState } from "react";
import { SidebarContext } from "./SidebarContext";

const SidebarProvider = ({ children }) => {
  const sidebarToggle = () => {
    setSidebar((prevState) => {
      return {
        ...prevState,
        sidebarOpened: !prevState.sidebar,
      };
    });
  };

  const initialState = {
    sidebarOpened: false,
    sidebarToggle,
  };
  const [sidebar, setSidebar] = useState(initialState);
  console.log("provider", sidebar);
  return (
    <SidebarContext.Provider value={sidebar}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
