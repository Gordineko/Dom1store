import { useEffect } from "react";
import { createContext, useState } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
  const [user, setUser] = useState({ email: "" });
  const [search, setSearch] = useState([]);
  const [basket, setBasket] = useState([]);
  const [favored, setFavored] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("likes") != null) {
      setFavored(JSON.parse(localStorage.getItem("likes")));
    }
  }, []);

  const value = {
    user,
    setUser,
    search,
    setSearch,
    basket,
    setBasket,
    favored,
    setFavored,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
