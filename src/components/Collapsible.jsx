import styles from "../styles/collapsible.module.css";
import CollapsibleIcon from "../assets/collapsible-icon.svg";
import CalendarIcon from "../assets/calendar-icon.svg";
import { Children, useState } from "react";

export default function Collapsible({ children, label }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const count = Children.count(children);

  return (
    <header className={styles.header}>
      <img
        src={CollapsibleIcon}
        alt="collapsible-icon"
        onClick={() => {
          setIsCollapsed((curr) => !curr);
        }}
      />

      <main className={styles.main}>
        <div className={styles.mainHeading}>
          <img src={CalendarIcon} alt="calendar-icon" />
          <h1>{label}</h1>
          <p>{count}</p>
        </div>
        <div
          className={`${styles.childrenContainer} ${isCollapsed && styles.childrenContainerCollapsed}`}
        >
          {children}
        </div>
      </main>
    </header>
  );
}
