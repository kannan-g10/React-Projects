import React from "react";
import ReactDOM from "react-dom/client";
import Toggle from "./Components/Toggle";
import "./style.css";

const App = () => {
  return <Toggle />;
};

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<App />);
