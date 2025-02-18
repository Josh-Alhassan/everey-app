import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import heroImage from "../../../public/heroImage.png";
import { StaticImageData } from "next/image";

// Defined TypeScript interfaces for content
interface Metric {
  value: string;
  label: string;
}

interface HeroContent {
  title: string;
  description: string;
  cta: {
    text: string;
    link: string;
  };
  metrics: Metric[];
  image: {
    src: StaticImageData;
    alt: string;
    caption: string;
  };
  outOfFlow: {
    research: string;
    publications: string;
  };
}

// Externalized content
const heroContent: HeroContent = {
  title: "Advance Your Research with Everey",
  description:
    "Everey is Africa's leading platform for academic collaboration, data-driven insights, and sustainable research funding. We connect researchers, institutions, and organizations to accelerate innovation.",
  cta: {
    text: "Sign Up",
    link: "#",
  },
  metrics: [
    { value: "2.5M+", label: "Active Users" },
    { value: "8.4M+", label: "Articles" },
  ],
  image: {
    src: heroImage,
    alt: "Black School Teenage Boy",
    caption: "Trusted by over 10 Thousand Institutions",
  },
  outOfFlow: {
    research: "Research Works",
    publications: "Publications",
  },
};

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Text Content */}
      <div className={styles.heroDescribe}>
        <h1 className={styles.heroTitle}>{heroContent.title}</h1>
        <p className={styles.heroText}>{heroContent.description}</p>

        {/* Call-to-Action Button */}
        <a href={heroContent.cta.link} className={styles.heroSignUp}>
          {heroContent.cta.text}
        </a>

        {/* Metrics Section */}
        <div className={styles.heroMetrics}>
          {heroContent.metrics.map((metric, index) => (
            <div key={index} className={styles.metricsBlock}>
              <h3 className={styles.metricNumbers}>{metric.value}</h3>
              <p className={styles.metricLabel}>{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className={styles.heroImgContainer}>
        <figure className={styles.heroImageDiv}>
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            className={styles.heroImg}
            priority
          />
          <figcaption className={styles.heroImgCaption}>
            {heroContent.image.caption}
          </figcaption>
        </figure>

        {/* Out of flow of page Elements */}
        <div className={styles.outOfFlow}>
          <div className={styles.outOfFlowResearch}>
            {heroContent.outOfFlow.research}
          </div>
          <div className={styles.outOfFlowPublication}>
            {heroContent.outOfFlow.publications}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
