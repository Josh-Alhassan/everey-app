import React from "react";
import styles from "./LeaderboardSection.module.css";
import LeaderboardCard from "./LeaderboardCard";
import prof1 from "../../public/prof-1.jpg";
import prof2 from "../../public/prof-2.jpg";
import prof3 from "../../public/prof-3.jpg";
import { StaticImageData } from "next/image";
// import LeaderboardCard from "./LeaderboardCard";

// Define the leaderboard data type
interface LeaderboardCardData {
  id: number;
  image: StaticImageData;
  alt: string;
  name: string;
  affiliation: string;
}

// Define the leaderboard data
const leaderboardData: LeaderboardCardData[] = [
  {
    id: 1,
    image: prof1,
    alt: "First professor",
    name: "Prof. Alan Chomsky",
    affiliation:
      "Michigan University - Dept. of Natural Science & Climate Change",
  },
  {
    id: 2,
    image: prof2,
    alt: "Second professor",
    name: "Prof. John Smith",
    affiliation: "Stanford University - Dept. of Computer Science",
  },
  {
    id: 3,
    image: prof3,
    alt: "Third professor",
    name: "Prof. Jane Doe",
    affiliation: "Harvard University - Dept. of Medicine",
  },
];

const LeaderboardSection: React.FC = () => {
  return (
    <section className={styles.leaderboardSection}>
      <h2 className={styles.leaderboardHeading}>Our Leaderboard</h2>
      <p className={styles.leaderboardText}>
        Our leaderboard is more than just a ranking; it's a celebration of
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
