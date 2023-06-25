import React from "react";
import ReactDOM from "react-dom/client";
import Testimonials from "./Components/Testimonials";
import "./style.css";

const App = () => {
  return <Testimonials />;
};

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<App />);
