import styles from "../styles/collapsible.module.css";
import CollapsibleIcon from "../assets/collapsible-icon.svg";
import CalendarIcon from "../assets/calendar-icon.svg";

export default function Collapsible() {
  return (
    <header className={styles.header}>
      <img src={CollapsibleIcon} alt="collapsible-icon" />

      <main className={styles.main}>
        <div className={styles.mainHeading}>
          <img src={CalendarIcon} alt="calendar-icon" />
          <h1>Today</h1>
          <p>4</p>
        </div>
        <p>hi</p>
      </main>
    </header>
  );
}
