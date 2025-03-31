import React from "react";
import AccordionCard from "@/component/AccordionCard/AccordionCard";
import peopleSvg from "../../../public/People.png";

/**
 * FeaturesAndServices Component - Displays the features and services offered by Everey AAP in an accordion format.
 *
 * This component renders an AccordionCard with a header section and multiple expandable content items
 * that detail the platform's capabilities including collaboration tools, publishing support,
 * data insights, and global visibility features.
 *
 * @module FeaturesAndServices
 * @returns {React.ReactElement} The rendered component with features and services information
 *
 * @example
 * // Basic usage
 * import FeaturesAndServices from '@/components/FeaturesAndServices';
 *
 * function App() {
 *   return <FeaturesAndServices />;
 * }
 */

const FEaturesAndServices = () => {
  /**
   * Header configuration for the AccordionCard
   * @type {Object}
   * @property {string} imageSrc - Path to the header image
   * @property {string} imageAlt - Alternative text for the header image
   * @property {string} title - Title displayed in the header
   */

  const header = {
    imageSrc: peopleSvg,
    imageAlt: "Features and Services",
    title: "Features and Services",
  };

  /**
   * Array of feature/service items displayed in the accordion
   * @type {Array<{
   *   title: string,
   *   content: string
   * }>}
   *
   * @property {string} title - The feature/service question/title
   * @property {string} content - Description of the feature/service
   */

  const accordionItems = [
    {
      title: "What can Everey AAP do? ",
      content:
        "Collaborate effectively, publish with confidence, and gain valuable insights into your research.",
    },
    {
      title: "How does collaboration work? ",
      content:
        "Connect with like-minded researchers and co-create groundbreaking projects.",
    },
    {
      title: "How does Everey AAP support publishing?",
      content:
        "Get expert guidance and support throughout the publication process.",
    },
    {
      title: "What kind of data insights can I get? ",
      content: "Access in-depth analytics to inform your research strategy.",
    },
    {
      title: "How does Everey AAP help with global visibility? ",
      content:
        "Increase your research's reach and influence on a global scale.",
    },
  ];

  return (
    <div>
      <AccordionCard header={header} accordionItems={accordionItems} />
    </div>
  );
};

export default FEaturesAndServices;
