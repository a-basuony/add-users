import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./AddUsers.module.css";
import ErrorModule from "./ErrorModule";

const AddUsers = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState();
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(true);
      setError({
        title: "Invalid input",
        message: "Please enter a name and age (non-empty values).",
      });
      return;
    }
    if (enteredAge < 1) {
      setIsValid(true);
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
    setIsValid(null);
  };

  const onClose = () => {
    setEnteredName("");
    setEnteredAge("");
    setIsValid(null);
  };

  return (
    <Card>
      {isValid && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onClose={onClose}
        />
      )}
      <form className={styles.container} onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="text"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
            placeholder="Enter Your Age"
          />
        </div>
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
