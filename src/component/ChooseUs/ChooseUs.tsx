import React from "react";
import styles from "./ChooseUs.module.css";

// Import icons
import background from "../../../public/gradient-container.png";
import { ArrowIcon, ReasonCard } from "./index";

// Import constants
import { reasonCards } from "../../utils/constants";

const ChooseUs: React.FC = () => {
  return (
    <section
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
      className={styles.chooseUsContainer}
    >
      {/* 1st Grid: Title and CTA */}
      <div className={styles.chooseUsReason}>
        <div className={styles.chooseUsArr}>
          <ArrowIcon />
        </div>
        <h2 className={styles.chooseUsTitle}>
          Reasons why you should choose us!
        </h2>
        <a href="#" className={styles.chooseUsCta}>
          Start Your Research ↗️
        </a>
      </div>

      {/* 2nd Grid: Empty (for layout purposes) */}
      <div className={styles.emptyContent}></div>

      {/* 3rd-6th Grid: Reason Cards */}
      {reasonCards.map((card, index) => (
        <ReasonCard key={index} {...card} />
      ))}
    </section>
  );
};

export default ChooseUs;
