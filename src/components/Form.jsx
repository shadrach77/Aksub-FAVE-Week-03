import styles from "../styles/form.module.css";
import CalendarIcon from "../assets/calendar-icon.svg";
import { useState } from "react";

export default function Form({ onAddTodos }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  function handleSubmission(e) {
    e.preventDefault();

    onAddTodos({
      id: crypto.randomUUID(),
      name: todoName,
      date: todoDate,
      checked: false,
    });

    setTodoName("");
    setTodoDate("");
  }

  return (
    <form action="" className={styles.form}>
      <div className={`${styles.formGroup} ${styles.formGroupTodo}`}>
        <label for="todo" className={styles.label}>
          What do you want to do?
        </label>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Study for mid exams..."
          className={styles.input}
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
      </div>

      <div className={`${styles.formGroup} ${styles.formGroupDate}`}>
        <label for="date" className={styles.label}>
          When should it be done?
        </label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Monday, 25th April 2025"
          className={styles.input}
          value={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
        />
        <img src={CalendarIcon} alt="calendar-icon" />
      </div>

      <button
        type="submit"
        className={styles.button}
        onClick={handleSubmission}
      >
        Create
      </button>
    </form>
  );
}
