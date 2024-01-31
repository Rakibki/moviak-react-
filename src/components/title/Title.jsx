import React from "react";
import "./style.css";

const Title = ({ text }) => {
  return (
    <div style={{ width: "200px", margin: "0 auto" }} className="three mb-5">
      <h1>{text}</h1>
    </div>
  );
};

export default Title;
