import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Q And A</h3>
        <div className="info">
          {data.map((question) => {
            return <SingleQuestion {...question} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
