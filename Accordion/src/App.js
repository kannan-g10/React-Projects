import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./Components/Accordion";
import { accordionData } from "./utils/contents";
import "./style.css";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => {
          return (
            <Accordion
              title={title}
              content={content}
              key={Math.random() * 100}
            />
          );
        })}
      </div>
    </div>
  );
};

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<App />);
