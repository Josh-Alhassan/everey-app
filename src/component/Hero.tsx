import React from "react";
import style from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={style.heroSection}>
      <div className={style.heroDescribe}>
        <h1 className={style.heroTitle}>Advance Your Research with Everey</h1>
        <p className={style.heroText}>
          Everey is Africa's leading platform for academic collaboration,
          data-driven insights, and sustainable research funding. We connect
          researchers, institutions, and organizations to accelerate innovation.
        </p>
      </div>
    </div>
  );
};

export default Hero;
