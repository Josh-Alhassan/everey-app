"use client";

import React from "react";
import styles from "./TopUniversities.module.css";
import SecondaryHeader from "@/utils/SecondaryHeader/SecondaryHeader";
import Image, { StaticImageData } from "next/image";

import university1 from "../../../public/university1.png";
import university2 from "../../../public/university2.png";
import university3 from "../../../public/university3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * TopUniversitiesSection Component
 *
 * @component
 * @description
 * A responsive carousel section showcasing top university partners featuring:
 * - Section header with title
 * - Interactive carousel of university logos
 * - Responsive design with breakpoint configurations
 * - Optimized image loading
 *
 * @example
 * // Basic usage
 * <TopUniversitiesSection />
 *
 * @structure
 * 1. Section Header:
 *    - Uses SecondaryHeader component
 *    - Displays "Top Universities" title
 * 2. Carousel:
 *    - Displays university logos and names
 *    - Responsive slide configuration
 *
 * @interface University
 * @property {number} id - Unique identifier
 * @property {StaticImageData} image - University logo image
 * @property {string} alt - Alt text for logo
 * @property {string} name - University name
 *
 * @data universities
 * @description Array of university objects containing:
 * - Lead City University
 * - Afe Babalola University
 * - Covenant University
 *
 * @carouselSettings
 * @description Configuration for react-slick carousel:
 * - Responsive breakpoints (desktop, tablet, mobile)
 * - Infinite looping
 * - Custom slide counts per viewport
 * - Transition speed: 500ms
 *
 * @styles {module} styles - CSS Module classes:
 * - `.topUniversitiesSection` - Main container
 * - `.topUniversitiesContainer` - Carousel wrapper
 * - `.topUniversities` - Individual slide container
 * - `.topUniversityImg` - University logo image
 * - `.topUniversitiesLabel` - University name text
 *
 * @accessibility
 * - Semantic section element
 * - Alt text for all images
 * - Keyboard-navigable carousel
 * - Screen reader friendly content
 * - Proper color contrast
 *
 * @performance
 * - Optimized image loading via next/image
 * - Efficient carousel rendering
 * - Responsive image sizing
 * - Client-side only interactivity
 *
 * @dependencies
 * - react-slick for carousel functionality
 * - slick-carousel CSS styles
 * - SecondaryHeader component
 * - next/image for optimized images
 *
 */

// Define TypeScript interface for university data
interface University {
  id: number;
  image: StaticImageData; // Type for Next.js static images
  alt: string;
  name: string;
}

// University data
const universities: University[] = [
  {
    id: 1,
    image: university1,
    alt: "Lead City University",
    name: "Lead City University",
  },
  {
    id: 2,
    image: university2,
    alt: "Afe Babalola University",
    name: "Afe Babalola University",
  },
  {
    id: 3,
    image: university3,
    alt: "Covenant University",
    name: "Covenant University",
  },
];

// Carousel settings
const carouselSettings = {
  dots: false, // Show dots for navigation
  infinite: true, // Infinite loop
  speed: 500, // Transition speed
  slidesToShow: 3, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll
  responsive: [
    {
      breakpoint: 1024, // Laptop breakpoint
      settings: {
        slidesToShow: 3, // Show 3 slides on tablets
        dots: false,
      },
    },
    {
      breakpoint: 768, // Tablet breakpoint
      settings: {
        slidesToShow: 2, // Show 2 slides on tablets
      },
    },
    {
      breakpoint: 480, // Mobile breakpoint
      settings: {
        slidesToShow: 1, // Show 1 slide on mobile
      },
    },
  ],
};

const TopUniversitiesSection: React.FC = () => {
  return (
    <section className={styles.topUniversitiesSection}>
      <SecondaryHeader title="Top Universities" />

      <div className={styles.topUniversitiesContainer}>
        <Slider {...carouselSettings}>
          {universities.map((university) => (
            <div key={university.id} className={styles.topUniversities}>
              <Image
                src={university.image}
                alt={university.alt}
                className={styles.topUniversityImg}
              />
              <span className={styles.topUniversitiesLabel}>
                {university.name}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopUniversitiesSection;
