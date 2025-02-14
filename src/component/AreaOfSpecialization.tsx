import React from "react";
import style from "./AreaOfSpecialization.module.css";

// Define TypeScript interface for career fields
interface CareerField {
  field: string;
}
const AreaOfSpecialization: React.FC = () => {
  const careerFields: CareerField[] = [
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
  return (
    <section className={style.areaSection}>
      <header className={style.areaHeader}>
        <h2 className={style.areaHeaderTitle}>
          See what’s new in your fields!
        </h2>
        <p className={style.areaHeaderText}>
          Discover new things in your area of specialization
        </p>
      </header>

      <main className={style.areaFields}>
        {careerFields.map((career, index) => (
          <div key={index} className={style.areaField}>
            {career.field}
          </div>
        ))}
      </main>
    </section>
  );
};

export default AreaOfSpecialization;
