import React from "react";
import styles from "./SuccessNumbers.module.css";

interface NumberCardProps {
  value: string;
  label: string;
}

const NumberCard: React.FC<NumberCardProps> = ({ value, label }) => {
  return (
    <div className={styles.numberCard}>
      <h3 className={styles.numberTitle}>{value}</h3>
      <p className={styles.successText}>{label}</p>
    </div>
  );
};

export default NumberCard;
