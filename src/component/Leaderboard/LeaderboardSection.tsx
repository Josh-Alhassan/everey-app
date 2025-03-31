/**
 * LeaderboardSection Component
 *
 * @component
 * @description
 * A section that displays a leaderboard of top performers (researchers/institutions)
 * featuring a heading, descriptive text, and a grid of LeaderboardCards.
 *
 * @example
 * // Basic usage
 * <LeaderboardSection />
 *
 * @structure
 * 1. Section Header:
 *    - Main heading
 *    - Descriptive paragraph
 * 2. Cards Grid:
 *    - Multiple LeaderboardCard components
 *    - Responsive grid layout
 *
 * @data
 * - Uses `leaderboardData` from constants
 * - Each card requires:
 *   - id: Unique identifier
 *   - image: Profile/institution image
 *   - alt: Image alt text
 *   - name: Display name
 *   - affiliation: Organization name
 *
 * @styles {module} styles - CSS Module classes:
 * - `.leaderboardSection` - Main container
 * - `.leaderboardHeading` - Section title
 * - `.leaderboardText` - Description text
 * - `.leaderboardCards` - Cards grid container
 *
 * @accessibility
 * - Semantic section element
 * - Proper heading hierarchy
 * - Screen reader friendly content
 * - Keyboard-navigable cards
 * - Sufficient color contrast
 *
 * @performance
 * - Efficient card rendering
 * - Responsive image handling in cards
 * - Optimized layout rendering
 *
 * @dependencies
 * - LeaderboardCard component
 * - leaderboardData constant
 *
 */

import React from "react";
import styles from "./LeaderboardSection.module.css";
import LeaderboardCard from "./LeaderboardCard";
import { leaderboardData } from "@/utils/constants";

const LeaderboardSection: React.FC = () => {
  return (
    <section className={styles.leaderboardSection}>
      <h2 className={styles.leaderboardHeading}>Our Leaderboard</h2>
      <p className={styles.leaderboardText}>
        Our leaderboard is more than just a ranking; it&apos;s a celebration of
        brilliance. Meet the minds behind groundbreaking research, the
        institutions nurturing innovation.
      </p>
      <div className={styles.leaderboardCards}>
        {leaderboardData.map((card) => (
          <LeaderboardCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default LeaderboardSection;
