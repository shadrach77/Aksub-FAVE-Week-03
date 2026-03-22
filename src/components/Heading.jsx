import styles from "../styles/heading.module.css";

export default function Heading() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Good Morning, User 👋</h1>
      <p className={styles.p}>It’s Monday, 12 April 2025</p>
    </header>
  );
}
