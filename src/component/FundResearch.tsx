import React from "react";
import styles from "./FundResearch.module.css";

interface FundResearchProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const FundResearch: React.FC<FundResearchProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className={styles.fundResearchContainer}>
      <h2 className={styles.fundResearchTitle}>{title}</h2>
      <p className={styles.fundResearchText}>{description}</p>
      <a href={ctaLink} className={styles.fundResearchLink}>
        {ctaText}
      </a>
    </section>
  );
};

export default FundResearch;
