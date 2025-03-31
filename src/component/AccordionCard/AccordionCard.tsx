import React from "react";
import Image, { StaticImageData } from "next/image";
import AccordionUnit from "@/utils/AccordionUnit/AccordionUnit";
import styles from "./AccordionCard.module.css";

/**
 * Represents a single accordion item
 * @interface AccordionItem
 * @property {string} title - The clickable header text for the accordion item
 * @property {string} content - The expandable content for the accordion item
 */

interface AccordionItem {
  title: string;
  content: string;
}

/**
 * Props interface for the AccordionCard component
 * @interface AccordionCardProps
 * @property {Object} header - Configuration for the card header
 * @property {string | StaticImageData} header.imageSrc - Image source (URL or imported static image)
 * @property {string} header.imageAlt - Accessible alt text for the image
 * @property {string} header.title - Main heading for the card
 * @property {AccordionItem[]} accordionItems - Array of accordion items to display
 */

interface AccordionCardProps {
  header: {
    imageSrc: string | StaticImageData;
    imageAlt: string;
    title: string;
  };
  accordionItems: AccordionItem[];
}

/**
 * A card component featuring a header with image and title, plus an accordion content section.
 *
 * @component
 * @description
 * Reusable accordion card that displays:
 * - A visual header with icon/image and title
 * - Multiple collapsible content sections
 *
 * @example
 * // Basic usage
 * <AccordionCard
 *   header={{
 *     imageSrc: researchIcon,
 *     imageAlt: "Research icon",
 *     title: "Research Support"
 *   }}
 *   accordionItems={[
 *     { title: "How to apply", content: "Application process..." },
 *     { title: "Eligibility", content: "Requirements..." }
 *   ]}
 * />
 *
 * @param {AccordionCardProps} props - Component props
 * @param {Object} props.header - Header configuration
 * @param {string|StaticImageData} props.header.imageSrc - Image source
 * @param {string} props.header.imageAlt - Image alt text
 * @param {string} props.header.title - Card title
 * @param {AccordionItem[]} props.accordionItems - Array of accordion items
 *
 * @returns {React.ReactElement} A styled card containing:
 * - Header with image and title
 * - Expandable/collapsible content sections
 *
 * @styles {module} styles - CSS Module with these classes:
 * - `.accordionCard` - Main container
 * - `.cardHeader` - Header section
 * - `.peopleSvg` - Header image
 * - `.cardTitle` - Header text
 * - `.accordionContainer` - Accordion items wrapper
 *
 * @accessibility
 * - Uses semantic HTML structure
 * - Images include alt text
 * - Accordions are keyboard navigable
 * - Proper ARIA attributes for expandable sections
 * - Color contrast meets WCAG AA standards
 *
 * @dependencies
 * - next/image for optimized image loading
 * - AccordionUnit for individual accordion items
 */

const AccordionCard: React.FC<AccordionCardProps> = ({
  header,
  accordionItems,
}) => {
  return (
    <div className={styles.accordionCard}>
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <Image
          className={styles.peopleSvg}
          src={header.imageSrc}
          alt={header.imageAlt}
        />
        <h2 className={styles.cardTitle}>{header.title}</h2>
      </div>

      {/* Accordion Items */}
      <div className={styles.accordionContainer}>
        {accordionItems.map((item, index) => (
          <AccordionUnit
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionCard;
