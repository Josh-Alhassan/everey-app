import React from "react";
import styleInfo from "./ContactInfo.module.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

// Interface for contact information
interface ContactItem {
  icon: React.ReactNode;
  text: string;
}

// Interface for social links
interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

// Contact information data
const contactItems: ContactItem[] = [
  {
    icon: <FaPhone className={styleInfo.icon} />,
    text: "+1012 3456 789",
  },
  {
    icon: <FaEnvelope className={styleInfo.icon} />,
    text: "support@useeverey.com",
  },
  {
    icon: <FaMapMarkerAlt className={styleInfo.icon} />,
    text: "Lagos, Nigeria",
  },
];

// Social links data
const socialLinks: SocialLink[] = [
  {
    icon: <FaTwitter className={styleInfo.socialIcon} />,
    url: "#",
    label: "Twitter",
  },
  {
    icon: <FaInstagram className={styleInfo.socialIcon} />,
    url: "#",
    label: "Instagram",
  },
  {
    icon: <FaDiscord className={styleInfo.socialIcon} />,
    url: "#",
    label: "Discord",
  },
];

// Reusable ContactItem component
const ContactItem: React.FC<ContactItem> = ({ icon, text }) => (
  <p className={styleInfo.contact}>
    <span className={styleInfo.iconContainer}>{icon}</span>
    {text}
  </p>
);

// Reusable SocialLink component
const SocialLink: React.FC<SocialLink> = ({ icon, url, label }) => (
  <a
    href={url}
    className={styleInfo.socialLink}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const ContactInfo: React.FC = () => {
  return (
    <section className={styleInfo.container}>
      {/* Header */}
      <header className={styleInfo.contactHeader}>
        <h3 className={styleInfo.contactTitle}>Contact Information</h3>
        <p className={styleInfo.contactText}>
          Say something to start a live chat!
        </p>
      </header>

      <div className={styleInfo.contactWrapper}>
        {/* Contact Information */}
        <main className={styleInfo.contacts}>
          {contactItems.map((item, index) => (
            <ContactItem key={index} icon={item.icon} text={item.text} />
          ))}
        </main>

        {/* Social Links */}
        <nav className={styleInfo.socials} aria-label="Social media links">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              icon={link.icon}
              url={link.url}
              label={link.label}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};

export default ContactInfo;
