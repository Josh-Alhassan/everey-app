import React from "react";

import { ReactNode } from "react";

/**
 * PrimaryButton Component - A styled anchor element for primary call-to-action buttons.
 *
 * This component renders a visually prominent button with consistent styling,
 * typically used for the main actions in your application. It implements an
 * anchor tag (`<a>`) with predefined styles for background, padding, and typography.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {ReactNode} props.children - Content to display inside the button (text, icons, etc.)
 * @param {string} props.href - URL or path the button should link to
 * @returns {React.ReactElement} A styled anchor element serving as a primary action button
 *
 * @example
 * // Basic usage with text
 * <PrimaryButton href="/signup">
 *   Sign Up Now
 * </PrimaryButton>
 *
 * @example
 * // With icon and text
 * <PrimaryButton href="/download">
 *   <DownloadIcon /> Download PDF
 * </PrimaryButton>
 */

interface PrimaryButtonProps {
  children: ReactNode;
  href: string;
}

const PrimaryButton = ({ children, href }: PrimaryButtonProps) => {
  return (
    <a
      href={href}
      style={{
        backgroundColor: "rgb(11, 143, 80)",
        display: "block",
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
        padding: "15px",
        fontWeight: "700",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
};

export default PrimaryButton;
