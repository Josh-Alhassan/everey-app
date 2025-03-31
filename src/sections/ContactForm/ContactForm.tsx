"use client";

import React, { useState } from "react";
import styleForm from "./ContactForm.module.css";
import FormField from "@/utils/FormField/FormField";
import SubjectInput from "@/utils/SubjectInput/SubjectInput";

import ContactInfo from "@/sections/ContactInfo/ContactInfo";

/**
 * ContactForm Component
 *
 * @component
 * @description
 * A comprehensive contact form with:
 * - Personal information fields (first name, last name, email, phone)
 * - Subject selection via radio buttons
 * - Message textarea
 * - Form validation
 * - Submission handling
 * - Contact information sidebar
 *
 * @example
 * // Basic usage
 * <ContactForm />
 *
 * @state
 * @property {FormState} formState - Current form values
 * @property {Object} errors - Validation error messages
 *
 * @handlers
 * @method handleInputChange - Updates form state for text inputs
 * @method handleCheckboxChange - Updates selected subject
 * @method handleSubmit - Validates and submits form data
 *
 * @validation
 * - Required field checking
 * - Email format validation
 * - Empty message validation
 *
 * @interface FormState
 * @property {string} firstName - User's first name
 * @property {string} lastName - User's last name
 * @property {string} email - User's email address
 * @property {string} phoneNumber - User's phone number
 * @property {string} subject - Selected subject ("General Inquiry" | "Support")
 * @property {string} message - User's message content
 *
 * @styles {module} styleForm - CSS Module classes:
 * - `.formSection` - Main container
 * - `.formContainer` - Form wrapper
 * - `.inputFields` - Personal info fields container
 * - `.subjectContainer` - Subject selection fieldset
 * - `.subjectTitle` - Subject legend text
 * - `.subjectWrapper` - Radio buttons container
 * - `.messageContainer` - Message field container
 * - `.messageLabel` - Message label
 * - `.textarea` - Message textarea
 * - `.errorMessage` - Validation error text
 * - `.submitButton` - Submit button
 *
 * @accessibility
 * - Semantic form structure
 * - Proper field labeling
 * - ARIA attributes for errors
 * - Keyboard navigable
 * - Screen reader friendly
 *
 * @dependencies
 * - FormField component for text inputs
 * - SubjectInput component for radio buttons
 * - ContactInfo component for sidebar
 *
 * @improvements
 * - Add phone number format validation
 * - Implement actual API submission
 * - Add loading state during submission
 * - Include success/error feedback
 */

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry", // Default selected subject
    message: "Write your message.....",
  });

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    message?: string;
  }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // Clear errors when the user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, subject: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    const newErrors: typeof errors = {};
    if (!formState.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formState.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formState.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (
      !formState.message.trim() ||
      formState.message === "Write your message....."
    ) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form data (you can replace this with an API call)
    console.log("Form submitted:", formState);
    alert("Form submitted successfully!");
  };

  return (
    <section className={styleForm.formSection}>
      <form className={styleForm.formContainer} onSubmit={handleSubmit}>
        {/* Reusable FormField for Input Fields */}
        <div className={styleForm.inputFields}>
          <FormField
            label="First Name"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formState.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
            required
          />

          <FormField
            label="Last Name"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formState.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
            required
          />

          <FormField
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formState.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />

          <FormField
            label="Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+234 012 3456 789"
            value={formState.phoneNumber}
            onChange={handleInputChange}
            error={errors.phoneNumber}
            required
          />
        </div>

        {/* Reusable SubjectInput for Subject Selection */}
        <fieldset className={styleForm.subjectContainer}>
          <legend className={styleForm.subjectTitle}>Select Subject?</legend>
          <div className={styleForm.subjectWrapper}>
            <SubjectInput
              id="generalInquiry"
              name="subject"
              value="General Inquiry"
              label="General Inquiry"
              checked={formState.subject === "General Inquiry"}
              onChange={handleCheckboxChange}
            />
            <SubjectInput
              id="support"
              name="subject"
              value="Support"
              label="Support"
              checked={formState.subject === "Support"}
              onChange={handleCheckboxChange}
            />
            {/* Add more SubjectInput components as needed */}
          </div>
        </fieldset>

        {/* Textarea for Message */}
        <div className={styleForm.messageContainer}>
          <label htmlFor="message" className={styleForm.messageLabel}>
            Message:
          </label>
          <textarea
            className={styleForm.textarea}
            id="message"
            name="message"
            rows={5}
            value={formState.message}
            onChange={handleInputChange}
            aria-invalid={!!errors.message}
            aria-describedby="messageError"
          />
          {errors.message && (
            <span id="messageError" className={styleForm.errorMessage}>
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className={styleForm.submitButton}>
          Send
        </button>
      </form>

      <ContactInfo />
    </section>
  );
};

export default ContactForm;
