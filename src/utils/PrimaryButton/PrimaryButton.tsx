import React from "react";

import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href: string;
}

const PrimaryButton = ({ children, href }: PrimaryButtonProps) => {
  return (
    <a
      href={href}
      style={{
        backgroundColor: "rgb(11, 143, 80)",
        display: "block",
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
        padding: "15px",
        fontWeight: "700",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
};

export default PrimaryButton;
