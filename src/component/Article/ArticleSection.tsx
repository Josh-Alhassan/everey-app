import React from "react";
import styles from "./ArticleSection.module.css";
import Image from "next/image";
import thumbnail from "../../public/thumbnail.png";
import authorImg from "../../public/articleAuthor.jpg";

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
          <div key={index} className={styles.articleCard}>
            {/* Article Header */}
            <header className={styles.articleHeaderImage}>
              <Image
                src={article.thumbnail}
                alt="Thumbnail"
                className={styles.articleImg}
                width={400} // Set appropriate width
                height={250} // Set appropriate height
                priority
              />
              <label className={styles.articleLabel}>{article.label}</label>
            </header>

            {/* Author Section */}
            <section className={styles.authorSection}>
              <div className={styles.authorDetail}>
                <Image
                  src={article.authorImg}
                  alt="Author"
                  width={50} // Set appropriate width
                  height={50} // Set appropriate height
                  priority
                  className={styles.authorImg}
                />
                <div className={styles.authorInfo}>
                  <p className={styles.authorInfoName}>{article.authorName}</p>
                  <p className={styles.authorInfoDate}>{article.date}</p>
                </div>
              </div>

              {/* Article Body */}
              <div className={styles.articleBody}>
                <h4 className={styles.articleTitle}>{article.title}</h4>
                <p className={styles.articlePreview}>{article.preview}</p>
                <a
                  className={styles.articleReadMore}
                  href={article.readMoreLink}
                >
                  Read more &rarr;
                </a>
              </div>
            </section>
          </div>
        ))}
      </main>
    </section>
  );
};

export default ArticleSection;
