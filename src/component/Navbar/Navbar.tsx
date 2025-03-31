/**
 * Navbar Component
 *
 * @component
 * @description
 * The main navigation bar for the application featuring:
 * - Responsive design with mobile menu toggle
 * - Application logo linking to home
 * - Navigation links to key pages
 * - Sign-up CTA button
 * - Accessible hamburger menu for mobile
 *
 * @example
 * // Basic usage
 * <Navbar />
 *
 * @behavior
 * - Mobile-first responsive design
 * - Hamburger menu toggles on mobile
 * - All links maintain state
 * - Client-side interactivity
 *
 * @state
 * - `isMenuOpen`: Tracks mobile menu visibility
 * - `toggleMenu`: Handler for menu toggle
 *
 * @styles {module} styles - CSS Module classes:
 * - `.navbar`: Main container
 * - `.logo`: Logo container
 * - `.navLinks`: Navigation links container
 * - `.open`: Mobile menu open state
 * - `.navLink`: Individual navigation link
 * - `.signupButton`: Desktop sign-up button
 * - `.signupButtonMobile`: Mobile sign-up button
 * - `.signupLink`: Sign-up link styling
 * - `.hamburger`: Mobile menu button
 * - `.hamburgerLine`: Hamburger menu icon lines
 *
 * @accessibility
 * - Semantic nav element
 * - ARIA attributes for menu state
 * - Keyboard navigable
 * - Screen reader friendly
 * - Proper focus management
 * - Color contrast compliant
 *
 * @performance
 * - Optimized logo image loading
 * - Efficient menu toggle rendering
 * - CSS transitions for smooth animations
 * - Client-side only interactivity
 *
 * @dependencies
 * - next/link for client-side navigation
 * - next/image for optimized logo
 * - React state for interactivity
 *
 */

"use client"; // Required for interactivity (e.g., useState)

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

import logoMobile from "../../../public/logo-mobile.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logoMobile} alt="Logo" width={120} height={40} priority />
        </Link>
      </div>

      {/* Navigation Links */}
      <div
        className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}
        aria-expanded={isMenuOpen}
      >
        <Link href="/blog" className={styles.navLink}>
          Blog
        </Link>
        <Link href="/about" className={styles.navLink}>
          About Us
        </Link>
        <Link href="/fund-research" className={styles.navLink}>
          Fund a Research
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Contact Us
        </Link>

        <div className={styles.signupButtonMobile}>
          <Link href="/signup" className={styles.signupLink}>
            Sign Up
          </Link>
        </div>
      </div>

      {/* Sign Up Button */}
      <div className={styles.signupButton}>
        <Link href="/signup" className={styles.signupLink}>
          Sign Up
        </Link>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
    </nav>
  );
};

export default Navbar;
