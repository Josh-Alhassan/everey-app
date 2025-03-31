import React from "react";

import styles from "../../component/Article/ArticleSection.module.css";
import ArticleCard from "@/component/Article/ArticleCard";

/**
 * AboutArticle Component
 *
 * @component
 * @description
 * Displays a section of featured articles with:
 * - Section header with title and "View All" link
 * - Grid of article cards showing:
 *   - Thumbnail image
 *   - Category label
 *   - Author information
 *   - Publication date
 *   - Article title
 *   - Preview text
 *   - "Read more" link
 *
 * @example
 * // Basic usage
 * <AboutArticle />
 *
 * @structure
 * 1. Header Section:
 *    - "Latest News" title
 *    - "All articles" link
 * 2. Articles Grid:
 *    - Multiple ArticleCard components
 *    - Responsive grid layout
 *
 * @interface Article
 * @property {string} thumbnail - Path to article thumbnail image
 * @property {string} label - Article category/tag
 * @property {string} authorImg - Path to author profile image
 * @property {string} authorName - Author's full name
 * @property {string} date - Formatted publication date
 * @property {string} title - Article headline
 * @property {string} preview - Short preview text
 * @property {string} readMoreLink - URL to full article
 *
 * @data articles
 * @description Array of article objects containing:
 * - Education article by Micheal Angelo
 * - Technology article by Jane Doe
 * - Technology article by Juliette Romeo
 *
 * @styles {module} styles - CSS Module classes:
 * - `.articleSection` - Main container
 * - `.articleHeader` - Header container
 * - `.articleHeaderTitle` - Section title
 * - `.articleHeaderText` - "View All" link
 * - `.articleContainer` - Articles grid wrapper
 *
 * @accessibility
 * - Semantic HTML (section, header, main)
 * - Proper heading hierarchy
 * - Needs alt text for images (handled in ArticleCard)
 * - Keyboard-navigable links
 * - Sufficient color contrast
 *
 * @performance
 * - Efficient card rendering
 * - Image optimization handled in ArticleCard
 * - Lightweight parent component
 *
 * @dependencies
 * - ArticleCard component for individual articles
 * - next/image for optimized images (in ArticleCard)
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
    authorName: "Juliette Romeo",
    date: "Feb 15, 2023 • 8 min read",
    title: "Artificial Intelligence",
    preview:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus rem nulla est itaque sint totam voluptatem illo voluptas sunt saepe odit, dolorum libero, quod aperiam quibusdam nostrum minima laborum? dolorum libero, quod aperiam quibusdam nostrum minima laborum.",
    readMoreLink: "#",
  },
];

const AboutArticle: React.FC = () => {
  return (
    <section className={styles.articleSection}>
      <header className={styles.articleHeader}>
        <h3 className={styles.articleHeaderTitle}>Latest News</h3>
        <p className={styles.articleHeaderText}>All articles &rarr;</p>
      </header>

      <main className={styles.articleContainer}>
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </main>
    </section>
  );
};

export default AboutArticle;
