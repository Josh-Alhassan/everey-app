import React from "react";
import styleForm from "../../sections/ContactForm/ContactForm.module.css";

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
}) => {
  return (
    <div className={styleForm.formfield}>
      <label htmlFor={id} className={styleForm.inputLabel}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={styleForm.inputfield}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}Error` : undefined}
        required={required}
      />
      {error && (
        <span id={`${id}Error`} className={styleForm.errorMessage}>
          {error}
        </span>
      )}
    </div>
  );
};

export default FormField;
