import React from "react";
import styles from "./Footer.module.css";

/**
 * Subscribe Component
 *
 * @component
 * @description
 * A newsletter subscription section typically used in footers or marketing sections.
 * Includes a header, descriptive text, email input field, and subscribe button.
 *
 * @example
 * // Basic usage
 * <Subscribe
 *   header="Join Our Community"
 *   text="Stay updated with our latest news"
 * />
 *
 * @param {SubscribeProps} props - Component properties
 * @param {string} props.header - Heading text (1-5 words recommended)
 * @param {string} props.text - Supporting text (1 short sentence)
 *
 * @returns {React.ReactElement} A subscription section containing:
 * - Header with title and description
 * - Email input field
 * - Subscribe button
 *
 * @interface SubscribeProps
 * @property {string} header - Section heading text
 * @property {string} text - Supporting description text
 *
 * @styles {module} styles - CSS Module classes:
 * - `.footerSubscribe` - Main container
 * - `.footerSubscribeHeader` - Heading text
 * - `.footerSubscribeText` - Description text
 * - `.footerSubscribeInputField` - Input and button container
 * - `.subscribeInput` - Email input field
 * - `.subscribeButton` - Subscription button
 *
 * @accessibility
 * - Semantic header element
 * - Proper form labeling needed (see improvements)
 * - Sufficient color contrast
 * - Keyboard navigable
 * - Screen reader friendly
 *
 * @functionality
 * - Email input validation needed (see improvements)
 * - Submit handler to be implemented
 * - Loading states not included
 *
 * @improvements
 * - Add form submission handling
 * - Implement email validation
 * - Add ARIA labels
 * - Include loading state
 * - Add success/error messages
 */

interface SubscribeProps {
  header: string;
  text: string;
}

const Subscribe: React.FC<SubscribeProps> = ({ header, text }) => {
  return (
    <header className={styles.footerSubscribe}>
      <div style={{ marginBottom: "15px" }}>
        <h2 className={styles.footerSubscribeHeader}>{header}</h2>
        <p className={styles.footerSubscribeText}>{text}</p>
      </div>

      <div className={styles.footerSubscribeInputField}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.subscribeInput}
        />
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>
    </header>
  );
};

export default Subscribe;
