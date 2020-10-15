import React, { useState } from "react";
import { SidebarContext } from "./SidebarContext";

const SidebarProvider = ({ children }) => {
  const sidebarToggle = () => {
    setSidebar((prevState) => {
      return {
        ...prevState,
        sidebarOpened: !prevState.sidebarOpened,
      };
    });
  };

  const initialState = {
    sidebarOpened: false,
    sidebarToggle,
  };
  const [sidebar, setSidebar] = useState(initialState);
  return (
    <SidebarContext.Provider value={sidebar}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
