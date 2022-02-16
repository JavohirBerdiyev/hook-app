import React, { useContext } from "react";
import { Kino } from "../context";

export default function Movie({ items }) {
  const [data, setData] = useContext(Kino);
  const onDelete = (e) => {
    setData((prev) =>
      prev.filter((value) => {
        return value.id !== e;
      })
    );
  };

  return (
    <li className="list-group-item mb-3">
      <ul className="list-group">
        <li className="list-group-item">{items.name}</li>
        <li className="list-group-item">{items.price}$</li>
        <div>
          <button onClick={() => onDelete(items.id)}>Delete</button>
        </div>
      </ul>
    </li>
  );
}
