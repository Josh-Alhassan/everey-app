import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Statement.module.css";

/**
 * StatementCard Component
 *
 * @component
 * @description
 * A flexible content card that displays a statement with supporting visual content.
 * Features optional reverse layout for alternating content presentation.
 *
 * @example
 * // Basic usage (default layout)
 * <StatementCard
 *   title="Our Mission"
 *   description="We empower researchers across Africa..."
 *   imageSrc={missionImage}
 *   imageAlt="Team collaborating on research"
 * />
 *
 * @example
 * // Reversed layout
 * <StatementCard
 *   title="Our Vision"
 *   description="A future where African research leads..."
 *   imageSrc={visionImage}
 *   imageAlt="African researchers in lab"
 *   reverse
 * />
 *
 * @param {StatementCardProps} props - Component properties
 * @param {string} props.title - Statement title/heading
 * @param {string} props.description - Detailed statement content
 * @param {StaticImageData} props.imageSrc - Supporting image (Next.js static import)
 * @param {string} props.imageAlt - Accessible alt text for image
 * @param {boolean} [props.reverse=false] - Toggles content/image layout order
 *
 * @returns {React.ReactElement} A flexible content card with:
 * - Text content (title + description)
 * - Supporting image
 * - Optional reversed layout
 *
 * @interface StatementCardProps
 * @property {string} title - Content heading
 * @property {string} description - Content paragraph
 * @property {StaticImageData} imageSrc - Image source
 * @property {string} imageAlt - Image alt text
 * @property {boolean} [reverse] - Layout direction flag
 *
 * @styles {module} styles - CSS Module classes:
 * - `.statementContainer` - Main container
 * - `.reverse` - Reversed layout modifier
 * - `.article` - Text content container
 * - `.title` - Heading styling
 * - `.description` - Paragraph styling
 * - `.statement` - Image figure container
 * - `.statementImg` - Image styling
 *
 * @accessibility
 * - Semantic article and figure elements
 * - Required alt text for images
 * - Proper heading hierarchy
 * - Responsive layout
 * - Keyboard navigable when interactive
 *
 * @performance
 * - Optimized image loading via next/image
 * - Priority loading for above-the-fold content
 * - Efficient CSS layout
 *
 * @dependencies
 * - next/image for optimized images
 * - Static image imports for type safety
 */

interface StatementCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData; // Type for Next.js static images
  imageAlt: string;
  reverse?: boolean; // Optional prop to reverse the layout
}

const StatementCard: React.FC<StatementCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    <div
      className={`${styles.statementContainer} ${
        reverse ? styles.reverse : ""
      }`}
    >
      <article className={styles.article}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </article>

      <figure className={styles.statement}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className={styles.statementImg}
          priority // Prioritize loading for above-the-fold images
        />
      </figure>
    </div>
  );
};

export default StatementCard;
