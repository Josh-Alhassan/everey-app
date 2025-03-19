import React from "react";
import AccordionCard from "@/component/AccordionCard/AccordionCard";
import peopleSvg from "../../../public/People.png";

const FEaturesAndServices = () => {
  const header = {
    imageSrc: peopleSvg,
    imageAlt: "Features and Services",
    title: "Features and Services",
  };

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
