import React from "react";
import styles from "./Footer.module.css";

interface SubscribeProps {
  header: string;
  text: string;
}

const Subscribe: React.FC<SubscribeProps> = ({ header, text }) => {
  return (
    <header className={styles.footerSubscribe}>
      <div>
        <h2 className={styles.footerSubscribeHeader}>{header}</h2>
        <p className={styles.footerSubscribeText}>{text}</p>
      </div>

      <div className={styles.footerSubscribeInputField}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.subscribeInput}
        />
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>
    </header>
  );
};

export default Subscribe;
