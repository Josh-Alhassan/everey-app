import React from "react";
import styles from "./SignUp.module.css";
import Image from "next/image";
import PrimaryButton from "@/utils/PrimaryButton/PrimaryButton";

// Assets
import logoAlt from "../../../public/logo-alt.png";
import welcome from "../../../public/welcome-frame.png";
import scientist from "../../../public/scientist.jpg";

/**
 * SignUp presentation component that renders a dual-panel registration interface.
 *
 * @component
 * @description
 * Visual layout for user registration with:
 * - Left panel: Branding, welcome content, and role-selection CTAs
 * - Right panel: Decorative image with overlay
 * Designed as a presentational component (no business logic)
 *
 * @example
 * // Basic usage with required props:
 * <SignUp
 *   welcomeText={{ title: "Welcome", description: "Join us..." }}
 *   ctaButtons={{
 *     student: { text: "Student", href: "/student" },
 *     researcher: { text: "Researcher", href: "/researcher" }
 *   }}
 * />
 *
 * @param {SignUpProps} props - Component properties
 * @param {Object} props.welcomeText - Welcome content configuration
 * @param {string} props.welcomeText.title - Main heading (1-5 words recommended)
 * @param {string} props.welcomeText.description - Supporting paragraph (40-60 chars)
 * @param {Object} props.ctaButtons - Call-to-action configuration
 * @param {Object} props.ctaButtons.student - Student registration button
 * @param {string} props.ctaButtons.student.text - Button label (e.g., "Sign Up as Student")
 * @param {string} props.ctaButtons.student.href - Route path or URL
 * @param {Object} props.ctaButtons.researcher - Researcher registration button
 * @param {string} props.ctaButtons.researcher.text - Button label
 * @param {string} props.ctaButtons.researcher.href - Route path or URL
 *
 * @returns {React.ReactElement} A two-column layout containing:
 * - Brand logo
 * - Welcome illustration
 * - Configurable text content
 * - Role-selection buttons
 * - Decorative background image
 *
 * @styles {module} styles - CSS Module with these classes:
 * - `.signupContainer` (main layout grid)
 * - `.signupWrapper` (left content column)
 * - `.evereyLogo` (logo container)
 * - `.welcomeSvg` (illustration styling)
 * - `.signupContent` (text container)
 * - `.ctas` (button group)
 * - `.imageContainer` (right image column)
 * - `.imageOverlay` (color overlay effect)
 *
 * @accessibility
 * - Uses `aria-label="Sign Up Section"` for screen readers
 * - All images have alt text
 * - Color contrast meets WCAG AA standards
 * - Button focus states are clearly visible
 *
 * @dependencies
 * - next/image for optimized image loading
 * - PrimaryButton component for CTAs
 */

// Interface for SignUp component props
interface SignUpProps {
  welcomeText: {
    title: string;
    description: string;
  };
  ctaButtons: {
    student: {
      text: string;
      href: string;
    };
    researcher: {
      text: string;
      href: string;
    };
  };
}

const SignUp: React.FC<SignUpProps> = ({ welcomeText, ctaButtons }) => {
  return (
    <section className={styles.signupContainer} aria-label="Sign Up Section">
      {/* Left Side: Content */}
      <div className={styles.signupWrapper}>
        {/* Logo */}
        <div className={styles.evereyLogo}>
          <Image src={logoAlt} alt="Everey Logo" priority />
        </div>

        {/* Welcome Image */}
        <Image
          className={styles.welcomeSvg}
          src={welcome}
          alt="Woman by a window"
          priority
        />

        {/* Welcome Text */}
        <div className={styles.signupContent}>
          <h1 className={styles.signupTitle}>{welcomeText.title}</h1>
          <p className={styles.signupText}>{welcomeText.description}</p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className={styles.ctas}>
          <PrimaryButton href={ctaButtons.student.href}>
            {ctaButtons.student.text}
          </PrimaryButton>
          <PrimaryButton href={ctaButtons.researcher.href}>
            {ctaButtons.researcher.text}
          </PrimaryButton>
        </div>
      </div>

      {/* Right Side: Image with Overlay */}
      <div className={styles.imageContainer}>
        <Image
          className={styles.signupImage}
          src={scientist}
          alt="Female Scientist"
          priority
        />
        <div className={styles.imageOverlay} />
      </div>
    </section>
  );
};

export default SignUp;
