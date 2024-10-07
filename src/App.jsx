import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "../utils/getSubheading";

function App() {
  const [isFormShown, setIsformShown] = useState(false);

  const todos = [
    { name: "Zaplacic rachunki", done: false, id: 1 },
    { name: "Wyrzucic smieci", done: true, id: 2 },
    { name: "Wyrzucic smieci", done: true, id: 3 },
    { name: "Wyrzucic smieci", done: true, id: 4 },
    { name: "Wyrzucic smieci", done: true, id: 5 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        <button onClick={() => setIsformShown(true)} className={styles.button}>
          +
        </button>
      </header>
      {isFormShown && <Form />}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} name={todo.name} done={todo.done} />
        ))}
        {/* <TodoItem name="Zaplacic rachunki" done={true} />
        <TodoItem name="Wyrzucic smieci" done={false} /> */}
      </ul>
    </div>
  );
}

export default App;
