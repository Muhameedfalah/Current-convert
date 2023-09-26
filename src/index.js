import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; 
import * as serviceWorker from "./serviceWorker";

import "./index.css"; 
import "../node_modules/font-awesome/css/font-awesome.css";
import "../node_modules/currency-flags/dist/currency-flags.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
