import styles from "../styles/form.module.css";
import CalendarIcon from "../assets/calendar-icon.svg";

export default function Form() {
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
        />
        <img src={CalendarIcon} alt="calendar-icon" />
      </div>

      <button type="submit" className={styles.button}>
        Create
      </button>
    </form>
  );
}
