import React from "react";
import SignUp from "./SignUp";

/**
 * SignUp Page component that renders the application's registration interface.
 *
 * @component
 * @description
 * Provides a welcoming signup experience with role-specific registration options
 * (Student or Researcher). Serves as the entry point for new users to join the platform.
 *
 * @example
 * // Basic usage in a Next.js route:
 * <SignUpPage />
 *
 * @returns {React.ReactElement} A container wrapping the `SignUp` component with:
 * - Welcome messaging configuration
 * - Call-to-action button configurations
 *
 * @property {Object} welcomeText - Configuration for the welcome section
 * @property {string} welcomeText.title - Main heading text
 * @property {string} welcomeText.description - Supporting descriptive text
 *
 * @property {Object} ctaButtons - Configuration for action buttons
 * @property {Object} ctaButtons.student - Student registration button
 * @property {string} ctaButtons.student.text - Button label text
 * @property {string} ctaButtons.student.href - Navigation target
 * @property {Object} ctaButtons.researcher - Researcher registration button
 * @property {string} ctaButtons.researcher.text - Button label text
 * @property {string} ctaButtons.researcher.href - Navigation target
 *
 * @see {@link SignUp} for the underlying presentation component
 * @note All href values should be replaced with actual routes before production
 */

const SignUpPage: React.FC = () => {
  /** Welcome text configuration */
  /** This section provides a welcoming message to users, encouraging them to join the platform. */
  const welcomeText = {
    title: "Welcome to Everey!",
    description:
      "Embark on your research journey with us. Join our community to unlock exclusive opportunities and resources tailored for your academic endeavors.",
  };

  /** Call-to-action button configurations */
  const ctaButtons = {
    student: {
      text: "Signup as Student",
      href: "#",
    },
    researcher: {
      text: "Signup as Researcher",
      href: "#",
    },
  };

  return (
    <div>
      <SignUp welcomeText={welcomeText} ctaButtons={ctaButtons} />
    </div>
  );
};

export default SignUpPage;
