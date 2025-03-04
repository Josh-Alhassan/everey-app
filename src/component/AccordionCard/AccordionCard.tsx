import React from "react";
import Image, { StaticImageData } from "next/image";
import AccordionUnit from "@/utils/AccordionUnit/AccordionUnit";
import styles from "./AccordionCard.module.css";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionCardProps {
  header: {
    imageSrc: string | StaticImageData;
    imageAlt: string;
    title: string;
  };
  accordionItems: AccordionItem[];
}

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
