import React from "react";
import styles from "./SuccessNumbers.module.css";

/**
 * NumberCard Component
 *
 * @component
 * @description
 * A statistic card component that displays a prominent number/value with an accompanying label.
 * Typically used to showcase success metrics, achievements, or key performance indicators.
 *
 * @example
 * // Basic usage
 * <NumberCard
 *   value="2.5M+"
 *   label="Active Users"
 * />
 *
 * @param {NumberCardProps} props - Component properties
 * @param {string} props.value - The numeric value to display (can include symbols like + or %)
 * @param {string} props.label - Descriptive text explaining what the value represents
 *
 * @returns {React.ReactElement} A card containing:
 * - Large, prominent value (h3 heading)
 * - Descriptive label (paragraph text)
 *
 * @interface NumberCardProps
 * @property {string} value - The main numeric value to display
 * @property {string} label - Explanation of what the value represents
 *
 * @styles {module} styles - CSS Module classes:
 * - `.numberCard` - Main container styling
 * - `.numberTitle` - Value text styling (size, weight, color)
 * - `.successText` - Label text styling
 *
 * @accessibility
 * - Semantic heading structure (h3)
 * - Clear relationship between value and label
 * - Sufficient color contrast
 * - Responsive text sizing
 *
 * @performance
 * - Lightweight component
 * - No image dependencies
 * - Efficient rendering
 * - Minimal DOM footprint
 */

interface NumberCardProps {
  value: string;
  label: string;
}

const NumberCard: React.FC<NumberCardProps> = ({ value, label }) => {
  return (
    <div className={styles.numberCard}>
      <h3 className={styles.numberTitle}>{value}</h3>
      <p className={styles.successText}>{label}</p>
    </div>
  );
};

export default NumberCard;
