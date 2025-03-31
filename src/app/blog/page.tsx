"use client";

import * as React from "react";
import Image from "next/image";

import styles from "./Blog.module.css";
import style from "../../component/Article/ArticleSection.module.css";
import ArticleCard from "@/component/Article/ArticleCard";
import Footer from "@/component/Footer/Footer";

import leftVector from "../../../public/left-Vector.svg";
import rightVector from "../../../public/right-Vector.svg";

import { articlesBlog } from "@/utils/constants";
import Navbar from "@/component/Navbar/Navbar";

/**
 * A blog page component with search functionality and pagination.
 *
 * @component
 * @example
 * // Usage in a Next.js route:
 * <Blog />
 *
 * @returns {React.ReactElement} A layout containing:
 * - A navigation bar (`<Navbar />`)
 * - A header with title and search input
 * - A grid of article cards (`<ArticleCard />`) filtered by search query
 * - Pagination controls
 * - A footer (`<Footer />`)
 *
 * @state
 * @property {string} searchQuery - Current search query for filtering articles.
 * @property {number} currentPage - Active page number in pagination (1-indexed).
 *
 * @behavior
 * - Filters articles based on `searchQuery` (matches against label, title, or author).
 * - Paginates results (9 articles per page).
 * - Provides next/previous page navigation.
 */

const Blog = () => {
  /**
   * Search query state for filtering articles.
   * @type {string}
   */

  const [searchQuery, setSearchQuery] = React.useState<string>("");

  /**
   * Current page number in pagination (1-indexed).
   * @type {number}
   */

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  /** Number of articles displayed per page. */
  const articlesPerPage = 9; // Number of articles to display per page

  /**
   * Filters articles based on search query.
   * Matches against article label, title, or author name (case-insensitive).
   * @type {Array<Article>}
   */
  const filteredArticles = articlesBlog.filter((article) => {
    const query = searchQuery.toLowerCase();
    return (
      article.label.toLowerCase().includes(query) ||
      article.title.toLowerCase().includes(query) ||
      article.authorName.toLowerCase().includes(query)
    );
  });

  /** Total number of pages based on filtered articles. */
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  /**
   * Gets articles for the current page.
   * @type {Array<Article>}
   */
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  console.log(currentArticles);

  /**
   * Handles navigation to the next page.
   * @function
   */
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  /**
   * Handles navigation to the previous page.
   * @function
   */
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <header className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>BLOG</h1>
        <input
          className={styles.blogInput}
          type="text"
          placeholder="Search by category, title or author"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      <main className={`${style.articleContainer} ${styles.blogContainer}`}>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))
        ) : (
          <p className={styles.noResults}>No articles found.</p>
        )}
      </main>
      {/* Pagination control */}
      <div className={styles.pagination}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          <Image src={leftVector} alt="Left arrow" />
        </button>
        <span className={styles.paginationInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          <Image src={rightVector} alt="right arrow" />
        </button>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
