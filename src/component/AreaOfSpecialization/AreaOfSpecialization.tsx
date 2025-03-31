import React from "react";
import styles from "./AreaOfSpecialization.module.css";
import { defaultCareerFields } from "@/utils/constants";

/**
 * AreaOfSpecialization Component
 *
 * @component
 * @description
 * Displays a section featuring career fields/specializations with a header and
 * a grid of field names. Supports both static default data and dynamic data input.
 *
 * @example
 * // Using default data
 * <AreaOfSpecialization />
 *
 * // With custom career fields
 * <AreaOfSpecialization careerFields={[
 *   { field: 'Computer Science' },
 *   { field: 'Biomedical Engineering' }
 * ]} />
 *
 * @param {AreaOfSpecializationProps} [props] - Component props
 * @param {CareerField[]} [props.careerFields=defaultCareerFields] - Array of career fields to display
 *
 * @returns {React.ReactElement} A section containing:
 * - Header with title and description
 * - Responsive grid of career fields
 *
 * @interface CareerField
 * @property {string} field - Name of the career field/specialization
 *
 * @interface AreaOfSpecializationProps
 * @property {CareerField[]} [careerFields] - Optional array of career fields
 *
 * @styles {module} styles - CSS Module classes:
 * - `.areaSection` - Main container
 * - `.areaHeader` - Header container
 * - `.areaHeaderTitle` - Section title
 * - `.areaHeaderText` - Section description
 * - `.areaFields` - Fields grid container
 * - `.areaField` - Individual field item
 *
 * @accessibility
 * - Uses semantic HTML (section, header, main)
 * - Proper heading hierarchy
 * - Responsive design for all viewports
 * - Sufficient color contrast
 *
 * @data
 * - Uses defaultCareerFields if no props provided
 * - Expects array of { field: string } objects
 */

// Define TypeScript interface for career fields
interface CareerField {
  field: string;
}

// Define TypeScript interface for component props (if needed in the future)
interface AreaOfSpecializationProps {
  careerFields?: CareerField[]; // Optional prop for dynamic data
}

const AreaOfSpecialization: React.FC<AreaOfSpecializationProps> = ({
  careerFields = defaultCareerFields, // Use default data if no props are passed
}) => {
  return (
    <section className={styles.areaSection}>
      {/* Header Section */}
      <header className={styles.areaHeader}>
        <h2 className={styles.areaHeaderTitle}>
          See what’s new in your fields!
        </h2>
        <p className={styles.areaHeaderText}>
          Discover new things in your area of specialization
        </p>
      </header>

      {/* Career Fields Section */}
      <main className={styles.areaFields}>
        {careerFields.map((career, index) => (
          <div key={index} className={styles.areaField}>
            {career.field}
          </div>
        ))}
      </main>
    </section>
  );
};

export default AreaOfSpecialization;
