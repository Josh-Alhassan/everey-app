import React from "react";

import stylesContact from "./ContactHeader.module.css";
import SecondaryHeader from "@/utils/SecondaryHeader/SecondaryHeader";

/**
 * ContactHeader Component
 *
 * @component
 * @description
 * The header section for the Contact page featuring:
 * - A title ("Contact Us")
 * - A descriptive subtitle
 * - Consistent styling with the design system
 *
 * @example
 * // Basic usage
 * <ContactHeader />
 *
 * @returns {React.ReactElement} A header section containing:
 * - SecondaryHeader component with:
 *   - Title: "Contact Us"
 *   - Description: "Any question or remarks? Just write us a message!"
 *
 * @styles {module} stylesContact - CSS Module classes:
 * - `.container` - Main header container
 * - `.header` - Styles passed to SecondaryHeader component
 *
 * @dependencies
 * - SecondaryHeader component for consistent header styling
 *
 * @accessibility
 * - Semantic header element
 * - Proper heading hierarchy (handled by SecondaryHeader)
 * - Screen reader friendly text
 *
 * @design
 * - Maintains consistent header styling across the application
 * - Responsive typography
 * - Proper spacing and alignment
 *
 * @performance
 * - Lightweight component
 * - No image dependencies
 * - Efficient rendering
 *
 */

const ContactHeader = () => {
  return (
    <header className={stylesContact.container}>
      <SecondaryHeader
        title="Contact Us"
        description="Any question or remarks? Just write us a message!"
        className={stylesContact.header}
      />
    </header>
  );
};

export default ContactHeader;
