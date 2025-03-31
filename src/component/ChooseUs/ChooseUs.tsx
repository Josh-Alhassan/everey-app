/**
 * ChooseUs Component
 *
 * @component
 * @description
 * A marketing section highlighting reasons to choose the platform/service.
 * Features a gradient background, title/CTA section, and a grid of benefit cards.
 *
 * @example
 * // Basic usage
 * <ChooseUs />
 *
 * @returns {React.ReactElement} A section containing:
 * - Gradient background container
 * - Title section with decorative arrow and CTA button
 * - Grid layout of reason cards (from constants)
 * - Empty spacer for responsive layout
 *
 * @layout
 * - Uses CSS Grid for responsive layout
 * - Background gradient image (optimized via Next.js)
 * - 4-column grid on desktop, 2-column on tablet, 1-column on mobile
 *
 * @styles {module} styles - CSS Module classes:
 * - `.chooseUsContainer` - Main container with background
 * - `.chooseUsReason` - Title/CTA container
 * - `.chooseUsArr` - Arrow icon container
 * - `.chooseUsTitle` - Main heading
 * - `.chooseUsCta` - Call-to-action button
 * - `.emptyContent` - Layout spacer (responsive behavior)
 *
 * @data
 * - Uses `reasonCards` from constants (array of card objects)
 * - Each card should contain:
 *   - icon: React component
 *   - title: string
 *   - description: string
 *
 * @accessibility
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - Focusable interactive elements
 * - Sufficient color contrast
 * - Screen reader friendly text
 *
 * @performance
 * - Optimized background image loading
 * - Static reason cards (could be made dynamic)
 * - Efficient CSS with minimal reflows
 *
 * @dependencies
 * - ArrowIcon component (decorative arrow)
 * - ReasonCard component (individual benefit cards)
 * - reasonCards constant (data source)
 */

import React from "react";
import styles from "./ChooseUs.module.css";

// Import icons
import background from "../../../public/gradient-container.png";
import { ArrowIcon, ReasonCard } from "./index";

// Import constants
import { reasonCards } from "../../utils/constants";

const ChooseUs: React.FC = () => {
  return (
    <section
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
      className={styles.chooseUsContainer}
    >
      {/* 1st Grid: Title and CTA */}
      <div className={styles.chooseUsReason}>
        <div className={styles.chooseUsArr}>
          <ArrowIcon />
        </div>
        <h2 className={styles.chooseUsTitle}>
          Reasons why you should choose us!
        </h2>
        <a href="#" className={styles.chooseUsCta}>
          Start Your Research ↗️
        </a>
      </div>

      {/* 2nd Grid: Empty (for layout purposes) */}
      <div className={styles.emptyContent}></div>

      {/* 3rd-6th Grid: Reason Cards */}
      {reasonCards.map((card, index) => (
        <ReasonCard key={index} {...card} />
      ))}
    </section>
  );
};

export default ChooseUs;
