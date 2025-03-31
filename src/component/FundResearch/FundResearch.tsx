/**
 * FundResearch Component
 *
 * @component
 * @description
 * A call-to-action section promoting research funding opportunities.
 * Displays a title, description, and prominent call-to-action button.
 * Typically used in research platforms to encourage project funding.
 *
 * @example
 * // Basic usage
 * <FundResearch
 *   title="Support Groundbreaking Research"
 *   description="Contribute to innovative projects making a difference"
 *   ctaText="Fund a Project"
 *   ctaLink="/funding"
 * />
 *
 * @param {FundResearchProps} props - Component properties
 * @param {string} props.title - Section heading (1 header line)
 * @param {string} props.description - Supporting text (1-2 sentences)
 * @param {string} props.ctaText - Call-to-action button text
 * @param {string} props.ctaLink - Destination URL for CTA button
 *
 * @returns {React.ReactElement} A section containing:
 * - Prominent heading
 * - Descriptive paragraph
 * - Styled call-to-action link/button
 *
 * @interface FundResearchProps
 * @property {string} title - Section heading text
 * @property {string} description - Supporting content text
 * @property {string} ctaText - Action button text
 * @property {string} ctaLink - Action button destination
 *
 * @styles {module} styles - CSS Module classes:
 * - `.fundResearchContainer` - Main container
 * - `.fundResearchTitle` - Heading styling
 * - `.fundResearchText` - Description text
 * - `.fundResearchLink` - CTA button styling
 *
 * @accessibility
 * - Semantic section element
 * - Proper heading hierarchy
 * - Focusable interactive element
 * - Sufficient color contrast (min 4.5:1)
 * - Screen reader friendly text
 *
 * @performance
 * - Lightweight component
 * - No image dependencies
 * - Efficient CSS styling
 *
 * @improvements
 * - Add hover/focus states for CTA
 * - Include optional decorative graphic
 * - Add loading state for form submission
 * - Implement tracking for CTA clicks
 */

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
