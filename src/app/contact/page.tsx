import React from "react";
import styleContact from "./Contact.module.css";
import ContactHeader from "@/sections/ContactHeader/ContactHeader";
import ContactForm from "@/sections/ContactForm/ContactForm";
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";

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
