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
  siteURL: "https://www.1chooo.com",
  openGraph: {
    url: "https://www.1chooo.com/",
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
    { path: "/gallery", label: "Gallery" },
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
      url: "https://www.1chooo.com/",
      type: "website",
      siteName: "Pascal Byabasaija - Software Engineer",
      title: "Pascal Byabasaija - 1chooo | Open Source Enthusiast",
      description:
        "I'm Pascal Byabasaija, a Software Engineer with 5+ years of success in Agile Development, Full-Stack Engineering, and Software Architecture.",
      images: [
        {
          url: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
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
        "I'm Pascal Byabasaija, a graduate with a Bachelor's degree from National Central University (NCU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
      images: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
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
        icon: LuGithub,
        title: "Open Source",
        text: "Actively contributing to open source projects on GitHub.",
      },
      {
        icon: LuPencil,
        title: "Storytelling",
        text: "Love to share my knowledge and experience with others.",
      },
      {
        icon: GoalIcon,
        title: "Workouts",
        text: "Basketball and weight training defines my active workout lifestyle.",
      },
      {
        icon: TbPhotoSquareRounded,
        title: "Photography",
        text: "Sky brings freedom; streets, a reminder of others' contributions.",
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
          company: "Ndejje University",
          location: "Kampala, Uganda",
          role: "Bachelors in Information Technology",
          duration: "Sep. 2020 — Jun. 2024",
          tasksMarkdown: `
- **Minor Specialty:** Computer Science & Information Engineering
- **Graduate-level Courses:** The Attack and Defense of Computers, Object-Oriented Analysis and Design.
- **B.S.-level Courses:** Software Engineering, Principles of Programming Languages, Assembly Language and System Programming, Operating System, Computer Network, Algorithmics, Data Structures, Digital Design, Numerical Analysis
- TA: Linux and Edge Computing, Programming Python, Weather and Artificial Intelligence, Freshman English, Student Service-Learning
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
          company: "eCloudvalley Digital Technology",
          location: "New Taipei, Taiwan",
          role: "Cloud Engineer Intern",
          duration: "Mar. 2024 - May. 2024",
          tasksMarkdown: `
- Led a team of 5 to enhance issue pools with AWS Bedrock, boosting cloud support efficiency by 80% through multi-language support and 95% accurate image recognition. Honored as the top-achieving internship team.
- Utilized a serverless architecture on AWS Lambda, performing troubleshooting with CloudWatch, deployed via AWS CDK, and integrated with DynamoDB and Bedrock services.
- Documented issues in 10+ mock cases, such as VPC entry failures, EC2 Apache server restarts, and S3 photo access problems, and provided detailed solutions for interns. Refer [here](https://github.com/1chooo/ecv-training-materials/tree/main/msp/aws_challenge) for a comprehensive list.
          `,
        },
        {
          company: "Amazon Web Services",
          location: "Taipei, Taiwan",
          role: "Campus Ambassador",
          duration: "Aug. 2023 - Jan. 2024",
          tasksMarkdown: `
- Educated 700+ cloud developers and achieved 96% user satisfaction by conducting 2 technical workshops, developing an open-source project, and 1 UAD with AWS cloud services. Refer [here](https://github.com/aws-educate-tw/aws-line-business-card-workshop) for the source code.
- Conducted a comprehensive 35+ page market research study on cloud suppliers as part of an 11-member team.
          `,
        },
        {
          company: "PEGATRON Corporation",
          location: "Taipei, Taiwan",
          role: "Software Engineer Intern",
          duration: "Jul. 2023 - Aug. 2023",
          tasksMarkdown: `
- Executed a POC, adapting an LLM model for Smart Manufacturing, and was awarded Silver internship team.
- Collaborated with a team of 5, utilized Git, a CI/CD pipeline, and followed an agile Scrum workflow.
- Implemented Prompt Engineering and LangChain for the NVIDIA Ominerve visual robot, enabling seamless speech/text operation, boosting test support by 83% across 6-11 scenarios with 85% stability.
          `,
        },
        {
          company: "National Central University",
          location: "Taoyuan, Taiwan",
          role: "Website Developer",
          duration: "Jul. 2022 - Jan. 2023",
          tasksMarkdown: `
- Partnered with a team of 2 to develop a multi-user score management system for the Center for Teacher Education, reducing credit exemption processing time by 80% and remotely maintaining the server via SSH.
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
