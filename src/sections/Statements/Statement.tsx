import React from "react";
import StatementCard from "./StatementCard";
import visionImg from "../../../public/visionImg.png";
import missionImg from "../../../public/missionImg.png";
import styles from "./Statement.module.css";

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
