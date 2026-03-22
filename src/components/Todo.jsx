import styles from "../styles/todo.module.css";
import Label from "./Label";

export default function Todo() {
  return (
    <div className={styles.todoContainer}>
      <div className={styles.leftSection}>
        <input
          type="checkbox"
          id="todo"
          name="todo"
          value="checked"
          className={styles.checkbox}
        />
        <label for="todo" className={styles.label}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          accusantium atque similique, dicta laborum quas odit tempore.
          Exercitationem blanditiis inventore, fugit quae sequi, error iusto
          dicta incidunt cumque rem aspernatur?
        </label>
      </div>
      <div className={styles.rightSection}>
        <Label />
      </div>
    </div>
  );
}
