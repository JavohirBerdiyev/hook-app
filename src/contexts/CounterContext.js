import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export default function CounterContextProvider(props) {
  const [count, setCount] = useState(0);

  function increaCount() {
    setCount(count + 1);
  }

  function decreaCount() {
    setCount(count - 1);
  }

  const value = { count, increaCount, decreaCount };

  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
}
