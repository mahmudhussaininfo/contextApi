import React, { useContext } from "react";
import { useUserContext } from "../../hooks/useUserContext";

const User = ({ user }) => {
  const { users, setUsers } = useUserContext();
  const { id, name } = user;

  const handleDeletes = (id) => {
    const deleteUser = users.filter((data) => data.id !== id);
    setUsers(deleteUser);
  };
  return (
    <>
      <div className="user">
        <h1>{id}</h1>
        <p>{name}</p>
        <button onClick={() => handleDeletes(id)}>Delete</button>
      </div>
    </>
  );
};

export default User;
