import styles from "../styles/label.module.css";

export default function Label({ date }) {
  if (new Date(date).toDateString() === new Date().toDateString()) {
    return <div className={`${styles.label} ${styles.labelToday}`}>Today</div>;
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toDateString();

  if (new Date(date).toDateString() === tomorrowStr) {
    return (
      <div className={`${styles.label} ${styles.labelTomorrow}`}>Tomorrow</div>
    );
  }

  function parseDate(dateString) {
    const [y, m, d] = dateString.split("-");
    return new Date(y, m - 1, d);
  }

  return (
    <div className={`${styles.label}`}>
      {parseDate(date).toLocaleDateString("en-GB", {
        weekday: "short",
      })}
      ,{" "}
      {parseDate(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      })}
    </div>
  );
}
