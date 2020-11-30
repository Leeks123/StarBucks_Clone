import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

require('dotenv').config();

const script = document.createElement('script'); 
    script.type = "text/javascript"; 
    script.src=`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_Map_Api_Key_Id}&submodules=geocoder`
    document.head.appendChild(script);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
