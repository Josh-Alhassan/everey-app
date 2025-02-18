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
      <Image
        src={card.image}
        alt={card.alt}
        className={styles.leaderboardImg}
      />
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
