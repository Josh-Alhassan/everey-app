import React from "react";
import NumberCard from "./NumberCard";
import successStyles from "./SuccessNumbers.module.css";

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
