import React, { useContext } from "react";
import User from "../User/User";
import { useUserContext } from "../../hooks/useUserContext";

const Users = () => {
  const { users } = useUserContext();

  return (
    <>
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
