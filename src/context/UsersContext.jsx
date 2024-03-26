import { createContext, useState } from "react";

export const UsersContext = createContext({});

const UseProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "kuddus",
    },
    {
      id: 2,
      name: "Rahman",
    },
    {
      id: 3,
      name: "Yahoo",
    },
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UseProvider;
