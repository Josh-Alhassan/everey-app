import React from "react";
import styleContact from "./Contact.module.css";
import ContactHeader from "@/sections/ContactHeader/ContactHeader";
import ContactForm from "@/sections/ContactForm/ContactForm";
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";

/**
 * Contact page component that renders a contact form section with header and footer.
 *
 * @component
 * @example
 * // Usage in a Next.js route:
 * <Contact />
 *
 * @returns {React.ReactElement} A React Fragment containing:
 * - Navigation bar (`<Navbar />`)
 * - Contact section with:
 *   - Contact header (`<ContactHeader />`)
 *   - Contact form (`<ContactForm />`)
 * - Footer (`<Footer />`)
 *
 * @layout
 * - Full-page layout with sequential rendering of components
 * - No sidebars or complex grid structures
 *
 * @see {@link Navbar} for navigation details
 * @see {@link ContactHeader} for section header
 * @see {@link ContactForm} for form implementation
 * @see {@link Footer} for footer content
 */

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className={styleContact.contactPage}>
        <ContactHeader />
        <ContactForm />
      </section>
      <Footer />
    </>
  );
};

export default Contact;
