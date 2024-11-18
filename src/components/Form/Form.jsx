import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export function Form({ onFormSubmit }) {
  const [inputChange, setInputChange] = useState("");

  console.log(inputChange);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(inputChange);
      }}
      className={styles.form}
    >
      <input
        value={inputChange}
        onChange={(e) => setInputChange(e.target.value)}
        className={styles.input}
        type="text"
      />
      <Button>Dodaj</Button>
    </form>
  );
}
