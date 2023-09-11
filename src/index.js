import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from "./pages/App";
import Nav from "./Components/Nav";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Nav /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);