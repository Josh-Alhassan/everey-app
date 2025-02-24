import React from "react";
import AboutHeader from "@/sections/AboutHeader/AboutHeader";
import SetUsApart from "@/sections/SetUsApart/SetUsApart";
import Statement from "@/sections/Statements/Statement";
import SuccessNumbers from "@/sections/SectionNumbers/SuccessNumbers";
import Footer from "@/component/Footer/Footer";
import AboutArticle from "@/sections/AboutArticle/AboutArticle";

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHeader />
      <SetUsApart />
      <Statement />
      <AboutArticle />
      <SuccessNumbers />
      <Footer />
    </>
  );
};

export default AboutPage;
