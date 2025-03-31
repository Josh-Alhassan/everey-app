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

/**
 * ContactInfo Component
 *
 * @component
 * @description
 * Displays contact information and social media links in a structured layout.
 * Features:
 * - Contact information header
 * - Phone, email, and location details
 * - Social media links with icons
 * - Responsive design
 *
 * @example
 * // Basic usage
 * <ContactInfo />
 *
 * @structure
 * 1. Header Section:
 *    - Title: "Contact Information"
 *    - Subtitle: "Say something to start a live chat!"
 * 2. Contact Details:
 *    - Phone number
 *    - Email address
 *    - Physical location
 * 3. Social Media Links:
 *    - Twitter
 *    - Instagram
 *    - Discord
 *
 * @interface ContactItem
 * @property {React.ReactNode} icon - Icon component (from react-icons)
 * @property {string} text - Contact information text
 *
 * @interface SocialLink
 * @property {React.ReactNode} icon - Social media icon
 * @property {string} url - Social media URL
 * @property {string} label - Accessible label for screen readers
 *
 * @styles {module} styleInfo - CSS Module classes:
 * - `.container` - Main container
 * - `.contactHeader` - Header section
 * - `.contactTitle` - Title text
 * - `.contactText` - Subtitle text
 * - `.contactWrapper` - Content wrapper
 * - `.contacts` - Contact items container
 * - `.contact` - Individual contact item
 * - `.iconContainer` - Icon wrapper
 * - `.icon` - Contact icon styling
 * - `.socials` - Social links container
 * - `.socialLink` - Social link item
 * - `.socialIcon` - Social icon styling
 *
 * @accessibility
 * - Semantic HTML structure (section, header, main, nav)
 * - ARIA labels for social links
 * - Screen reader friendly text
 * - Keyboard-navigable links
 * - Sufficient color contrast
 *
 * @performance
 * - Efficient icon rendering
 * - Lightweight component
 * - Optimized CSS
 *
 * @dependencies
 * - react-icons for vector icons
 * - CSS Modules for styling
 */

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
