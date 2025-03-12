import React from "react";
// import styleFund from "./FundResearch.module.css";
import FundResearchHeader from "@/sections/FundResearchHeader/FundResearchHeader";
import ResearchAfrica from "@/sections/ResearchAfrica/ResearchAfrica";
import Footer from "@/component/Footer/Footer";

const FundResearch = () => {
  return (
    <div>
      <FundResearchHeader />
      <ResearchAfrica />
      <Footer />
    </div>
  );
};

export default FundResearch;
