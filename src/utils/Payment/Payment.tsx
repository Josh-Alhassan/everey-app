import AccordionCard from "@/component/AccordionCard/AccordionCard";
import React from "react";
import payment from "../../../public/Cash.png";

/**
 * Payment Component - Displays institutional payment information in an accordion format.
 *
 * This component renders an AccordionCard with a header section and multiple expandable items
 * that explain the benefits and partnership opportunities of Everey AAP for institutions.
 * It includes visual elements and detailed content about institutional collaboration.
 *
 * @module Payment
 * @returns {React.ReactElement} The rendered Payment component with institutional information
 *
 * @example
 * // Basic usage
 * import Payment from '@/components/Payment';
 *
 * function App() {
 *   return <Payment />;
 * }
 */

const Payment = () => {
  /**
   * Header configuration for the AccordionCard
   * @type {Object}
   * @property {string} imageSrc - Path to the cash/payment image
   * @property {string} imageAlt - Alt text for the header image
   * @property {string} title - Title displayed in the header ("For Institutions")
   */

  const header = {
    imageSrc: payment,
    imageAlt: "Cash",
    title: "For Institutions",
  };

  /**
   * Array of accordion items containing institutional information
   * @type {Array<{
   *   title: string,
   *   content: string
   * }>}
   *
   * @property {string} title - The question/benefit title
   * @property {string} content - Detailed explanation of the institutional benefit
   */

  const accordionItems = [
    {
      title: "Why use Everey AAP?",
      content:
        "Enhance your institution's research reputation and capabilities.",
    },
    {
      title: "How do I get started? ",
      content:
        "Partner with us to implement Everey AAP within your institution.",
    },
    {
      title: "Can you help us improve? ",
      content:
        "We offer tailored support to elevate your institution's research performance.",
    },
    {
      title: "Can we partner with you? ",
      content: "Build a strategic partnership to drive innovation and impact.",
    },
    {
      title: "How can we increase research collaboration?",
      content:
        "Foster a collaborative research culture within your institution.",
    },
  ];

  return (
    <div>
      <AccordionCard header={header} accordionItems={accordionItems} />
    </div>
  );
};

export default Payment;
