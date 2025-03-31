import React from "react";
import styles from "./Footer.module.css";
import Image, { StaticImageData } from "next/image";

/**
 * FooterNavigation Component
 *
 * @component
 * @description
 * A reusable footer navigation component that displays:
 * - Brand logo
 * - Company description
 * - List of navigation links
 * - Social media icons
 *
 * Designed to be used as part of a larger footer layout.
 *
 * @example
 * // Basic usage
 * <FooterNavigation
 *   logo={companyLogo}
 *   description="Our company mission statement"
 *   routes={['/about', '/contact']}
 *   socialIcons={[twitterIcon, facebookIcon]}
 * />
 *
 * @param {FooterNavigationProps} props - Component properties
 * @param {StaticImageData} props.logo - Company logo image (Next.js static import)
 * @param {string} props.description - Brief company description
 * @param {string[]} props.routes - Array of route paths
 * @param {StaticImageData[]} props.socialIcons - Array of social media icons
 *
 * @returns {React.ReactElement} A footer navigation section containing:
 * - Brand logo
 * - Description text
 * - Navigation links
 * - Social media icons
 *
 * @interface FooterNavigationProps
 * @property {StaticImageData} logo - Company logo image
 * @property {string} description - Company description (1-2 sentences)
 * @property {string[]} routes - Array of route paths
 * @property {StaticImageData[]} socialIcons - Array of social media icons
 *
 * @styles {module} styles - CSS Module classes:
 * - `.footerNavigation` - Main container
 * - `.footerNavigationText` - Description text styling
 * - `.footerRoutes` - Navigation links container
 * - `.footerLink` - Individual link styling
 * - `.footerSocials` - Social icons container
 *
 * @accessibility
 * - Missing alt text for social icons (should be provided)
 * - Link text should be descriptive
 * - Proper color contrast
 * - Keyboard navigable
 *
 * @performance
 * - Optimized image loading via next/image
 * - Static route data
 * - Efficient CSS layout
 *
 * @improvements
 * - Add alt text for social icons
 * - Make links more descriptive
 * - Add ARIA labels
 */

interface FooterNavigationProps {
  logo: StaticImageData; // Type for Next.js static images
  description: string;
  routes: string[];
  socialIcons: StaticImageData[]; // Array of social media icons
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({
  logo,
  description,
  routes,
  socialIcons,
}) => {
  return (
    <div className={styles.footerNavigation}>
      <Image src={logo} alt="Everey" />
      <p className={styles.footerNavigationText}>{description}</p>
      <div className={styles.footerRoutes}>
        {routes.map((route, index) => (
          <a key={index} href={route} className={styles.footerLink}>
            {route}
          </a>
        ))}
      </div>
      <div className={styles.footerSocials}>
        {socialIcons.map((icon, index) => (
          <a key={index} href="#">
            <Image src={icon} alt="Social Icon" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterNavigation;
