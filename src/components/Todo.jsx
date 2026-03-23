import styles from "../styles/todo.module.css";
import Label from "./Label";

export default function Todo({ todo, onToggleCheck }) {
  return (
    <div
      className={`${styles.todoContainer} ${todo.checked && styles.todoContainerChecked}`}
    >
      <div className={styles.leftSection}>
        <input
          type="checkbox"
          id="todo"
          name="todo"
          checked={todo.checked}
          className={styles.checkbox}
          onChange={() => {
            onToggleCheck(todo.id);
          }}
        />
        <label
          for="todo"
          className={`${styles.label} ${todo.checked && styles.labelChecked}`}
        >
          {todo.name}
        </label>
      </div>
      <div className={styles.rightSection}>
        <Label date={todo.date} />
      </div>
    </div>
  );
}
