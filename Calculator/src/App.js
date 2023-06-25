import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./Components/Calculator";
import "./style.css";

const App = () => {
  return (
    <>
      <Calculator />
    </>
  );
};

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<App />);
