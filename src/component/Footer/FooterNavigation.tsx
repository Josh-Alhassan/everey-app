import React from "react";
import styles from "./Footer.module.css";
import Image, { StaticImageData } from "next/image";

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
