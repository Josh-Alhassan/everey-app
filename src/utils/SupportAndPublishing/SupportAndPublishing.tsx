import AccordionCard from "@/component/AccordionCard/AccordionCard";
import React from "react";
import payment from "../../../public/Cash.png";

import { accordionItems } from "../constants";

/**
 * A React component that renders an accordion-based support and publishing section.
 *
 * @component
 * @example
 * // Usage in a parent component:
 * <SupportAndPublishing />
 *
 * @returns {JSX.Element} A div containing an `AccordionCard` with predefined header and items.
 */

const SupportAndPublishing = () => {
  const header = {
    imageSrc: payment,
    imageAlt: "Cash",
    title: "Support and Publishing",
  };

  /**
   * Header configuration for the accordion card.
   * @type {Object}
   * @property {string} imageSrc - Path to the header image (e.g., imported `payment` asset).
   * @property {string} imageAlt - Alt text for the header image.
   * @property {string} title - Title displayed in the header.
   */

  return (
    <div>
      <AccordionCard header={header} accordionItems={accordionItems} />
    </div>
  );
};

export default SupportAndPublishing;
