import { useState } from "react";
import "./App.css";
import Users from "./components/Users/Users";
import AddUser from "./components/AddUser/AddUser";
import UseProvider from "./context/UsersContext";

function App() {
  return (
    <>
      <UseProvider>
        <AddUser />
        <Users />
      </UseProvider>
    </>
  );
}

export default App;
