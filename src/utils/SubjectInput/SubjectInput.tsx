import React from "react";
import styleForm from "../../sections/ContactForm/ContactForm.module.css";

/**
 * SubjectInput Component - A controlled checkbox input with accessible labeling.
 *
 * This component provides a styled checkbox input for selecting subjects or categories.
 * It implements proper accessibility practices with ARIA labeling and includes
 * all necessary props for controlled input handling in React forms.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.id - Unique identifier for the input element (used for htmlFor and id)
 * @param {string} props.name - Name attribute for form submission grouping
 * @param {string} props.value - The value represented by this checkbox option
 * @param {string} props.label - Display text for the checkbox option
 * @param {boolean} props.checked - Controlled checked state of the checkbox
 * @param {function} props.onChange - Handler for checkbox state changes
 * @returns {React.ReactElement} A styled, accessible checkbox input with label
 */

interface SubjectInputProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SubjectInput: React.FC<SubjectInputProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className={styleForm.subjectInput}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        aria-labelledby={`${id}Label`}
      />
      <label id={`${id}Label`} htmlFor={id} className={styleForm.subjectLabel}>
        {label}
      </label>
    </div>
  );
};

export default SubjectInput;
