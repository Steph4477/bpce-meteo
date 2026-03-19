import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData }) => {
  const date = new Date(weatherData.current.time);

  return (
    <div className={styles.wrapper}>
      <h2>{date.getHours()}h</h2>
    </div>
  );
};