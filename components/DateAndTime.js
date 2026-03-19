import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData }) => {
  const date = new Date(weatherData.current.time);
  const day = date.toLocaleDateString("fr-FR", { weekday: "long" });

  return (
    <div className={styles.wrapper}>
      <h2>{day}, {date.getHours()}h</h2>
    </div>
  );
};