import React from "react";
import Button from "../UI/Button";
import style from "./ErrorModule.module.css";

function ErrorModule(props) {
  const closeHandle = () => {
    props.onClose();
  };
  return (
    <div className={style.error} onClick={closeHandle}>
      <div className={style.message}>
        <header className={style.header}>
          <h1>Oops! An error occurred. </h1>
          <h3>{props.title}</h3>
        </header>
        <main className={style.body}>
          <p>{props.message}</p>
          <p>Please try again</p>
        </main>
        <footer className={style.okay}>
          <Button onClick={closeHandle}>Okay</Button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorModule;
