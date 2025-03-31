import React from "react";
import AboutHeader from "@/sections/AboutHeader/AboutHeader";
import SetUsApart from "@/sections/SetUsApart/SetUsApart";
import Statement from "@/sections/Statements/Statement";
import SuccessNumbers from "@/sections/SectionNumbers/SuccessNumbers";
import Footer from "@/component/Footer/Footer";
import AboutArticle from "@/sections/AboutArticle/AboutArticle";
import Navbar from "@/component/Navbar/Navbar";

/**
 * The About Page component that composes various sections to create the "About Us" page.
 *
 * @component
 * @example
 * // Usage in a route or parent component:
 * <AboutPage />
 *
 * @returns {React.ReactElement} A React Fragment containing:
 * - A navigation bar (`<Navbar />`)
 * - A header section (`<AboutHeader />`)
 * - A "What Sets Us Apart" section (`<SetUsApart />`)
 * - A mission/values statement (`<Statement />`)
 * - An article or content section (`<AboutArticle />`)
 * - A success metrics/numbers section (`<SuccessNumbers />`)
 * - A footer (`<Footer />`)
 *
 * @see {@link Navbar} for navigation details.
 * @see {@link AboutHeader} for the header section.
 * @see {@link SetUsApart} for unique selling points.
 * @see {@link Statement} for mission/values.
 * @see {@link AboutArticle} for additional content.
 * @see {@link SuccessNumbers} for statistics.
 * @see {@link Footer} for footer information.
 */

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
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
