import React, { useContext } from "react";
import { Kino } from "../context";
import Movie from "./Movie";

export default function MoveList() {
  const [data, setData] = useContext(Kino);

  return (
    <ul className="list-group">
      {data.map((item) => (
        <Movie key={item.id} items={item} />
      ))}
    </ul>
  );
}
