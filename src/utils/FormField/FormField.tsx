import React from "react";
import styleForm from "../../sections/ContactForm/ContactForm.module.css";

/**
 * A reusable form field component with built-in validation and accessibility features.
 *
 * This component renders a complete form field with label, input, and error message.
 * It supports various input types, required field indication, and proper ARIA attributes
 * for accessibility. The component handles both user input and validation feedback.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.label - The text label for the form field
 * @param {string} props.id - Unique identifier for the input element (used for htmlFor and id)
 * @param {string} props.name - Name attribute for the input element
 * @param {string} [props.type="text"] - Input type (text, email, password, etc.)
 * @param {string} [props.placeholder] - Placeholder text for the input
 * @param {string} props.value - Controlled input value
 * @param {function} props.onChange - Handler for input changes
 * @param {string} [props.error] - Error message to display (if any)
 * @param {boolean} [props.required=false] - Whether the field is required
 * @returns {React.ReactElement} A complete form field with label, input, and optional error message
 *
 * @example
 * // Basic text input
 * <FormField
 *   label="Username"
 *   id="username"
 *   name="username"
 *   value={formData.username}
 *   onChange={handleChange}
 * />
 *
 * @example
 * // Required email field with validation
 * <FormField
 *   label="Email"
 *   id="email"
 *   name="email"
 *   type="email"
 *   required={true}
 *   value={formData.email}
 *   onChange={handleChange}
 *   error={errors.email}
 *   placeholder="example@domain.com"
 * />
 */

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
