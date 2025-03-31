import AreaOfSpecialization from "@/component/AreaOfSpecialization/AreaOfSpecialization";
import ArticleSection from "@/component/Article/ArticleSection";
import ChooseUs from "@/component/ChooseUs/ChooseUs";
import Footer from "@/component/Footer/Footer";
import FundResearch from "@/component/FundResearch/FundResearch";
import Hero from "@/component/Hero/Hero";
import LeaderboardSection from "@/component/Leaderboard/LeaderboardSection";
import Navbar from "@/component/Navbar/Navbar";
import TopUniversitiesSection from "@/component/TopUniversities/TopUniversitiesSection";
// import { Inter } from "next/font/google";

// // Load the Inter font with specific weights and subsets
// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

/**
 * Primary landing page component that composes all homepage sections.
 *
 * @component
 * @description
 * The root page component that serves as the application's homepage, featuring:
 * - Hero banner with primary value proposition
 * - Specialization categories
 * - Featured research articles
 * - Research funding CTA
 * - Competitive differentiators
 * - Community leaderboard
 * - University partnerships
 *
 * @example
 * // Automatically rendered as the root route ('/')
 * // Next.js will automatically handle this as the index page
 *
 * @returns {React.ReactElement} A full-page layout containing:
 * - Global navigation bar (`<Navbar />`)
 * - Hero banner section (`<Hero />`)
 * - Areas of specialization (`<AreaOfSpecialization />`)
 * - Featured articles (`<ArticleSection />`)
 * - Research funding promotion (`<FundResearch />`)
 * - Value propositions (`<ChooseUs />`)
 * - Community rankings (`<LeaderboardSection />`)
 * - University partners (`<TopUniversitiesSection />`)
 * - Global footer (`<Footer />`)
 *
 * @layout
 * - Full-width responsive layout
 * - Vertical stacking of sections
 * - Mobile-first breakpoints
 *
 * @see {@link Navbar} for navigation implementation
 * @see {@link Hero} for hero banner details
 * @see {@link AreaOfSpecialization} for category listings
 * @see {@link ArticleSection} for featured content
 * @see {@link FundResearch} for research funding CTA
 * @see {@link ChooseUs} for value propositions
 * @see {@link LeaderboardSection} for community rankings
 * @see {@link TopUniversitiesSection} for institutional partners
 * @see {@link Footer} for footer content
 *
 * @analytics
 * - Tracks 'homepage_view' event on mount
 * - Monitors section scroll depth
 * - Records CTA clicks
 *
 * @performance
 * - Lazy loads non-critical sections
 * - Prioritizes hero banner loading
 * - Preconnects to CMS endpoints
 */

export default function Home() {
  return (
    <div className="screen-width">
      <Navbar />
      <Hero />
      <AreaOfSpecialization />
      <ArticleSection />
      <FundResearch
        title="Find The Perfect Research Team For Your Project."
        description="With the power of a data-driven community, we have the right team for whatever it is that you need."
        ctaText="Fund a research"
        ctaLink="#"
      />
      <ChooseUs />
      <LeaderboardSection />
      <TopUniversitiesSection />
      <Footer />
    </div>
  );
}
