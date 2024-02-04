import { useEffect, useState } from "react";
import "../../src/App.css";

import axios from "axios";
import UserCart from "./UserCart";

const UserCarts = () => {
  const [userName, setUserName] = useState("Deva");
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const userResponse = await axios.get("https://dummyjson.com/users");
    console.log(userResponse);
    setTimeout(() => {
      setUsers(userResponse.data.users);
    }, 5000);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map((user, index) => {
          return (
            <UserCart
              name={user.firstName}
              age={user.age}
              loc={user.address.city}
            />
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
      {/* <UserCart name={users[0].name} age={users[0].age} loc={users[0].loc} />
      <UserCart name={users[1].name} age={users[1].age} loc={users[1].loc} />
      <UserCart name={users[2].name} age={users[2].age} loc={users[2].loc} /> */}
    </div>
  );
};

export default UserCarts;
