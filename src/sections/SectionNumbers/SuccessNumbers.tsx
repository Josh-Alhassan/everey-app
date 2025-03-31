import React from "react";
import NumberCard from "./NumberCard";
import successStyles from "./SuccessNumbers.module.css";

/**
 * SuccessNumbers Component
 *
 * @component
 * @description
 * A metrics showcase section that displays key success indicators using NumberCard components.
 * Presents important statistics in a visually appealing grid layout.
 *
 * @example
 * // Basic usage
 * <SuccessNumbers />
 *
 * @structure
 * 1. Section Header:
 *    - "Our Success Numbers" title
 * 2. Metrics Grid:
 *    - Multiple NumberCard components displaying:
 *      - Value (e.g., "6500+")
 *      - Label (e.g., "Number of published articles")
 *
 * @interface SuccessData
 * @property {number} id - Unique identifier
 * @property {string} value - The metric value (can include symbols like +)
 * @property {string} label - Description of what the metric represents
 *
 * @data successData
 * @description Array of success metrics containing:
 * - Published articles count (3 variations)
 *
 * @styles {module} successStyles - CSS Module classes:
 * - `.container` - Main section container
 * - `.wrapper` - Content wrapper
 * - `.title` - Section title styling
 * - `.successNumbers` - Metrics grid container
 *
 * @accessibility
 * - Semantic section element
 * - ARIA-labeledby for screen readers
 * - Proper heading hierarchy
 * - Color contrast compliant
 *
 * @performance
 * - Efficient rendering of NumberCards
 * - Lightweight parent component
 * - Optimized layout
 *
 * @dependencies
 * - NumberCard component for individual metrics
 *
 * @improvements
 * - Add dynamic data fetching
 * - Implement counting animations
 * - Include more diverse metrics
 * - Add interactive tooltips
 */

interface SuccessData {
  id: number;
  value: string;
  label: string;
}

// Define the success data
const successData: SuccessData[] = [
  {
    id: 1,
    value: "6500+",
    label: "Number of published articles",
  },
  {
    id: 2,
    value: "1000+",
    label: "Number of published articles",
  },
  {
    id: 3,
    value: "2000+",
    label: "Number of published articles",
  },
];

const SuccessNumbers: React.FC = () => {
  return (
    <section
      className={successStyles.container}
      aria-labelledby="success-heading"
    >
      <div className={successStyles.wrapper}>
        <h3 id="success-heading" className={successStyles.title}>
          Our Success Numbers
        </h3>

        <div className={successStyles.successNumbers}>
          {successData.map((data) => (
            <NumberCard key={data.id} value={data.value} label={data.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessNumbers;
