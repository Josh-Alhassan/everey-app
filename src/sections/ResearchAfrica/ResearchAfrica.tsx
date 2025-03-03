"use client";

import React from "react";
import styles from "./ResearchAfrica.module.css";
import SecondaryHeader from "@/utils/SecondaryHeader/SecondaryHeader";
import FormField from "@/utils/FormField/FormField";
import ResearchPlanCard from "@/component/ResearchPlanCard/ResearchPlanCard";

import { researchPlans } from "@/component/ResearchPlanCard/ResearchPlanCard";

import { formFields } from "@/utils/constants";
import ArticleCard from "@/component/Article/ArticleCard";
import Footer from "@/component/Footer/Footer";

interface Article {
  thumbnail: string; // Path to the thumbnail image
  label: string; // Article label (e.g., "Education")
  authorImg: string; // Path to the author's image
  authorName: string; // Author's name
  date: string; // Publication date
  title: string; // Article title
  preview: string; // Article preview text
  readMoreLink: string; // Link to the full article
}

const articles: Article[] = [
  {
    thumbnail: "/thumbnail.png",
    label: "Education",
    authorImg: "/articleAuthor.jpg",
    authorName: "Micheal Angelo",
    date: "Jan 20, 2023 • 11 min read",
    title: "Unleashing Creativity in the Classroom",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus rem nulla est itaque sint totam voluptatem illo voluptas sunt saepe odit, dolorum libero, quod aperiam quibusdam nostrum minima laborum?",
    readMoreLink: "#",
  },
  {
    thumbnail: "/thumbnail.png",
    label: "Technology",
    authorImg: "/articleAuthor.jpg",
    authorName: "Jane Doe",
    date: "Feb 15, 2023 • 8 min read",
    title: "The Future of Artificial Intelligence",
    preview:
      "Discover how AI is transforming industries and what the future holds for this groundbreaking technology.",
    readMoreLink: "#",
  },

  {
    thumbnail: "/thumbnail.png",
    label: "Technology",
    authorImg: "/articleAuthor.jpg",
    authorName: "Jane Doe",
    date: "Feb 15, 2023 • 8 min read",
    title: "The Future of Artificial Intelligence",
    preview:
      "Discover how AI is transforming industries and what the future holds for this groundbreaking technology.",
    readMoreLink: "#",
  },
];

const ResearchAfrica: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section className={styles.researchAfrica}>
      {/* Header Section */}
      <SecondaryHeader
        title="Find the best Researchers in Africa"
        description="Finding the right team for the right project is difficult, let alone finding the right team for an unknown project. What if I told you with the power of a data-driven community we have the right team for whatever it is that you need."
      />

      {/* Research Plans Section */}
      <div className={styles.startResearch}>
        <SecondaryHeader title="Start Your Research" />
        <div className={styles.researchPlans}>
          {researchPlans.map((plan) => (
            <ResearchPlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>

      {/* Application Form Section */}
      <div className={styles.researchFormWrapper}>
        <SecondaryHeader title="Apply Below" />
        <form className={styles.researchForms} onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <FormField
              key={field.id}
              label={field.label}
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
              type={field.type}
              required={field.required}
              value={""}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
          <button type="submit" className={styles.submitButton}>
            Apply now
          </button>
          {/* <div>
          </div> */}
        </form>
      </div>

      {/* Research News */}
      <div className={styles.researchNews}>
        <SecondaryHeader title="Research News" />
        <div className={styles.researchNewsWrapper}>
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAfrica;
