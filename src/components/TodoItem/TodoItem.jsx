import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

export function TodoItem({ name, done }) {
  function check(e) {
    console.log(e);
  }

  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && <Button onClick={check}>Zrobione</Button>}
      <Button>Usuń</Button>
    </li>
  );
}
