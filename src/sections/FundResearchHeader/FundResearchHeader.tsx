import React from "react";
import styles from "./FundResearchHeader.module.css";

/**
 * FundResearchHeader Component
 *
 * @component
 * @description
 * A simple header component for the Fund Research section that displays a prominent title.
 * Provides clear visual identification for the research funding section of the application.
 *
 * @example
 * // Basic usage
 * <FundResearchHeader />
 *
 * @returns {React.ReactElement} A div container containing:
 * - h1 heading with "Fund a Research" text
 *
 * @styles {module} styles - CSS Module classes:
 * - `.header` - Main container styling (spacing, alignment, etc.)
 * - `.headerTitle` - Title text styling (size, weight, color, etc.)
 *
 * @accessibility
 * - Semantic heading structure (h1)
 * - Clear, descriptive title text
 * - Should be used as part of a larger section with proper ARIA landmarks
 *
 * @performance
 * - Extremely lightweight component
 * - No state or side effects
 * - Minimal DOM footprint
 * - Efficient rendering
 */

const FundResearchHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Fund a Research</h1>
    </div>
  );
};

export default FundResearchHeader;
