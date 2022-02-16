import React from "react";

const TodeValue = ({ value, dispatch }) => {
  return (
    <li className="list-group-item">
      <h3 style={{ color: value.complated ? "red" : "black" }}>{value.name}</h3>
      <button
        onClick={() => dispatch({ type: "toggle", payload: { id: value.id } })}
      >
        toggle
      </button>
      <button
        onClick={() => dispatch({ type: "delete", payload: { id: value.id } })}
      >
        delete
      </button>
    </li>
  );
};

export default TodeValue;
