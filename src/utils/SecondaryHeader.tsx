import React from "react";
import styles from "./SecondaryHeader.module.css";

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
