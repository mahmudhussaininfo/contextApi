import React, { useContext, useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";

const AddUser = () => {
  const { setUsers } = useUserContext();
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      name: userName,
    };
    setUsers((prevState) => [...prevState, newUser]);
    setUserName("");
  };
  return (
    <>
      <div className="register">
        <h1>Register User</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={handleChange}
          />
          <button>send</button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
