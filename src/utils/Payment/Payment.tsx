import AccordionCard from "@/component/AccordionCard/AccordionCard";
import React from "react";
import payment from "../../../public/Cash.png";

const Payment = () => {
  const header = {
    imageSrc: payment,
    imageAlt: "Cash",
    title: "For Institutions",
  };

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
