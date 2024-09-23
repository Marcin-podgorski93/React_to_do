import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";

function App() {
  const todos = [
    { name: "Zaplacic rachunki", done: false },
    { name: "Wyrzucic smieci", done: true },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>5 zadan</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <Form />
      <ul>
        <TodoItem name="Zaplacic rachunki" done={true} />
        <TodoItem name="Wyrzucic smieci" done={false} />
      </ul>
    </div>
  );
}

export default App;