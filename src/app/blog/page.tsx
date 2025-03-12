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

const Blog = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const articlesPerPage = 9; // Number of articles to display per page

  // Filter articles based on the search query
  const filteredArticles = articlesBlog.filter((article) => {
    const query = searchQuery.toLowerCase();
    return (
      article.label.toLowerCase().includes(query) ||
      article.title.toLowerCase().includes(query) ||
      article.authorName.toLowerCase().includes(query)
    );
  });

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Get the articles for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  console.log(currentArticles);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
