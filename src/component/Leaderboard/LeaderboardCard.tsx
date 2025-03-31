/**
 * LeaderboardCard Component
 *
 * @component
 * @description
 * Displays an individual leaderboard entry card showing:
 * - Profile image
 * - Name
 * - Affiliation/Institution
 * - Rating visualization (5 vector icons)
 *
 * Designed for use in leaderboard or ranking sections to highlight top performers.
 *
 * @example
 * // Basic usage
 * <LeaderboardCard
 *   card={{
 *     image: profileImage,
 *     alt: "Dr. Jane Doe profile picture",
 *     name: "Dr. Jane Doe",
 *     affiliation: "University of Lagos"
 *   }}
 * />
 *
 * @param {LeaderboardCardProps} props - Component properties
 * @param {Object} props.card - Card content configuration
 * @param {StaticImageData} props.card.image - Profile image source
 * @param {string} props.card.alt - Alt text for profile image
 * @param {string} props.card.name - Person's name (Title + Name)
 * @param {string} props.card.affiliation - Institution/organization
 *
 * @returns {React.ReactElement} A leaderboard card containing:
 * - Profile image
 * - Name and affiliation
 * - Five rating indicators
 *
 * @interface LeaderboardCardProps
 * @property {Object} card - Card content
 * @property {StaticImageData} card.image - Profile image
 * @property {string} card.alt - Image alt text
 * @property {string} card.name - Display name
 * @property {string} card.affiliation - Organization name
 *
 * @styles {module} styles - CSS Module classes:
 * - `.leaderboardCard` - Main container
 * - `.leaderboardImgContainer` - Image wrapper
 * - `.leaderboardImg` - Profile image
 * - `.leaderboardCardBody` - Text content container
 * - `.leaderboardTitle` - Name styling
 * - `.leaderboardLabel` - Affiliation text
 * - `.leaderboardVector` - Rating container
 *
 * @accessibility
 * - Image has descriptive alt text
 * - Semantic heading structure
 * - Rating indicators need ARIA labels (see improvements)
 * - Sufficient color contrast
 *
 * @performance
 * - Optimized image loading via next/image
 * - Fixed dimensions for vector icons
 * - Efficient CSS layout
 *
 * @improvements
 * - Add ARIA labels for rating indicators
 * - Make rating dynamic (currently static 5)
 * - Add hover/focus states
 * - Support for missing images
 */

import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./LeaderboardSection.module.css";

interface LeaderboardCardProps {
  card: {
    image: StaticImageData;
    alt: string;
    name: string;
    affiliation: string;
  };
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ card }) => {
  return (
    <div className={styles.leaderboardCard}>
      <div className={styles.leaderboardImgContainer}>
        <Image
          src={card.image}
          alt={card.alt}
          className={styles.leaderboardImg}
        />
      </div>
      <div className={styles.leaderboardCardBody}>
        <h4 className={styles.leaderboardTitle}>{card.name}</h4>
        <p className={styles.leaderboardLabel}>{card.affiliation}</p>
        <div className={styles.leaderboardVector}>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src="/vector.png"
              alt="Vector"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;
