import { createContext } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
  const value = {
    name: "asd",
    age: 23,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
