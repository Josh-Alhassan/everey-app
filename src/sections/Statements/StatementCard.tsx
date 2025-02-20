import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Statement.module.css";

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
