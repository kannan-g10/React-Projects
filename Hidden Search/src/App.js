import "./style.css";
import React from "react";
import ReactDom from "react-dom/client";
import SearchBar from "./Components/SearchBar";

const App = () => {
  return <SearchBar />;
};

const r = ReactDom.createRoot(document.getElementById("root"));
r.render(<App />);
