import "./App.css";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Collapsible from "./components/Collapsible";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodos(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function handleToggleCheck(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }

  const today = new Date().toDateString();

  return (
    <div className="centering-container">
      <main className="main-container">
        <Heading />
        <Form onAddTodos={handleAddTodos} />
        <Collapsible label="Today">
          {todos
            .filter((todo) => new Date(todo.date).toDateString() === today)
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggleCheck={handleToggleCheck}
              />
            ))}
        </Collapsible>
        <Collapsible label="Other">
          {todos
            .filter((todo) => new Date(todo.date).toDateString() !== today)
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggleCheck={handleToggleCheck}
              />
            ))}
        </Collapsible>
      </main>
    </div>
  );
}

export default App;
