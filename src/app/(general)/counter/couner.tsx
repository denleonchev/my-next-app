"use client";

import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrementClick = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>Count: {counter}</h1>
      <button onClick={handleIncrementClick}>Increment</button>
    </>
  );
}
