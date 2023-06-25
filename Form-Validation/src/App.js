import React from "react";
import ReactDOM from "react-dom/client";
import Validate from "./Components/Validate";
import "./style.css";

const App = () => {
  return <Validate />;
};

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<App />);
