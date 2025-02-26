import React from "react";
import styleForm from "../../sections/ContactForm/ContactForm.module.css";

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
