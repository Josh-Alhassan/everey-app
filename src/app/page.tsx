import AreaOfSpecialization from "@/component/AreaOfSpecialization";
import ArticleSection from "@/component/ArticleSection";
import ChooseUs from "@/component/ChooseUs/ChooseUs";
import FundResearch from "@/component/FundResearch";
import Hero from "@/component/Hero";
import LeaderboardSection from "@/component/LeaderboardSection";
import { Inter } from "next/font/google";

// Load the Inter font with specific weights and subsets
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <div>
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
      <footer></footer>
    </div>
  );
}
