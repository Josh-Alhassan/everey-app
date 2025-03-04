import AccordionCard from "@/component/AccordionCard/AccordionCard";
import React from "react";
import peopleSvg from "../../../public/People.png";

const AboutUs = () => {
  const header = {
    imageSrc: peopleSvg,
    imageAlt: "People",
    title: "About Us",
  };

  const accordionItems = [
    {
      title: "What is Everey App?",
      content:
        "Everey App is a comprehensive platform designed to empower African researchers to achieve their full potential.",
    },
    {
      title: "How does it work?",
      content:
        "Everey App connects researchers with resources, funding, and collaboration opportunities.",
    },
    {
      title: "Who can use it?",
      content:
        "Everey App is open to all African researchers, academics, and students.",
    },
    {
      title: "What problems do we solve?",
      content:
        "We address the challenges of limited access to resources, funding, and collaboration opportunities for African researchers.",
    },
    {
      title: "Why use Everey App?",
      content:
        "Everey App is open to all African researchers, academics, and students.",
    },
  ];

  return (
    <div>
      <AccordionCard header={header} accordionItems={accordionItems} />
    </div>
  );
};

export default AboutUs;
