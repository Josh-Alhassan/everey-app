"use client";

import React from "react";
import styles from "./TopUniversities.module.css";
import SecondaryHeader from "@/utils/SecondaryHeader/SecondaryHeader";
import Image, { StaticImageData } from "next/image";

import university1 from "../../public/university1.png";
import university2 from "../../public/university2.png";
import university3 from "../../public/university3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    image: require("../../../public/university1.png"),
    alt: "Lead City University",
    name: "Lead City University",
  },
  {
    id: 2,
    image: require("../../../public/university2.png"),
    alt: "Afe Babalola University",
    name: "Afe Babalola University",
  },
  {
    id: 3,
    image: require("../../../public/university3.png"),
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
