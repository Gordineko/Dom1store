import { useEffect } from "react";
import { createContext, useState } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
  const [user, setUser] = useState({ email: "" });
  const [search, setSearch] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const value = {
    user,
    setUser,
    search,
    setSearch,
    basket,
    setBasket,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
