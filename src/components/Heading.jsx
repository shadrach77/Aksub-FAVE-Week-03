import styles from "../styles/heading.module.css";

export default function Heading() {
  const formattedDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function getTimeOfDay() {
    const hour = new Date().getHours();

    if (hour < 12) return "Morning";
    if (hour < 18) return "Afternoon";
    return "Evening";
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Good {getTimeOfDay()}, User 👋</h1>
      <p className={styles.p}>It’s {formattedDate}</p>
    </header>
  );
}
