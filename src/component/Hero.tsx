import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import heroImage from "../../public/heroImage.png";

// Defined TypeScript interfaces for props
interface Metric {
  value: string;
  label: string;
}

const Hero: React.FC = () => {
  // Metrics data (can be fetched from an API or passed as props)
  const metrics: Metric[] = [
    { value: "2.5M+", label: "Active Users" },
    { value: "8.4M+", label: "Articles" },
  ];

  return (
    <section className={styles.heroSection}>
      {/* Text Content */}
      <div className={styles.heroDescribe}>
        <h1 className={styles.heroTitle}>Advance Your Research with Everey</h1>
        <p className={styles.heroText}>
          Everey is Africa's leading platform for academic collaboration,
          data-driven insights, and sustainable research funding. We connect
          researchers, institutions, and organizations to accelerate innovation.
        </p>

        {/* Call-to-Action Button */}
        <a href="#" className={styles.heroSignUp}>
          Sign Up
        </a>

        {/* Metrics Section */}
        <div className={styles.heroMetrics}>
          {metrics.map((metric, index) => (
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
            src={heroImage}
            alt="Black School Teenage Boy"
            className={styles.heroImg}
            priority
          />
          <figcaption className={styles.heroImgCaption}>
            Trusted by over 10 Thousand Institutions
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
