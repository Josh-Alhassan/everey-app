import React from "react";

import styles from "./Accordion.module.css";
import AboutUs from "@/utils/AccordAboutUs/AboutUs";
import Payment from "@/utils/Payment/Payment";
import FEaturesAndServices from "@/utils/FeaturesAndServices/FEaturesAndServices";
import SupportAndPublishing from "@/utils/SupportAndPublishing/SupportAndPublishing";

const FAQSection = () => {
  return (
    <div className={styles.accordionContainer}>
      <AboutUs />
      <Payment />
      <FEaturesAndServices />
      <SupportAndPublishing />
    </div>
  );
};

export default FAQSection;
