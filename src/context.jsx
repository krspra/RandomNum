import React from "react";
import { createContext, useState } from "react";

export const RandomContext = createContext();

export function RandumContextProvider({ children }) {
  const [randomNumber, setRandomNumber] = useState(null);

  const updateRandomNumber = (newRandomNumber) => {
    setRandomNumber(newRandomNumber);
  };
  return (
    <RandomContext.Provider value={{ randomNumber, updateRandomNumber }}>
      {children}
    </RandomContext.Provider>
  );
}
