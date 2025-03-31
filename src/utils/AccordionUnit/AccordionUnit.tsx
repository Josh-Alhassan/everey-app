"use client";

import React, { useState } from "react";
import styles from "./AccordionUnit.module.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

/**
 * A single collapsible accordion unit component.
 *
 * This component renders a clickable header that toggles the visibility of its content.
 * It includes proper ARIA attributes for accessibility and an animated chevron icon
 * to indicate the open/closed state.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.title - The title text displayed in the accordion header
 * @param {string} props.content - The content to be displayed when the accordion is expanded
 * @returns {React.ReactElement} A collapsible accordion unit
 */

interface AccordionUnitProps {
  title: string;
  content: string;
}

const AccordionUnit: React.FC<AccordionUnitProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.accordionUnit}>
      {/* Accordion Header */}
      <div
        className={styles.accordionUnitHeader}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        <h3 className={styles.accordionUnitTitle}>{title}</h3>
        <span className={styles.accordionIcon}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* Accordion Content */}
      <article
        id="accordion-content"
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
        aria-hidden={!isOpen}
      >
        {content}
      </article>
    </div>
  );
};

export default AccordionUnit;
