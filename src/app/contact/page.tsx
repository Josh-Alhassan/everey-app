import React from "react";
import styleContact from "./Contact.module.css";
import ContactHeader from "@/sections/ContactHeader/ContactHeader";
import ContactForm from "@/sections/ContactForm/ContactForm";
import Footer from "@/component/Footer/Footer";

const Contact = () => {
  return (
    <section>
      <ContactHeader />
      <ContactForm />
      <Footer />
    </section>
  );
};

export default Contact;
