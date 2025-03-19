import AccordionCard from "@/component/AccordionCard/AccordionCard";
import React from "react";
import payment from "../../../public/Cash.png";

const SupportAndPublishing = () => {
  const header = {
    imageSrc: payment,
    imageAlt: "Cash",
    title: "Support and Publishing",
  };

  const accordionItems = [
    {
      title: "How can students use Everey AAP? ",
      content:
        "Launch your research career with our student-focused resources.",
    },
    {
      title: "What resources are available for faculty?  ",
      content: "Access tools and support to excel in your research role.",
    },
    {
      title: "How can researchers access tools and databases?  ",
      content: "Find the resources you need to advance your research.",
    },
    {
      title: "How does the manuscript submission process work?  ",
      content: "Submit your manuscript with ease and confidence.",
    },
    {
      title: "How does the peer review process work?",
      content: "Benefit from expert feedback to strengthen your research.",
    },
  ];

  return (
    <div>
      <AccordionCard header={header} accordionItems={accordionItems} />
    </div>
  );
};

export default SupportAndPublishing;
