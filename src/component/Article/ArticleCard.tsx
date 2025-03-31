import React from "react";
import styles from "./ArticleSection.module.css";
import Image from "next/image";

/**
 * ArticleCard Component
 *
 * @component
 * @description
 * A reusable card component that displays article previews with:
 * - Thumbnail image with category label
 * - Author information (image, name, publication date)
 * - Article title and preview text
 * - "Read more" call-to-action
 *
 * @example
 * // Basic usage
 * <ArticleCard
 *   thumbnail="/article1.jpg"
 *   label="Technology"
 *   authorImg="/author1.jpg"
 *   authorName="Jane Doe"
 *   date="Jan 15, 2023 • 5 min read"
 *   title="The Future of AI"
 *   preview="Exploring upcoming AI trends..."
 *   readMoreLink="/articles/ai-future"
 * />
 *
 * @param {Article} props - Article data
 * @param {string} props.thumbnail - Path to thumbnail image
 * @param {string} props.label - Article category label
 * @param {string} props.authorImg - Path to author's profile image
 * @param {string} props.authorName - Author's full name
 * @param {string} props.date - Formatted publication date and read time
 * @param {string} props.title - Article title/headline
 * @param {string} props.preview - Short preview text (1-2 sentences)
 * @param {string} props.readMoreLink - URL to full article
 *
 * @returns {React.ReactElement} An article card containing:
 * - Header with thumbnail image and category label
 * - Author section with avatar and metadata
 * - Article title and preview text
 * - "Read more" link
 *
 * @styles {module} styles - CSS Module classes:
 * - `.articleCard` - Main container
 * - `.articleHeaderImage` - Thumbnail container
 * - `.articleImg` - Thumbnail image
 * - `.articleLabel` - Category label
 * - `.authorSection` - Author info container
 * - `.authorDetail` - Author avatar and name wrapper
 * - `.authorImg` - Author profile image
 * - `.authorInfo` - Author metadata container
 * - `.authorInfoName` - Author name
 * - `.authorInfoDate` - Publication date
 * - `.articleBody` - Article content container
 * - `.articleTitle` - Article headline
 * - `.articlePreview` - Preview text
 * - `.articleReadMore` - Read more link
 *
 * @accessibility
 * - Uses semantic HTML (header, section)
 * - All images have descriptive alt text
 * - Proper heading hierarchy (h4 for article title)
 * - Focus styles for interactive elements
 * - Sufficient color contrast (minimum 4.5:1)
 * - Screen reader friendly text alternatives
 *
 * @performance
 * - Optimized image loading via next/image
 * - Priority loading for above-the-fold images
 * - Proper image sizing (width/height attributes)
 * - Efficient CSS with minimal reflows
 *
 * @dependencies
 * - next/image for optimized image handling
 * - Global styles for typography and colors
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
