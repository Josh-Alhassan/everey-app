import React from "react";

import stylesContact from "./ContactHeader.module.css";
import SecondaryHeader from "@/utils/SecondaryHeader/SecondaryHeader";

const ContactHeader = () => {
  return (
    <header className={stylesContact.container}>
      <SecondaryHeader
        title="Contact Us"
        description="Any question or remarks? Just write us a message!"
        className={stylesContact.header}
      />
    </header>
  );
};

export default ContactHeader;
