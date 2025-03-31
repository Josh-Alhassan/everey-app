/**
 * Hero Component
 *
 * @component
 * @description
 * The main hero section for the Everey platform, featuring:
 * - Promotional headline and description
 * - Call-to-action button
 * - Key metrics display
 * - Hero image with caption
 * - Decorative "out of flow" elements
 *
 * @example
 * // Basic usage
 * <Hero />
 *
 * @structure
 * 1. Text Content (left):
 *    - Main title
 *    - Description paragraph
 *    - CTA button
 *    - Metrics blocks
 * 2. Visual Content (right):
 *    - Hero image with caption
 *    - Decorative text elements
 *
 * @interface HeroContent
 * @property {string} title - Main headline (1 line recommended)
 * @property {string} description - Supporting text (2-3 sentences)
 * @property {Object} cta - Call-to-action configuration
 * @property {string} cta.text - Button text
 * @property {string} cta.link - Destination URL
 * @property {Metric[]} metrics - Array of key metrics
 * @property {Object} image - Hero image configuration
 * @property {StaticImageData} image.src - Image source
 * @property {string} image.alt - Alt text
 * @property {string} image.caption - Image caption
 * @property {Object} outOfFlow - Decorative text elements
 * @property {string} outOfFlow.research - Left decorative text
 * @property {string} outOfFlow.publications - Right decorative text
 *
 * @interface Metric
 * @property {string} value - Numeric value (e.g., "2.5M+")
 * @property {string} label - Metric description
 *
 * @styles {module} styles - CSS Module classes:
 * - `.heroSection` - Main container
 * - `.heroDescribe` - Text content container
 * - `.heroTitle` - Main headline
 * - `.heroText` - Description text
 * - `.heroSignUp` - CTA button
 * - `.heroMetrics` - Metrics container
 * - `.metricsBlock` - Individual metric block
 * - `.metricNumbers` - Metric value
 * - `.metricLabel` - Metric description
 * - `.heroImgContainer` - Image container
 * - `.heroImageDiv` - Image wrapper
 * - `.heroImg` - Hero image
 * - `.heroImgCaption` - Image caption
 * - `.outOfFlow` - Decorative elements container
 * - `.outOfFlowResearch` - Left decorative text
 * - `.outOfFlowPublication` - Right decorative text
 *
 * @accessibility
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - Image alt text and caption
 * - Keyboard-navigable CTA
 * - Sufficient color contrast
 *
 * @performance
 * - Priority loading for hero image
 * - Optimized image handling via next/image
 * - Efficient CSS layout
 *
 * @improvements
 * - Make content configurable via props
 * - Add hover/focus states for CTA
 * - Implement responsive typography
 * - Add loading state for image
 */

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
