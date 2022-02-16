import React, { useContext } from "react";
import { CounterContext } from "./contexts/CounterContext";

export default function Compoenet() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>Compoenet</h2>
      <p>Count {count}</p>
    </div>
  );
}
