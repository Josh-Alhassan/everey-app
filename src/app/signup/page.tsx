import React from "react";
import SignUp from "./SignUp";

const SignUpPage: React.FC = () => {
  const welcomeText = {
    title: "Welcome to Everey!",
    description:
      "Embark on your research journey with us. Join our community to unlock exclusive opportunities and resources tailored for your academic endeavors.",
  };

  const ctaButtons = {
    student: {
      text: "Signup as Student",
      href: "#",
    },
    researcher: {
      text: "Signup as Researcher",
      href: "#",
    },
  };

  return (
    <div>
      <SignUp welcomeText={welcomeText} ctaButtons={ctaButtons} />
    </div>
  );
};

export default SignUpPage;
