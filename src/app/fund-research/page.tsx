import React from "react";
// import styleFund from "./FundResearch.module.css";
import FundResearchHeader from "@/sections/FundResearchHeader/FundResearchHeader";
import ResearchAfrica from "@/sections/ResearchAfrica/ResearchAfrica";
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";

const FundResearch = () => {
  return (
    <div>
      <Navbar />
      <FundResearchHeader />
      <ResearchAfrica />
      <Footer />
    </div>
  );
};

export default FundResearch;
