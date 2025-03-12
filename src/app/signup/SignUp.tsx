import React from "react";
import styles from "./SignUp.module.css";
import Image from "next/image";
import PrimaryButton from "@/utils/PrimaryButton/PrimaryButton";

// Assets
import logoAlt from "../../../public/logo-alt.png";
import welcome from "../../../public/welcome-frame.png";
import scientist from "../../../public/scientist.jpg";

// Interface for SignUp component props
interface SignUpProps {
  welcomeText: {
    title: string;
    description: string;
  };
  ctaButtons: {
    student: {
      text: string;
      href: string;
    };
    researcher: {
      text: string;
      href: string;
    };
  };
}

const SignUp: React.FC<SignUpProps> = ({ welcomeText, ctaButtons }) => {
  return (
    <section className={styles.signupContainer} aria-label="Sign Up Section">
      {/* Left Side: Content */}
      <div className={styles.signupWrapper}>
        {/* Logo */}
        <div className={styles.evereyLogo}>
          <Image src={logoAlt} alt="Everey Logo" priority />
        </div>

        {/* Welcome Image */}
        <Image
          className={styles.welcomeSvg}
          src={welcome}
          alt="Woman by a window"
          priority
        />

        {/* Welcome Text */}
        <div className={styles.signupContent}>
          <h1 className={styles.signupTitle}>{welcomeText.title}</h1>
          <p className={styles.signupText}>{welcomeText.description}</p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className={styles.ctas}>
          <PrimaryButton href={ctaButtons.student.href}>
            {ctaButtons.student.text}
          </PrimaryButton>
          <PrimaryButton href={ctaButtons.researcher.href}>
            {ctaButtons.researcher.text}
          </PrimaryButton>
        </div>
      </div>

      {/* Right Side: Image with Overlay */}
      <div className={styles.imageContainer}>
        <Image
          className={styles.signupImage}
          src={scientist}
          alt="Female Scientist"
          priority
        />
        <div className={styles.imageOverlay} />
      </div>
    </section>
  );
};

export default SignUp;
