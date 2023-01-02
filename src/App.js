import React, { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  function res() {
    setCount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={res}>reset</button>
      <button onClick={dec}>dec</button>
    </div>
  );
}
