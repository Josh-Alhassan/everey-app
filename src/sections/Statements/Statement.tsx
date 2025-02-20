import React from "react";
import statementStyle from "./Statement.module.css";
import Image from "next/image";

import visionImg from "../../../public/visionImg.png";
import missionImg from "../../../public/missionImg.png";

const Statement: React.FC = () => {
  return (
    <section className={statementStyle.container}>
      <div className={statementStyle.statementContainer}>
        <article
          className={`${statementStyle.article} ${statementStyle.article1}`}
        >
          <h3 className={statementStyle.title}>Our Vision</h3>
          <p className={statementStyle.description}>
            To become the leading platform that transforms academic research in
            Africa through collaboration, data-driven insights, and sustainable
            funding.
          </p>
        </article>

        {/* Image */}
        <figure
          className={`${statementStyle.statement} ${statementStyle.statement1}`}
        >
          <Image
            src={visionImg}
            alt="Vision Photo"
            className={statementStyle.statementImg}
          />
        </figure>
      </div>
      {/* Article */}

      <div className={statementStyle.statementContainer}>
        <article className={statementStyle.article}>
          <h3 className={statementStyle.title}>Our Mission</h3>
          <p className={statementStyle.description}>
            To unite African academic institutions, foster cross-institution
            collaboration, and empower researchers by providing essential tools,
            resources, and funding to drive impactful research and innovation.
          </p>
        </article>

        {/* Image */}
        <figure className={statementStyle.statement}>
          <Image
            src={missionImg}
            alt="Mission Photo"
            className={statementStyle.statementImg}
          />
        </figure>
      </div>
    </section>
  );
};

export default Statement;
