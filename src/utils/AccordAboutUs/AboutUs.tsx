import AccordionCard from "@/component/AccordionCard/AccordionCard";
import React from "react";
import peopleSvg from "../../../public/People.png";

/**
 * AboutUs Component - Displays information about the Everey App platform in an accordion format.
 *
 * This component renders an AccordionCard with a header section containing an image and title,
 * followed by a series of expandable/collapsible accordion items that provide details about the platform.
 *
 * @module AboutUs
 * @returns {React.ReactElement} The rendered AboutUs component with AccordionCard
 *
 * @example
 * // Import and use the component
 * import AboutUs from './AboutUs';
 *
 * function App() {
 *   return <AboutUs />;
 * }
 */

const AboutUs = () => {
  /**
   * Header configuration object for the AccordionCard
   * @type {Object}
   * @property {string} imageSrc - Path to the header image
   * @property {string} imageAlt - Alt text for the header image
   * @property {string} title - Title text for the header section
   */

  const header = {
    imageSrc: peopleSvg,
    imageAlt: "People",
    title: "About Every App",
  };

  /**
   * Array of accordion items containing questions and answers about the platform
   * @type {Array<Object>}
   * @property {string} title - The question/title for the accordion item
   * @property {string} content - The answer/content for the accordion item
   */

  const accordionItems = [
    {
      title: "What is Everey App?",
      content:
        "Everey AAP is a comprehensive platform designed to empower African researchers to achieve their full potential.",
    },
    {
      title: "What do we do? ",
      content:
        "We offer a range of services and tools to support your research journey from start to finish.",
    },
    {
      title: "Who can use it?",
      content:
        "African researchers, educators, and institutions can benefit from our platform and resources.",
    },
    {
      title: "What problems do we solve?",
      content:
        "We address the challenges of limited access to resources, funding,  publishing opportunities, and collaboration opportunities for African researchers.",
    },
    {
      title: "Why use Everey App?",
      content:
        "Accelerate your research, expand your network, and increase your research's impact.",
    },
  ];

  return (
    <div>
      <AccordionCard header={header} accordionItems={accordionItems} />
    </div>
  );
};

export default AboutUs;
