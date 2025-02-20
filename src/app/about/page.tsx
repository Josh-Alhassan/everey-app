import React from "react";
import AboutHeader from "@/sections/AboutHeader/AboutHeader";
import SetUsApart from "@/sections/SetUsApart/SetUsApart";
import Statement from "@/sections/Statements/Statement";

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHeader />
      <SetUsApart />
      <Statement />
    </>
  );
};

export default AboutPage;
