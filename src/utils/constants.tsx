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

export const setUsApart = [
  {
    id: 1,
    icon: profileIcon,
    alt: "Community",
    title: "Community",
    description:
      "    Join a thriving research community. Collaborate with over 300 institutions to advance African research.",
  },
  {
    id: 2,
    icon: academicIcon,
    alt: "Data Driven",
    title: "Data Driven",
    description:
      "Make data-driven decisions. Uncover research trends and measure your impact.",
  },
  {
    id: 3,
    icon: institutionIcon,
    alt: "Support",
    title: "Support",
    description:
      "Fuel your research with the funding you need. Turn your ideas into reality.",
  },
];

// Interface for Form Field
interface FormFieldConfig {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}

// Data for Form Fields
export const formFields: FormFieldConfig[] = [
  {
    id: "firstName",
    label: "First Name",
    name: "firstName",
    placeholder: "Enter your first name",
    required: true,
  },
  {
    id: "lastName",
    label: "Last Name",
    name: "lastName",
    placeholder: "Enter your last name",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    required: true,
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    name: "phoneNumber",
    placeholder: "+234 012 3456 789",
    required: true,
  },
  {
    id: "field",
    label: "Field - (Academic category)",
    name: "field",
    placeholder: "Enter your field",
    required: true,
  },
  {
    id: "categories",
    label: "Categories - (What type of research)",
    name: "categories",
    placeholder: "Enter your research category",
    required: true,
  },
];

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

export const articlesBlog: Article[] = [
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
    label: "Education",
    authorImg: "/articleAuthor.jpg",
    authorName: "Micheal Angelo",
    date: "Jan 20, 2023 • 11 min read",
    title: "Unleashing Creativity in the Classroom",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus rem nulla est itaque sint totam voluptatem illo voluptas sunt saepe odit, dolorum libero, quod aperiam quibusdam nostrum minima laborum?",
    readMoreLink: "#",
  },
];

export const accordionItems = [
  {
    title: "How can students use Everey AAP? ",
    content: "Launch your research career with our student-focused resources.",
  },
  {
    title: "What resources are available for faculty?  ",
    content: "Access tools and support to excel in your research role.",
  },
  {
    title: "How can researchers access tools and databases?  ",
    content: "Find the resources you need to advance your research.",
  },
  {
    title: "How does the manuscript submission process work?  ",
    content: "Submit your manuscript with ease and confidence.",
  },
  {
    title: "How does the peer review process work?",
    content: "Benefit from expert feedback to strengthen your research.",
  },
];

// Define TypeScript interface for career fields
interface CareerField {
  field: string;
}
// Static data for career fields (can be moved to a separate file or fetched from an API)
export const defaultCareerFields: CareerField[] = [
  { field: "Art & Humanities" },
  { field: "Biomedical" },
  { field: "Computer Science" },
  { field: "Education" },
  { field: "Environmental Science" },
  { field: "Engineering" },
  { field: "Social Sciences" },
  { field: "History" },
  { field: "Law" },
  { field: "Medicine" },
  { field: "Physics" },
  { field: "Psychology" },
];
