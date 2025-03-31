import React from "react";
// import styleFund from "./FundResearch.module.css";
import FundResearchHeader from "@/sections/FundResearchHeader/FundResearchHeader";
import ResearchAfrica from "@/sections/ResearchAfrica/ResearchAfrica";
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";

/**
 * Fund Research page component that displays research funding information with a focus on African research.
 *
 * @component
 * @description
 * This page provides information about research funding opportunities, specializing in African research initiatives.
 * It serves as a hub connecting researchers with potential funding sources.
 *
 * @example
 * // Typical usage in a Next.js route:
 * <FundResearch />
 *
 * @returns {React.ReactElement} The research funding page structure containing:
 * - Application navigation bar (`<Navbar />`)
 * - Hero/header section (`<FundResearchHeader />`)
 * - Main content section focusing on African research (`<ResearchAfrica />`)
 * - Standard application footer (`<Footer />`)
 *
 * @layout
 * - Single-column layout
 * - Responsive design handled by child components
 * - No sidebars or complex grid structures
 *
 * @see {@link Navbar} for navigation implementation
 * @see {@link FundResearchHeader} for hero section and introductory content
 * @see {@link ResearchAfrica} for African-specific research funding information
 * @see {@link Footer} for footer content and links
 *
 * @note
 * - This is a static informational page (no dynamic data loading)
 * - For actual funding applications, see the `/apply` routes
 */

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
