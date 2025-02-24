import React from "react";

import styles from "../../component/Article/ArticleSection.module.css";
import ArticleCard from "@/component/Article/ArticleCard";

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
