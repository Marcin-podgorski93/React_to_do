import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { Button } from "./components/Button/Button";
import { Form_Translate } from "./components/Form Translate/Form_translate";

function App() {
  const [isFormShown, setIsformShown] = useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("Uzytkownik");

  const [person, setPerson] = useState(null);

  const [todos, setTodo] = useState([
    { name: "Zaplacic rachunki", done: false, id: 1 },
    { name: "Wyrzucic smieci", done: true, id: 2 },
    { name: "Wyrzucic smieci", done: true, id: 3 },
    { name: "Wyrzucic smieci", done: true, id: 4 },
    { name: "Wyrzucic smieci", done: true, id: 5 },
  ]);

  const [data, setData] = useState([
    {
      id: 1,
      word: "kot",
      translation: "cat",
      category: "noun",
    },
    {
      id: 2,
      word: "pies",
      translation: "dog",
      category: "noun",
    },
    {
      id: 3,
      word: "skakać",
      translation: "jump",
      category: "verb",
    },
  ]);

  console.log(
    "Aktualna lista todos:",
    todos.map((todo) => todo.id)
  );

  function handleFormSubmit(formData) {
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPerson({ name, role });
    setName("");
  }

  console.log({ handleSubmit });
  console.log(name);
  console.log(role);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
        </div>
        {!isFormShown && (
          <button
            onClick={() => setIsformShown(true)}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form
          onFormSubmit={(NewTodosList) => {
            setTodo((prevTodo) => [
              ...prevTodo,
              { name: NewTodosList, done: false, id: prevTodo.length + 1 },
            ]);
            setIsformShown(false);
          }}
        />
      )}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            name={todo.name}
            done={todo.done}
            onDeleteButtonClick={() => {
              console.log("Nacisnięto usuń dla id:", todo.id);
              setTodo((prevTodo) =>
                prevTodo.filter((todos) => todos.id !== todo.id)
              );
            }}
            onDoneButtonClick={() => {
              setTodo((prevTodo) =>
                prevTodo.map((todos) => {
                  if (todos.id !== todo.id) {
                    return todos;
                  }
                  return {
                    ...todos,
                    done: true,
                  };
                })
              );
            }}
          />
        ))}
        {/* <TodoItem name="Zaplacic rachunki" done={true} />
        <TodoItem name="Wyrzucic smieci" done={false} /> */}
      </ul>
      <div>
        <header className={styles.loading}>
          <Form_Translate onFormSubmit={handleFormSubmit} />
          <Button>Zaladuje dane</Button>
          <section className={styles.section}>
            <ul className={styles.list}>
              {data.map((words) => (
                <li className={styles.li} key={words.key}>
                  <span className={styles.word}>
                    (PL) <strong>{words.word}</strong>
                  </span>
                  <span className={styles.word}>
                    (ANG) <strong>{words.translation}</strong>
                  </span>
                  <div className={styles.buttons}>
                    <button className={styles.emoticon}>👁️</button>
                    <button className={styles.emoticon}>✔️</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </header>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Dane osobowe</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Imie"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="radio"
              name="role"
              id="user"
              value="Uzytkownik"
              checked={role === "Uzytkownik"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="user">Uzytkownik</label>
          </div>
          <div>
            <input
              type="radio"
              name="role"
              id="moderator"
              value="Moderator"
              checked={role === "Moderator"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="user">Moderator</label>
          </div>
          <div>
            <input
              type="radio"
              name="role"
              id="admin"
              value="Administrator"
              checked={role === "Administrator"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="admin">Administrator</label>
          </div>
          <button>Zapisz</button>
        </form>
      </div>
    </div>
  );
}

export default App;
