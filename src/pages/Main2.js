import React from "react";
import { data2 } from "./data2";
import { Accordion } from "./Accordion";
import "./main2.css"
export const Main2 = () => {
  return (
    <div>
      <div>
    
        <div className="main-title-underline"></div>
        {data2.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
    </div>
  );
};