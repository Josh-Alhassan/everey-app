import React from "react";
import styles from "./ArticleSection.module.css";
import Image from "next/image";

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

const ArticleCard: React.FC<Article> = ({
  thumbnail,
  label,
  authorImg,
  authorName,
  date,
  title,
  preview,
  readMoreLink,
}) => {
  return (
    <div className={styles.articleCard}>
      {/* Article Header */}
      <header className={styles.articleHeaderImage}>
        <Image
          src={thumbnail}
          alt="Thumbnail"
          className={styles.articleImg}
          width={400} // Set appropriate width
          height={250} // Set appropriate height
          priority
        />
        <label className={styles.articleLabel}>{label}</label>
      </header>

      {/* Author Section */}
      <section className={styles.authorSection}>
        <div className={styles.authorDetail}>
          <Image
            src={authorImg}
            alt="Author"
            width={50} // Set appropriate width
            height={50} // Set appropriate height
            priority
            className={styles.authorImg}
          />
          <div className={styles.authorInfo}>
            <p className={styles.authorInfoName}>{authorName}</p>
            <p className={styles.authorInfoDate}>{date}</p>
          </div>
        </div>

        {/* Article Body */}
        <div className={styles.articleBody}>
          <h4 className={styles.articleTitle}>{title}</h4>
          <p className={styles.articlePreview}>{preview}</p>
          <a className={styles.articleReadMore} href={readMoreLink}>
            Read more &rarr;
          </a>
        </div>
      </section>
    </div>
  );
};

export default ArticleCard;
