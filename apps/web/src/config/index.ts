import { Config } from "@/types/config";
import { MdOutlineDevices, MdAttachment } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy, PiBooks, PiMediumLogoBold } from "react-icons/pi";
import { GoalIcon } from "@primer/octicons-react";
import {
  LuGithub,
  LuPencil,
  LuLinkedin,
  LuRss,
  LuMail,
  LuMapPin,
  LuBookOpen,
  LuLaptop
} from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact, FaAws } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { RiJavaLine, RiJavascriptLine } from "react-icons/ri";
import { SiLatex, SiFastapi, SiKubernetes, SiPostman } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { VscTerminalLinux, VscAzure } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import {
  TbBrandCpp,
  TbBrandTypescript,
  TbBrandGolang,
  TbBrandNextjs,
  TbBrandDjango,
  TbBrandDocker,
  TbBrandMysql,
  TbMarkdown,
  TbBrandAstro,
  TbBrandTerraform,
  TbPhotoSquareRounded,
  TbSql,
  
} from "react-icons/tb";

const config: Config = {
  avatar: "/images/profile.jpeg",
  title: "Pascal Byabasaija - Software Engineer",
  description:
    "I'm Pascal Byabasaija, a Software Engineer with 5+ years of success in Agile Development, Full-Stack Engineering, and Software Architecture.",
  author: "Pascal Byabasaija",
  keywords: [
    "Pascal Byabasaija",
    "Python",
    "FastAPI",
    "Software Engineering",
    "Next.js",
    "React",
  ],
  status: "Building for scale 🚀",
  siteURL: "https://pascalbyabasaija.vercel.app/",
  openGraph: {
    url: "https://pascalbyabasaija.vercel.app/",
    type: "website",
    siteName: "Pascal Byabasaija - Software Engineer",
    title: "Pascal Byabasaija - Software Engineer",
    description:
      "I'm Pascal Byabasaija, a Software Engineer with 5+ years of success in Agile Development, Full-Stack Engineering, and Software Architecture.",
    images: [
      {
        url: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
        width: 1200,
        height: 630,
        alt: "Pascal Byabasaija - Cover Image",
      },
    ],
  },
  navigationLinks: [
    { path: "/", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/post", label: "Post" },
    // { path: "/gallery", label: "Gallery" },
  ],
  contacts: [
    {
      icon: LuMapPin,
      title: "Location",
      content: "Kampala, Uganda 🇺🇬",
    },
    {
      icon: LuMail,
      title: "Email",
      link: "mailto:basaijapascal9@gmail.com",
      content: "basaijapascal9@gmail.com",
    },
    {
      icon: LuGithub,
      title: "GitHub",
      link: "https://github.com/Byabasaija",
      content: "@Byabasaija",
    },
    {
      icon: LuLinkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/pascal-byabasaija/",
      content: "Pascal Byabasaija",
    },
  ],
  socialLinks: [
    {
      url: "https://github.com/Byabasaija",
      icon: LuGithub,
      name: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/pascal-byabasaija/",
      icon: LuLinkedin,
      name: "LinkedIn",
    },
    {
      url: "https://medium.com/@pascalbyabasaija",
      icon: PiMediumLogoBold,
      name: "Medium",
    },
    // {
    //   url: "https://twitter.com/1chooo___",
    //   icon: FaXTwitter,
    //   name: "Twitter",
    // },
    {
      url: `/rss.xml`,
      icon: LuRss,
      name: "RSS Feed",
    },
    {
      url: `/cv`,
      icon: MdAttachment,
      name: "CV",
    },
  ],
  homeMetaData: {
    metadataBase: new URL("https://www.1chooo.com"),
    title: "Pascal Byabasaija - Software Engineer",
    description:
      "I'm Pascal Byabasaija, a Software Engineer with 5+ years of success in Agile Development, Full-Stack Engineering, and Software Architecture.",
    authors: [{ name: "Pascal Byabasaija" }],
    creator: "Pascal Byabasaija",
    keywords: [
      "Pascal Byabasaija",
      "1chooo",
      "Software Engineering",
      "Next.js",
      "React",
    ],
    openGraph: {
      url: "https://pascalbyabasaija.vercel.app",
      type: "website",
      siteName: "Pascal Byabasaija - Software Engineer",
      title: "Pascal Byabasaija - 1chooo | Open Source Enthusiast",
      description:
        "I'm Pascal Byabasaija, a Software Engineer with 5+ years of success in Agile Development, Full-Stack Engineering, and Software Architecture.",
      images: [
        {
          url: "https://unsplash.com/photos/black-remote-control-on-red-table-6sAl6aQ4OWI",
          width: 1200,
          height: 630,
          alt: "Pascal Byabasaija - 1chooo Cover Image",
        },
      ],
    },
    manifest: "/manifest.json",
    twitter: {
      card: "summary_large_image",
      title: "Pascal Byabasaija - Software Engineer",
      description:
        "I'm Pascal Byabasaija, a Software Engineer with 5+ years of success in Agile Development, Full-Stack Engineering, and Software Architecture.",
    
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: [
        {
          url: "/logo192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
  },
  about: {
    firstName: "Pascal",
    lastName: "Byabasaija",
    middleName: "",
    preferredName: "",
    additionalName: "",
    pronouns: "He/Him",
    githubUsername: "Byabasaija",
    introduction: `
**Experienced Software Engineer** with 5+ years of success in Agile Development, Full-Stack Engineering, and Software Architecture. **Served as CTO and Project Lead** at fast-paced startups, driving high-impact projects and engineering excellence. **Proven track record** of building scalable, high-quality solutions with modern technologies. **Known for leading lean teams** and delivering over 60% improvement in engineering productivity. 🚀

**Self-motivated, Team player, Love coding 👨🏻‍💻**
    `,
    lifestyles: [
      
        {
          icon: LuBookOpen,
          title: "Studying",
          text: "Continuously learning programming concepts and exploring books on entrepreneurship, personal development, and innovative technologies.",
        },
        {
          icon: LuPencil,
          title: "Technical writing",
          text: "Passionate about sharing knowledge and experiences through technical writing.",
        },
        {
          icon: LuLaptop,
          title: "Hackathons",
          text: "Regular hackathon participant with expertise in rapid prototyping and collaborative problem-solving.",
        },
        {
          icon: GoalIcon,
          title: "Athletics",
          text: "Dedicated marathon runner who finds meditation and peak performance through long-distance running.",
        },
        
    ],
    techStacks: {
      programmingLanguages: [
        { name: "Python", icon: AiOutlinePython },
        { name: "TypeScript", icon: TbBrandTypescript },
        { name: "SQL", icon: TbSql },
        { name: "JavaScript", icon: RiJavascriptLine },
        
      ],
      frameworks: [
        { name: "React", icon: FaReact },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Flask", icon: BiLogoFlask },
        { name: "Linux Terminal", icon: VscTerminalLinux },
        { name: "AWS", icon: FaAws },
        { name: "Next.js", icon: TbBrandNextjs },
        { name: "Docker", icon: TbBrandDocker },
        { name: "MySQL", icon: TbBrandMysql },
        { name: "Postman", icon: SiPostman },
      ],
    },
  },
  resume: {
    educations: {
      icon: IoSchoolOutline,
      title: "Education",
      items: [
        
        {
          company: "Microverse Inc",
          location: "San Fransinco, CA",
          role: "Fullstack Software Development",
          duration: "Mar. 2020 - Oct. 2020 ",
          tasksMarkdown: `
- **Dedicated over 1,500 hours to mastering web development** remotely,
collaborating with a global community of software developers.
- **Actively participated in peer-to-peer code reviews with over 50 different
students** improving code quality by incorporating feedback and
enhancing collaborative learning.
- **Contributed to real-world projects by applying** newly acquired skills to
develop over 5 practical, production-ready applications.

        `,
        },
        {
          company: "Ndejje University",
          location: "Kampala, Uganda",
          role: "Bachelors in Information Technology",
          duration: "Aug. 2020 — Oct. 2023",
          tasksMarkdown: `
- **Coursework included programming in:** C++ and PHP, Database and System
administration, Operating systems, Project management, Communication
skills, Research methods etc.

        `,
        },
      ],
    },
    awardLeaderships: {
      icon: PiTrophy,
      title: "Award & Leaderships",
      items: [
        {
          company: "2023 Weather Hackathon",
          location: "Taipei, Taiwan",
          role: "Team Leader, Full Stack Developer",
          duration: "May, 2023 - Aug, 2023",
          tasksMarkdown: `
- The second place winner, as well as the Executive Yuan Sustainability Special Award 
<sup>[[News](https://www.weatherrisk.com/post/%E7%AC%AC%E4%BA%8C%E5%B1%86-%E5%A4%A9%E6%B0%A3%E9%BB%91%E5%AE%A2%E6%9D%BE-%E5%9C%93%E6%BB%BF%E6%88%90%E5%8A%9F%EF%BC%8Cesg%E3%80%81%E6%B0%B8%E7%BA%8C%E8%AD%B0%E9%A1%8C%E5%8F%97%E8%A9%95%E5%AF%A9%E8%A6%AA%E7%9D%9E)] | 
[[GitHub](https://github.com/Weather-Shakespeare)] | 
[[Blog](https://weather-shakespeare.github.io/)]</sup>
        `,
        },
      ],
    },
    teachingExperiences: {
      icon: PiBooks,
      title: "Teaching",
      items: [
        {
          company: "National Central University",
          location: "Taoyuan, Taiwan",
          role: "Teaching Assistant",
          duration: "Feb. 2021 - Jun. 2024",
          tasksMarkdown: `
- GS4538 Linux and Edge Computing, 24 Spring, Dr. Chia-Kai Chang <sup>[[Website](https://ncuedu.tw/course/linux)] | [[GitHub](https://github.com/NCU-GS4538-Linux)]</sup>
- AP4064 Weather and Artificial Intelligence II, 24 Spring, Mr. Che-Wei Chou <sup>[[GitHub](https://github.com/weather-and-ai)]</sup>
- AP4063 Weather and Artificial Intelligence I, 23 Fall, Mr. Che-Wei Chou <sup>[[GitHub](https://github.com/weather-and-ai)]</sup>
- GS4719 Python Programming, 23 Fall, Dr. Chia-Kai Chang <sup>[[Website](https://ncuedu.tw/course/python)] | [[GitHub](https://github.com/NCU-GS4719-Python)]</sup>
- Freshman English, 22 Fall & 23 Spring Dr. Chen, Jou-Yin
- Student Service-Learning, 21 Spring, Prof. Wei-Yu Chang
        `,
        },
      ],
    },
    professionalExperiences: {
      icon: MdOutlineDevices,
      title: "Professional Experience",
      items: [
        {
          company: "Dissimilar Media(formerly Backlink Africa)",
          location: "Kampala, Uganda",
          role: "Chief Technology Officer",
          duration: "Jan. 2025 - Present",
          tasksMarkdown: `
- Promoted to CTO after leading the successful delivery of Monetize 54,
completing the project 5x faster than prior teams and accelerating the
company’s go-to-market timeline by 3 months.
- Redesigned the technical architecture to support 10x more users, enabling
the platform to scale smoothly during early growth without service
interruptions.
- Built and led a lean dev team of less than 5 engineers, increasing sprint
velocity by 40% and cutting feature delivery time in half within 6 months..
          `,
        },
        {
          company: "Dissimilar Media(formerly Backlink Africa)",
          location: "Kampala, Uganda",
          role: "Fullstack Software Engineer",
          duration: "May. 2024 - Present",
          tasksMarkdown: `
- Spearheaded the full-stack development and launch of Monetize 54, a digital services marketplace, integrating front-end (NextJS 14), back-end (FastAPI), and database (MongoDB) components.
- Integrated PayPal payments into Monetize 54, enabling secure and seamless transactions for users and contributing to a 20% increase in successful payment processing within the first quarter.
- Implemented secure, in-app messaging functionality for Monetize 54, enhancing user communication and leading to a 15% improvement in user engagement metrics.
- Developed and deployed recommendation algorithms for Monetize 54, resulting in a 10% uplift in cross-selling of services and an improved user experience.
- Engineered fast full-text search capabilities for Monetize 54 using Typesense, reducing search query times by 60% and improving user satisfaction.
- Designed and optimized cloud infrastructure on Hetzner using Docker and Traefik, with CI/CD pipelines enabling seamless deployments—resulting in a 30% improvement in platform performance and a 25% reduction in hosting costs.
          `,
        },
        {
          company: "Mara Scientific",
          location: "Kampala, Uganda",
          role: "Project Lead",
          duration: "Oct 2023 - March. 2024",
          tasksMarkdown: `
- Was promoted to Project Lead after resolving a critical project delay, successfully mediating between client, management, and engineering teams, resulting in a 60% improvement in delivery times.
- Collaborated with the DevOps team to increase system uptime from 60% to 90% by optimizing infrastructure and scaling systems to handle increased demand and traffic.
- Introduced the deployment of cloud-based and offline instances of the Mpeke HMIS, delivering tailored solutions for both digitized and non-digitized hospitals. This increased customer satisfaction by 15%.
- Led a team of 6 engineers to deploy over 10 stalled key features, implementing a new development process that reduced bottlenecks by 30% and improved project efficiency by 25%.
- Served as the primary liaison between the engineering team and clients, clarifying project goals and timelines, which rebuilt client trust and increased satisfaction by 20%.
- Worked closely with senior management to align engineering efforts with business objectives, playing a key role in strategic planning for new product features and driving a 25% increase in product adoption rates.
          `,
        },
        {
          company: "Mara Scientific",
          location: "Kampala, Uganda",
          role: "Fullstack Software Engineer",
          duration: "Nov. 2020 - Oct. 2023",
          tasksMarkdown: `
- Spearheaded the development of intuitive user interfaces for healthcare applications using React, resulting in a 40% improvement in user satisfaction ratings from medical professionals interacting with the systems.
- Transitioned to Full-Stack Developer by quickly learning Python and Flask, bridging frontend and backend teams and ensuring smooth project progression, reducing feature completion time by 40%.
- Provided technical support to customers, particularly during system downtimes, ensuring swift issue resolution and minimal service disruption by 20%.
- Implemented code linting rules across the codebase, improved code quality, reduced code review time by 30%, and decreased post-deployment bugs.
          `,
        },
      ],
    },
  },
  jsonLdPerson: {
    "@context": "http://schema.org",
    "@type": "Person",
    "@id": "https://www.1chooo.com/#person",
    givenName: "Chun-Ho",
    familyName: "Lin",
    additionalName: "Hugo",
    gender: "male",
    birthPlace: "New Taipei, TW",
    nationality: "Taiwan",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "National Central University",
        sameAs: "https://www.ncu.edu.tw/",
      },
    ],
    jobTitle: "Software Engineer",
    skills: "Software Engineering, Web Development, Open Source",
    image: "https://www.1chooo.com/images/profile.webp",
    url: "https://www.1chooo.com",
    sameAs: [
      "https://www.linkedin.com/in/1chooo/",
      "http://github.com/1chooo",
      "https://medium.com/@1chooo",
    ],
  },
  giscusConfig: {
    id: "comments",
    repo: "1chooo/1chooo.com",
    repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "",
    category: "General",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CONFIG_CATEGORY_ID || "",
    mapping: "pathname",
    term: "Welcome to @giscus/react component!",
    reactionsEnabled: "1",
    emitMetadata: "1",
    inputPosition: "bottom",
    theme: "dark_tritanopia",
    lang: "en",
    loading: "lazy",
  },
  googleAnalyticId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || "",
};

export default config;
