import React from "react";
import aboutStyles from "./AboutHeader.module.css";

/**
 * AboutHeader Component
 *
 * @component
 * @description
 * The header section for the About page featuring:
 * - Main page title with emphasized brand name
 * - Mission statement/description paragraph
 * - Clean, accessible design
 *
 * @example
 * // Basic usage
 * <AboutHeader />
 *
 * @returns {React.ReactElement} A header section containing:
 * - Main heading with "Everey" brand highlight
 * - Descriptive paragraph about the platform
 *
 * @styles {module} aboutStyles - CSS Module classes:
 * - `.aboutHeader` - Main container
 * - `.aboutTitle` - Main heading style
 * - `.aboutTitleSpan` - Brand name highlight
 * - `.aboutDescription` - Description text
 *
 * @accessibility
 * - Semantic header element
 * - Role="banner" for landmark identification
 * - Proper heading hierarchy (h1)
 * - Sufficient color contrast
 * - Screen reader friendly text
 *
 * @design
 * - Responsive typography
 * - Brand name visual emphasis
 * - Clean, readable layout
 * - Consistent spacing
 *
 * @performance
 * - Lightweight component
 * - No image dependencies
 * - Efficient CSS styling
 *
 */

const AboutHeader: React.FC = () => {
  return (
    <header className={aboutStyles.aboutHeader} role="banner">
      <h1 className={aboutStyles.aboutTitle}>
        Welcome to <span className={aboutStyles.aboutTitleSpan}>Everey</span>
      </h1>

      <p className={aboutStyles.aboutDescription}>
        Everey AAP empowers African researchers by streamlining research
        publication and fostering a data-driven, collaborative community. We
        connect lecturers, students, and researchers to amplify their
        contributions and drive innovation.
      </p>
    </header>
  );
};

export default AboutHeader;
