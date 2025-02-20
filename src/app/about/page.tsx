import React from "react";
import aboutStyles from "./About.module.css";

const AboutPage: React.FC = () => {
  return (
    <header className={aboutStyles.aboutHeader} role="banner">
      <h1 className={aboutStyles.aboutTitle}>
        Welcome to <span className={aboutStyles.aboutTitleSpan}>Everey</span>
      </h1>

      <p className={aboutStyles.aboutDescription}>
        Everey AAP empowers African researchers by streamlining research
        publication and fostering a data-driven, collaborative community. We
        connect lecturers, students, and researchers to amplify their
        contributions and drive innovation.
      </p>
    </header>
  );
};

export default AboutPage;
