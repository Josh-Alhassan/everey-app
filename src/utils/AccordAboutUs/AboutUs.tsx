import AccordionCard from "@/component/AccordionCard/AccordionCard";
import React from "react";
import peopleSvg from "../../../public/People.png";

const AboutUs = () => {
  const header = {
    imageSrc: peopleSvg,
    imageAlt: "People",
    title: "About Every App",
  };

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
