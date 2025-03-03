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
