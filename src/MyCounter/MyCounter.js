import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

export default function MyCounter() {
  const { count, increaCount, decreaCount } = useContext(CounterContext);
  return (
    <div>
      <h3>Counter Compenet</h3>
      <p>Count is: {count}</p>
      <button onClick={decreaCount}>-</button>
      <button onClick={increaCount}>+</button>
    </div>
  );
}
