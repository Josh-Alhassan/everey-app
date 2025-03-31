import React from "react";
import styles from "./ArticleSection.module.css";
import ArticleCard from "./ArticleCard";

/**
 * ArticleSection Component
 *
 * @component
 * @description
 * Displays a section featuring multiple article cards with:
 * - Section header with title and "View All" link
 * - Responsive grid of article preview cards
 * - Each card shows thumbnail, metadata, and preview text
 *
 * @example
 * // Basic usage (with default articles)
 * <ArticleSection />
 *
 * @returns {React.ReactElement} A layout section containing:
 * - Section header with title and navigation prompt
 * - Grid of article cards with:
 *   - Thumbnail image
 *   - Category label
 *   - Author information
 *   - Publication date
 *   - Article title
 *   - Preview text
 *   - Read more link
 *
 * @interface Article
 * @property {string} thumbnail - Path to article thumbnail image
 * @property {string} label - Article category/label (e.g., "Technology")
 * @property {string} authorImg - Path to author's profile image
 * @property {string} authorName - Author's full name
 * @property {string} date - Formatted publication date (e.g., "Jan 20, 2023 • 11 min read")
 * @property {string} title - Article title/headline
 * @property {string} preview - Short preview text (1-2 sentences)
 * @property {string} readMoreLink - URL to full article
 *
 * @styles {module} styles - CSS Module classes:
 * - `.articleSection` - Main container
 * - `.articleHeader` - Header container
 * - `.articleHeaderTitle` - Section title
 * - `.articleHeaderText` - "View All" link
 * - `.articleContainer` - Articles grid container
 *
 * @data
 * - Uses static article data (can be replaced with API data)
 * - Each article follows the Article interface structure
 * - Default data includes 6 sample articles
 *
 * @accessibility
 * - Uses semantic HTML (section, header, main)
 * - Article cards contain proper alt text for images
 * - Clear heading hierarchy
 * - Keyboard-navigable article links
 * - Sufficient color contrast
 *
 * @dependencies
 * - ArticleCard component for individual article rendering
 * - Next.js Image component for optimized images
 */

// Define TypeScript interface for article data structure
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

const ArticleSection: React.FC = () => {
  return (
    <section className={styles.articleSection}>
      <header className={styles.articleHeader}>
        <h3 className={styles.articleHeaderTitle}>Read an Article</h3>
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

export default ArticleSection;
