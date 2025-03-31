"use client";

import React from "react";
import styles from "./ResearchAfrica.module.css";
import SecondaryHeader from "@/utils/SecondaryHeader/SecondaryHeader";
import FormField from "@/utils/FormField/FormField";
import ResearchPlanCard from "@/component/ResearchPlanCard/ResearchPlanCard";

import { researchPlans } from "@/component/ResearchPlanCard/ResearchPlanCard";

import { formFields } from "@/utils/constants";
import ArticleCard from "@/component/Article/ArticleCard";

/**
 * ResearchAfrica Component
 *
 * @component
 * @description
 * A comprehensive research portal section featuring:
 * - Header with title and description
 * - Research plan options
 * - Researcher application form
 * - Research news articles
 *
 * Designed as the main interface for connecting researchers with projects in Africa.
 *
 * @example
 * // Basic usage
 * <ResearchAfrica />
 *
 * @structure
 * 1. Header Section:
 *    - Main title and descriptive text
 * 2. Research Plans:
 *    - Grid of research duration options
 * 3. Application Form:
 *    - Multi-field researcher application
 * 4. Research News:
 *    - Latest research-related articles
 *
 * @interface Article
 * @property {string} thumbnail - Article thumbnail image path
 * @property {string} label - Article category/tag
 * @property {string} authorImg - Author profile image path
 * @property {string} authorName - Author's full name
 * @property {string} date - Publication date and read time
 * @property {string} title - Article headline
 * @property {string} preview - Short preview text
 * @property {string} readMoreLink - URL to full article
 *
 * @data
 * - Uses `researchPlans` from ResearchPlanCard
 * - Uses `formFields` from constants
 * - Local `articles` array for news
 *
 * @handlers
 * @method handleSubmit - Form submission handler (currently logs to console)
 *
 * @styles {module} styles - CSS Module classes:
 * - `.researchAfrica` - Main container
 * - `.startResearch` - Research plans section
 * - `.researchPlans` - Plans grid container
 * - `.researchFormWrapper` - Form section wrapper
 * - `.researchForms` - Form container
 * - `.submitButton` - Apply button
 * - `.researchNews` - News section
 * - `.researchNewsWrapper` - Articles container
 *
 * @dependencies
 * - SecondaryHeader for consistent section headers
 * - FormField for form inputs
 * - ResearchPlanCard for plan options
 * - ArticleCard for news articles
 *
 * @accessibility
 * - Semantic section structure
 * - Proper heading hierarchy
 * - Form field labeling
 * - Keyboard navigable
 * - Screen reader friendly content
 *
 * @performance
 * - Efficient component composition
 * - Modular section rendering
 * - Image optimization in child components
 */

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
                throw new Error(
                  "Function not implemented." + e.preventDefault()
                );
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
