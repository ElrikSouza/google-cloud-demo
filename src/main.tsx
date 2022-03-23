import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageOne from "./page-one";
import PageTwo from "./page-two";
import logo from "./images/logo_dark.png";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      Png loading test:
      <img src={logo} alt="image loading not working" />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/one" element={<PageOne />} />
        <Route path="/two" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
