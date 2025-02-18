// Define the leaderboard data
import { StaticImageData } from "next/image";

import profileIcon from "../../public/profile-management.png";
import academicIcon from "../../public/academics.png";
import institutionIcon from "../../public/institution.png";
import organisationIcon from "../../public/organisation.png";

// Image from LeaderboardSection component
import prof1 from "../../public/prof-1.jpg";
import prof2 from "../../public/prof-2.jpg";
import prof3 from "../../public/prof-3.jpg";

export const reasonCards = [
  {
    id: 1,
    icon: profileIcon,
    alt: "Profile Management",
    title: "Profile Management",
    description:
      "Allow users to create and edit their profiles, including contact iformation, affiliation, research interests.",
  },
  {
    id: 2,
    icon: academicIcon,
    alt: "Academics",
    title: "Academics",
    description:
      "Access a vast database of projects, get expert writing support, collaborate across institutions, and secure funding for your research.",
  },
  {
    id: 3,
    icon: institutionIcon,
    alt: "Institution",
    title: "Institution",
    description:
      "Enhance your institution's reputation, boost research output, and gain valuable insights to inform academic programs.",
  },
  {
    id: 4,
    icon: organisationIcon,
    alt: "Organisation",
    title: "Organisation",
    description:
      "Tap into a pool of research talent, outsource R&D cost-effectively, and make data-driven business decisions.",
  },
];

interface LeaderboardCardData {
  id: number;
  image: StaticImageData;
  alt: string;
  name: string;
  affiliation: string;
}

export const leaderboardData: LeaderboardCardData[] = [
  {
    id: 1,
    image: prof1,
    alt: "First professor",
    name: "Prof. Alan Chomsky",
    affiliation:
      "Michigan University - Dept. of Natural Science & Climate Change",
  },
  {
    id: 2,
    image: prof2,
    alt: "Second professor",
    name: "Prof. John Smith",
    affiliation: "Stanford University - Dept. of Computer Science",
  },
  {
    id: 3,
    image: prof3,
    alt: "Third professor",
    name: "Prof. Jane Doe",
    affiliation: "Harvard University - Dept. of Medicine",
  },
];
