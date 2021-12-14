import React from "react";
import ReactDOM from "react-dom";
import "./css/clarovideo-grid.css";
import { Provider } from "react-redux";
import App from "./App";
import storeClaroVideo from "./components/redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeClaroVideo}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
