/**
 * ResearchPlanCard Component
 *
 * @component
 * @description
 * A card component that displays different research plan options with:
 * - Visual placeholder (image container)
 * - Research duration and type
 * - Brief description
 * - "Read More" call-to-action
 *
 * Designed for showcasing available research plans in the ResearchAfrica section.
 *
 * @example
 * // Basic usage
 * <ResearchPlanCard
 *   title="Basic Research (1-3 Months)"
 *   description="Rapid Insights, Focused Approach"
 *   link="#basic-research"
 * />
 *
 * @param {ResearchPlan} props - Component properties
 * @param {string} props.title - Plan title with duration
 * @param {string} props.description - Short plan description
 * @param {string} props.link - Destination URL for "Read More"
 *
 * @returns {React.ReactElement} A research plan card containing:
 * - Image placeholder
 * - Title with research duration
 * - Descriptive text
 * - "Read More" link
 *
 * @interface ResearchPlan
 * @property {string} id - Unique identifier
 * @property {string} title - Plan title with duration
 * @property {string} description - Short description
 * @property {string} link - Read More destination
 *
 * @constant researchPlans
 * @description Predefined research plan options:
 * - Basic Research (1-3 Months)
 * - Standard Research (6 Months)
 * - Extensive Research (12 Months)
 * - Study (< 12 Months)
 *
 * @styles {module} styles - CSS Module classes:
 * - `.researchPlan` - Main card container
 * - `.researchImg` - Image placeholder
 * - `.researchPlanTitle` - Title styling
 * - `.researchPlanText` - Description text
 * - `.researchPlanLink` - Read More link
 *
 * @accessibility
 * - Semantic heading structure
 * - Link has descriptive text
 * - Needs alt text for images (see improvements)
 * - Sufficient color contrast
 *
 * @performance
 * - Lightweight component
 * - No image loading overhead
 * - Efficient CSS styling
 *
 */

import React from "react";
import styles from "../../sections/ResearchAfrica/ResearchAfrica.module.css";

// Interface for Research Plan
interface ResearchPlan {
  id: string;
  title: string;
  description: string;
  link: string;
}

// Data for Research Plans
export const researchPlans: ResearchPlan[] = [
  {
    id: "basic",
    title: "Basic Research (1-3 Months)",
    description: "Rapid Insights, Focused Approach",
    link: "#",
  },
  {
    id: "standard",
    title: "Standard Research (6 Months)",
    description: "Deeper Dive, Tailored Expertise",
    link: "#",
  },
  {
    id: "extensive",
    title: "Extensive Research (12 Months)",
    description: "Comprehensive Analysis, Strategic Impact",
    link: "#",
  },
  {
    id: "study",
    title: "Study (< 12 Months)",
    description: "Long-Term Vision, Lasting Impact",
    link: "#",
  },
];

// Reusable ResearchPlan Component
const ResearchPlanCard: React.FC<ResearchPlan> = ({
  title,
  description,
  link,
}) => (
  <div className={styles.researchPlan}>
    <div className={styles.researchImg}></div>
    <h4 className={styles.researchPlanTitle}>{title}</h4>
    <p className={styles.researchPlanText}>{description}</p>
    <a className={styles.researchPlanLink} href={link}>
      Read More &rarr;
    </a>
  </div>
);

export default ResearchPlanCard;
