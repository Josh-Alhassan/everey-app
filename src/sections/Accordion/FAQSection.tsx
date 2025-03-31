import React from "react";

import styles from "./Accordion.module.css";
import AboutUs from "@/utils/AccordAboutUs/AboutUs";
import Payment from "@/utils/Payment/Payment";
import FEaturesAndServices from "@/utils/FeaturesAndServices/FEaturesAndServices";
import SupportAndPublishing from "@/utils/SupportAndPublishing/SupportAndPublishing";

/**
 * FAQSection Component
 *
 * @component
 * @description
 * A container component that organizes and displays frequently asked questions (FAQ)
 * in categorized accordion sections. Combines multiple specialized accordion
 * components to create a complete FAQ interface.
 *
 * @structure
 * Composed of four main accordion sections:
 * 1. AboutUs - General information about the platform
 * 2. Payment - Billing and payment related questions
 * 3. FeaturesAndServices - Platform functionality questions
 * 4. SupportAndPublishing - Research support and publication questions
 *
 * @layout
 * - Vertical stacking of accordion components
 * - Consistent spacing between sections
 * - Responsive design for all viewports
 *
 * @styles {module} styles - CSS Module classes:
 * - `.accordionContainer` - Main container for all accordions
 *
 * @accessibility
 * - Proper heading hierarchy within child components
 * - Keyboard-navigable accordion items
 * - Screen reader friendly content
 * - ARIA attributes handled in child components
 *
 * @performance
 * - Lightweight container component
 * - Efficient rendering of child accordions
 * - No direct image dependencies
 *
 * @dependencies
 * - AboutUs accordion component
 * - Payment accordion component
 * - FeaturesAndServices accordion component
 * - SupportAndPublishing accordion component
 */

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
