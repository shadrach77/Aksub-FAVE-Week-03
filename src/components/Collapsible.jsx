import styles from "../styles/collapsible.module.css";
import CollapsibleIcon from "../assets/collapsible-icon.svg";
import CalendarIcon from "../assets/calendar-icon.svg";
import { useState } from "react";

export default function Collapsible({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <header className={styles.header}>
      <img src={CollapsibleIcon} alt="collapsible-icon" />

      <main className={styles.main}>
        <div className={styles.mainHeading}>
          <img src={CalendarIcon} alt="calendar-icon" />
          <h1>Today</h1>
          <p>4</p>
        </div>
        <div className={styles.childrenContainer}>{children}</div>
      </main>
    </header>
  );
}
