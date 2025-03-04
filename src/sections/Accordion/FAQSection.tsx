import React from "react";

import styles from "./Accordion.module.css";
import AboutUs from "@/utils/AccordAboutUs/AboutUs";
import Payment from "@/utils/Payment/Payment";

const FAQSection = () => {
  return (
    <div className={styles.accordionContainer}>
      <AboutUs />
      <Payment />
      <AboutUs />
      <Payment />
    </div>
  );
};

export default FAQSection;
