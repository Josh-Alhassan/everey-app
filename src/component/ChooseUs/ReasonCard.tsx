import Image, { StaticImageData } from "next/image";
import styles from "./ChooseUs.module.css";

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
