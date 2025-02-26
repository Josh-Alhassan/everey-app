import React from "react";
import styleContact from "./Contact.module.css";
import ContactHeader from "@/sections/ContactHeader/ContactHeader";
import ContactForm from "@/sections/ContactForm/ContactForm";

const Contact = () => {
  return (
    <section>
      <ContactHeader />
      <ContactForm />
    </section>
  );
};

export default Contact;
