import React from "react";
import StatementCard from "./StatementCard";
import visionImg from "../../../public/visionImg.png";
import missionImg from "../../../public/missionImg.png";
import styles from "./Statement.module.css";

/**
 * Statement Component
 *
 * @component
 * @description
 * A section that displays the organization's vision and mission statements
 * using alternating layout StatementCards. Designed to clearly communicate
 * core organizational principles with supporting visuals.
 *
 * @example
 * // Basic usage
 * <Statement />
 *
 * @structure
 * - Contains two StatementCard components:
 *   1. Vision statement (reverse layout)
 *   2. Mission statement (standard layout)
 *
 * @content
 * - Vision statement with:
 *   - Title: "Our Vision"
 *   - Description of long-term aspirations
 *   - Supporting image (visionImg)
 * - Mission statement with:
 *   - Title: "Our Mission"
 *   - Description of purpose and approach
 *   - Supporting image (missionImg)
 *
 * @styles {module} styles - CSS Module classes:
 * - `.container` - Main section container
 *
 * @accessibility
 * - Semantic section element
 * - ARIA-labeledby for screen readers
 * - Image alt text for both cards
 * - Proper heading hierarchy
 * - Sufficient color contrast
 *
 * @performance
 * - Optimized image loading via next/image
 * - Priority loading for above-the-fold images
 * - Efficient component composition
 *
 * @dependencies
 * - StatementCard component for content display
 * - visionImg and missionImg static imports
 */

const Statement: React.FC = () => {
  return (
    <section className={styles.container} aria-labelledby="statement-heading">
      {/* <h2 id="statement-heading" className={styles.sectionTitle}>
        Our Vision and Mission
      </h2> */}

      <StatementCard
        title="Our Vision"
        description="To become the leading platform that transforms academic research in Africa through collaboration, data-driven insights, and sustainable funding."
        imageSrc={visionImg}
        imageAlt="Vision Photo"
        reverse={true} // Reverse layout for the second card
      />

      <StatementCard
        title="Our Mission"
        description="To unite African academic institutions, foster cross-institution collaboration, and empower researchers by providing essential tools, resources, and funding to drive impactful research and innovation."
        imageSrc={missionImg}
        imageAlt="Mission Photo"
        reverse
      />
    </section>
  );
};

export default Statement;
