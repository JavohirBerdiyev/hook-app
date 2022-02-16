import React, { useReducer, useState } from "react";
import TodeValue from "./TodeValue";

const Todo = () => {
  const retuces = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, complated: false },
        ];
      case "toggle":
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complated: !todo.complated };
          }
          return todo;
        });
      case "delete":
        return state.filter((todo) => todo.id !== action.payload.id);
      default:
        return state;
    }
  };

  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(retuces, []);

  const handleSubmit = () => {
    dispatch({ type: "add", payload: { name: name } });
    setName("");

    console.log(todos);
  };
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <ul className="list-group">
        {todos.map((value, i) => {
          return <TodeValue key={i} value={value} dispatch={dispatch} />;
        })}
      </ul>
    </div>
  );
};

export default Todo;
