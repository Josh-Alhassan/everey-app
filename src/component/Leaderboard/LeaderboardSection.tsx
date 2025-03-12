import React from "react";
import styles from "./LeaderboardSection.module.css";
import LeaderboardCard from "./LeaderboardCard";
import { leaderboardData } from "@/utils/constants";

const LeaderboardSection: React.FC = () => {
  return (
    <section className={styles.leaderboardSection}>
      <h2 className={styles.leaderboardHeading}>Our Leaderboard</h2>
      <p className={styles.leaderboardText}>
        Our leaderboard is more than just a ranking; it&apos;s a celebration of
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
