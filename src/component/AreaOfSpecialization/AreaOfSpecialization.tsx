import React from "react";
import styles from "./AreaOfSpecialization.module.css";

// Define TypeScript interface for career fields
interface CareerField {
  field: string;
}

// Define TypeScript interface for component props (if needed in the future)
interface AreaOfSpecializationProps {
  careerFields?: CareerField[]; // Optional prop for dynamic data
}

// Static data for career fields (can be moved to a separate file or fetched from an API)
const defaultCareerFields: CareerField[] = [
  { field: "Art & Humanities" },
  { field: "Biomedical" },
  { field: "Computer Science" },
  { field: "Education" },
  { field: "Environmental Science" },
  { field: "Engineering" },
  { field: "Social Sciences" },
  { field: "History" },
  { field: "Law" },
  { field: "Medicine" },
  { field: "Physics" },
  { field: "Psychology" },
];

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
