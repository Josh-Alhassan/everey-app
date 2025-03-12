import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import FAQSection from "@/sections/Accordion/FAQSection";
import FaqHeader from "@/sections/FaqHeader/FaqHeader";
import React from "react";

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
