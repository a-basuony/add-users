import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
import "./App.css";
function App() {
  const [users, setUsers] = useState([
    {
      enteredName: "Ahmed Basouny",
      enteredAge: "24",
      id: Math.random().toString(),
    },
  ]);

  const addUsersHandler = (enteredName, enteredAge) => {
    setUsers((prevUser) => {
      return [
        ...prevUser,
        { enteredName, enteredAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUsers onAddUser={addUsersHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
