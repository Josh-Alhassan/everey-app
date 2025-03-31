import Image, { StaticImageData } from "next/image";
import styles from "./ChooseUs.module.css";

/**
 * ReasonCard Component
 *
 * @component
 * @description
 * A feature/benefit card component that visually highlights reasons to choose a service.
 * Displays an icon, title, and description, with optional highlighting for special cards.
 * Designed for use in marketing sections like the `ChooseUs` component.
 *
 * @example
 * // Basic usage
 * <ReasonCard
 *   id={1}
 *   icon={qualityIcon}
 *   alt="Quality assurance icon"
 *   title="Premium Quality"
 *   description="Our rigorous standards ensure top-notch results"
 * />
 *
 * @example
 * // Highlighted card (first item)
 * <ReasonCard
 *   id={1} // Will automatically apply highlight styling
 *   {...otherProps}
 * />
 *
 * @param {ReasonCard} props - Component properties
 * @param {number} props.id - Unique identifier (position-based)
 * @param {StaticImageData} props.icon - Image source (imported static image)
 * @param {string} props.alt - Accessible alt text for the icon
 * @param {string} props.title - Benefit title (1-3 words recommended)
 * @param {string} props.description - Benefit description (1 sentence)
 *
 * @returns {React.ReactElement} A card containing:
 * - Optimized icon image
 * - Benefit title (heading)
 * - Benefit description
 * - Optional highlight styling for first card
 *
 * @interface ReasonCard
 * @property {number} id - Unique identifier (used for highlighting)
 * @property {StaticImageData} icon - Next.js static image import
 * @property {string} alt - Image alt text
 * @property {string} title - Card heading
 * @property {string} description - Supporting text
 *
 * @styles {module} styles - CSS Module classes:
 * - `.reasonCard` - Base card container
 * - `.highlightedCard` - Special styling for first card
 * - `.reasonIcon` - Icon image styling
 * - `.reasonTitle` - Title text styling (h3)
 * - `.reasonText` - Description text styling
 *
 * @design
 * - Consistent dimensions (78×78px icons)
 * - Highlighted first card for visual hierarchy
 * - Responsive typography and spacing
 * - Accessible color contrast
 *
 * @accessibility
 * - Semantic HTML structure
 * - Required alt text for icons
 * - Proper heading hierarchy
 * - Keyboard-navigable in parent grid
 * - Screen reader friendly content
 *
 * @performance
 * - Optimized image loading via next/image
 * - Fixed dimensions prevent layout shifts
 * - Efficient CSS with minimal reflows
 */

// Define TypeScript interface for reason cards
interface ReasonCard {
  id: number;
  icon: StaticImageData; // Type for Next.js static images
  alt: string;
  title: string;
  description: string;
}

const imgWidth = 78;
const imgHeight = 78;

// ReasonCard Component (to avoid repetition)
const ReasonCard: React.FC<ReasonCard> = ({
  id,
  icon,
  alt,
  title,
  description,
}) => (
  <div
    className={`${styles.reasonCard} ${id === 1 ? styles.highlightedCard : ""}`}
  >
    <Image
      src={icon}
      alt={alt}
      width={imgWidth}
      height={imgHeight}
      className={styles.reasonIcon}
    />
    <h3 className={styles.reasonTitle}>{title}</h3>
    <p className={styles.reasonText}>{description}</p>
  </div>
);

export default ReasonCard;
