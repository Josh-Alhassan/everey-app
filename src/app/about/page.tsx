import React from "react";
import AboutHeader from "@/sections/AboutHeader/AboutHeader";
import SetUsApart from "@/sections/SetUsApart/SetUsApart";
import Statement from "@/sections/Statements/Statement";
import SuccessNumbers from "@/sections/SectionNumbers/SuccessNumbers";

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHeader />
      <SetUsApart />
      <Statement />
      <SuccessNumbers />
    </>
  );
};

export default AboutPage;
