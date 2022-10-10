import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import App from "./components/App";
import reduxThunk from "redux-thunk";
// const NodeMediaServer = require('node-media-server');

import reducers from "./reducers";

const root = createRoot(document.getElementById("root"));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
