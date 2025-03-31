import React from "react";
import faqStyles from "./FaqHeader.module.css";

/**
 * FaqHeader Component
 *
 * @component
 * @description
 * A simple header component for the FAQ (Frequently Asked Questions) section.
 * Displays a clear "FAQs" heading to identify the section.
 *
 * @example
 * // Basic usage
 * <FaqHeader />
 *
 * @returns {React.ReactElement} A header element containing:
 * - "FAQs" text as the section heading
 *
 * @styles {module} faqStyles - CSS Module classes:
 * - `.headerFaqs` - Main header styling (font size, weight, spacing, etc.)
 *
 * @accessibility
 * - Semantic header element
 * - Clear, concise heading text
 * - Proper heading hierarchy (should be used within a section with appropriate heading level)
 *
 * @performance
 * - Extremely lightweight component
 * - No state or side effects
 * - Minimal DOM footprint
 */

const FaqHeader = () => {
  //   const [searchQuery, setSearchQuery] = React.useState<string>("");
  return <header className={faqStyles.headerFaqs}>FAQs</header>;
};

export default FaqHeader;
