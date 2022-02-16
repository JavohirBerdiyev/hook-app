import React, { useReducer, useState } from "react";
import "./App.css";
import Todo from "./Todo/Todo";
function App() {
  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "decrement":
        return state - 1;
      case "increment":
        return state + 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App p-3">
      <h1>Context API</h1>
      <div className="d-flex mb-3">
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
      <Todo />
    </div>
  );
}

export default App;
