import React, { createContext, useState } from "react";

export const Kino = createContext();
export const KinoProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, name: "Tom and Jerry", price: 100 },
    { id: 2, name: "Harry Potter", price: 400 },
    { id: 3, name: "Avatar", price: 300 },
    { id: 4, name: "Eva", price: 50 },
  ]);
  return <Kino.Provider value={[data, setData]}>{children}</Kino.Provider>;
};
