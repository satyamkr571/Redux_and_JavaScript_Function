import React from "react";
import { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Hooks Demo</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click to count
      </button>
    </div>
  );
}

export default Hooks;
