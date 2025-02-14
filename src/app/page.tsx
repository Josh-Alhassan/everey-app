import AreaOfSpecialization from "@/component/AreaOfSpecialization";
import Hero from "@/component/Hero";
import { Inter } from "next/font/google";

// Load the Inter font with specific weights and subsets
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <div>
      <Hero />
      <AreaOfSpecialization />
      <footer></footer>
    </div>
  );
}
