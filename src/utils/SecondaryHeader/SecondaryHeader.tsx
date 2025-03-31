import React from "react";
import styles from "./SecondaryHeader.module.css";

/**
 * SecondaryHeader Component - A reusable header component for secondary page sections.
 *
 * This component provides a consistent styling and structure for secondary headers
 * throughout the application. It supports optional descriptions, custom class names,
 * and additional child elements for flexible usage.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.title - The main header text (required)
 * @param {string} [props.description] - Optional descriptive text below the title
 * @param {string} [props.className] - Additional CSS class names for custom styling
 * @param {React.ReactNode} [props.children] - Optional child elements to render within the header
 * @returns {React.ReactElement} A styled secondary header component
 *
 */

// Define TypeScript interface for props
interface SecondaryHeaderProps {
  title: string;
  description?: string; // Optional description
  className?: string; // Optional custom class for additional styling
  children?: React.ReactNode; // Optional children for additional elements
}

const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({
  title,
  description,
  className,
  children,
}) => {
  return (
    <header className={`${styles.secondaryHeader} ${className || ""}`}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
      {children} {/* Render additional elements if provided */}
    </header>
  );
};

export default SecondaryHeader;
