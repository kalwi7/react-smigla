import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn">
          <AiOutlinePlus></AiOutlinePlus>
        </button>
      </header>
    </div>
  );
};

export default Question;
