import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="App">
      <h1>Everybody makes a counter. It's just fine.</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={increase}>Increase!!</button>
      <button onClick={decrease}>Decrease!!</button>
      <button onClick={reset}>Reset to 0</button>
    </div>
  );
}
