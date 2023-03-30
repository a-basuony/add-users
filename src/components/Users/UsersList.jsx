import React from "react";
import Card from "../UI/Card";
import style from "./UsersList.module.css";

function UsersList(props) {
  return (
    <>
      <Card>
        <ul className={style.container}>
          {props.users.map((user) => (
            <li key={user.id} className={style.user}>
              {user.enteredName} ({user.enteredAge} years old)
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}

export default UsersList;
