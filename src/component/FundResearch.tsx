import React from "react";
import styles from "./FundResearch.module.css";

const FundResearch: React.FC = () => {
  return (
    <section className={styles.fundResearchContainer}>
      <h2 className={styles.fundResearchTitle}>
        Find The Perfect Research Team For Your Project.
      </h2>
      <p className={styles.fundResearchText}>
        With the power of a data driven community we have the right team for
        whatever it is that you need.
      </p>

      <a href="#" className={styles.fundResearchLink}>
        Fund a research
      </a>
    </section>
  );
};

export default FundResearch;
