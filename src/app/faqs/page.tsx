import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import FAQSection from "@/sections/Accordion/FAQSection";
import FaqHeader from "@/sections/FaqHeader/FaqHeader";
import React from "react";

/**
 * FAQ (Frequently Asked Questions) page component.
 *
 * @component
 * @description
 * Renders a complete FAQ page with navigation, header, FAQ sections, and footer.
 * This is a layout component that composes other dedicated components.
 *
 * @example
 * // Usage in a Next.js route or page:
 * <FAQS />
 *
 * @returns {React.ReactElement} The FAQ page structure containing:
 * - A navigation bar (`<Navbar />`)
 * - FAQ page header (`<FaqHeader />`)
 * - Main FAQ content section (`<FAQSection />`)
 * - Page footer (`<Footer />`)
 *
 * @layout
 * - Simple linear layout (no sidebars or complex grids)
 * - Responsive design handled by child components
 *
 * @see {@link Navbar} for navigation implementation
 * @see {@link FaqHeader} for page header details
 * @see {@link FAQSection} for question/answer content
 * @see {@link Footer} for footer information
 */

const FAQS = () => {
  return (
    <div>
      <Navbar />
      <FaqHeader />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default FAQS;
