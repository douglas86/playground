import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [data, setData] = useState({});
  return (
    <div>
      <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
    </div>
  );
};
