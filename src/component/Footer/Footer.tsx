import React from "react";
import styles from "./Footer.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"; // Import Next.js Link for routing
import logo from "../../../public/logo.png";
import linkedIn from "../../../public/linkedin.png";
import x from "../../../public/x-vector.png";
import insta from "../../../public/instagram.png";
import Subscribe from "./Subscribe";

/**
 * Footer Component
 *
 * @component
 * @description
 * The global footer component containing:
 * - Newsletter subscription section
 * - Brand logo and description
 * - Navigation links
 * - Social media links
 *
 * @example
 * // Basic usage
 * <Footer />
 *
 * @structure
 * 1. Subscribe Section (top)
 * 2. Navigation Section (bottom):
 *    - Branding (logo + description)
 *    - Footer links (3 columns)
 *    - Social media links
 *
 * @data
 * - Uses `footerRoutes` for navigation links
 * - Uses `socialLinks` for social media icons
 * - Subscribe component handles newsletter signup
 *
 * @interface FooterRoute
 * @property {string} href - Route path
 * @property {string} label - Link text
 *
 * @interface SocialLink
 * @property {string} href - Social media URL
 * @property {StaticImageData} icon - Social icon image
 * @property {string} alt - Alt text for icon
 *
 * @styles {module} styles - CSS Module classes:
 * - `.footerContainer` - Main container
 * - `.footerNavigation` - Bottom section container
 * - `.footerLogo` - Brand logo
 * - `.footerNavigationText` - Description text
 * - `.footerRoutes` - Links container
 * - `.footerLink` - Individual link
 * - `.footerSocials` - Social links container
 * - `.footerSocialLogo` - Social icon
 *
 * @accessibility
 * - Semantic footer element
 * - Proper link labeling
 * - Social links open in new tab with warning
 * - Sufficient color contrast
 * - Screen reader friendly
 *
 * @performance
 * - Optimized image loading
 * - Static link data (could be dynamic)
 * - Efficient CSS layout
 */

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
        header="Join Africa's Largest Research Community"
        text="Stay Ahead in Research!"
      />

      {/* Navigation Section */}
      <div className={styles.footerNavigation}>
        <div>
          <Image src={logo} alt="Everey" className={styles.footerLogo} />
          <p className={styles.footerNavigationText}>
            We are dedicated to promoting indigenous research, leveraging local
            expertise for impactful global publishing.
          </p>
        </div>

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
