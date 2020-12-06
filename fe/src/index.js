import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구


require('dotenv').config();

const script = document.createElement('script'); 
    script.type = "text/javascript"; 
    script.src=`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_Map_Api_Key_Id}&submodules=geocoder`
    document.head.appendChild(script);

const store = createStore(rootReducer,composeWithDevTools());
console.log(store.getState()); 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
