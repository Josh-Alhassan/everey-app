import React from "react";
import styles from "./Footer.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"; // Import Next.js Link for routing
import logo from "../../../public/logo.png";
import linkedIn from "../../../public/linkedin.png";
import x from "../../../public/x-vector.png";
import insta from "../../../public/instagram.png";
import Subscribe from "./Subscribe";

// Define TypeScript interfaces for footer data
interface FooterRoute {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  icon: StaticImageData; // Type for Next.js static images
  alt: string;
}

// Footer data
const footerRoutes: FooterRoute[] = [
  { href: "/about", label: "About Us" },
  { href: "/career", label: "Career" },
  { href: "/privacy", label: "Privacy" },
  { href: "/news", label: "News" },
  { href: "/help-center", label: "Help Center" },
  { href: "/copyright", label: "Copyright" },
  { href: "/publication", label: "Publication" },
  { href: "/terms", label: "Terms" },
  { href: "/research", label: "Research" },
  { href: "/faqs", label: "FAQs" },
];

const socialLinks: SocialLink[] = [
  {
    href: "https://linkedin.com",
    icon: linkedIn,
    alt: "LinkedIn",
  },
  {
    href: "https://twitter.com",
    icon: x,
    alt: "Twitter",
  },
  {
    href: "https://instagram.com",
    icon: insta,
    alt: "Instagram",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Subscribe Section */}
      <Subscribe
        header="Join Africa’s Largest Research Community"
        text="Stay Ahead in Research!"
      />

      {/* Navigation Section */}
      <div className={styles.footerNavigation}>
        <Image src={logo} alt="Everey" className={styles.footerLogo} />
        <p className={styles.footerNavigationText}>
          We're dedicated to promoting indigenous research, leveraging local
          expertise for impactful global publishing.
        </p>

        {/* Footer Routes */}
        <div className={styles.footerRoutes}>
          {footerRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={styles.footerLink}
            >
              {route.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className={styles.footerSocials}>
          {socialLinks.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.icon}
                alt={social.alt}
                className={styles.footerSocialLogo}
                // width={24}
                // height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
