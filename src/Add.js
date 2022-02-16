import React, { useContext, useState } from "react";
import { Kino } from "./context";

function Add() {
  const [data, setData] = useContext(Kino);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onAdd = () => {
    setData((prev) => [
      ...prev,
      { id: data.length + 1, name: name, price: price },
    ]);

    setName("");
    setPrice("");
  };
  return (
    <div className="container">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        value={price}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default Add;
