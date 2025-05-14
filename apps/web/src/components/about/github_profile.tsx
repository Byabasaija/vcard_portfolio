'use client'

import config from '@/config';
import { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const { about } = config;
const {
  firstName,
  lastName,
  preferredName,
  introduction,
  lifestyles,
  techStacks,
  githubUsername,
} = about;

export default function GitHubProfile() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectName) => {
    if (expandedProject === projectName) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectName);
    }
  };

  return (
    <div className="max-w-full text-gray-100 ">
      <h1 className="text-3xl font-bold mb-2">Hello, I'm Pascal Byabasaija 👋</h1>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
        Full-Stack Developer passionate about building elegant solutions to complex problems.
        <br />
        <strong>Currently seeking new opportunities in software development.</strong>
      </blockquote>

      <div className="flex  mb-6">
        <img src="https://img.shields.io/badge/OPEN_TO_WORK-brightgreen?style=for-the-badge" alt="Open To Work" />
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <img 
          src="https://github-readme-stats.vercel.app/api?username=Byabasaija&show_icons=true&theme=tokyonight&count_private=true&hide_border=true&hide=contribs" 
          alt="GitHub Stats" 
          className="h-auto" 
        />
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=Byabasaija&theme=tokyonight&hide_border=true" height="170px"/>
      </div>

      <GitHubCalendar
            username={githubUsername}
            blockSize={12}
            blockMargin={4}
            colorScheme="dark"
            blockRadius={2}
            fontSize={14}
            style={{ fontWeight: "bold" }}
        
          />

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-3">🚀 About Me</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>🔭 I'm a Full-Stack Developer focused on building intuitive, efficient applications</li>
          <li>💡 I love building tools that make life easier for users and businesses</li>
          <li>🌱 Currently expanding my expertise in cloud architecture and AI integration</li>
          <li>💼 Open to full-time roles and freelance projects</li>
          <li>🌍 Open to remote both remote and onsite opportunities worldwide</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-3">🔍 I'm Currently Looking For</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Full-time software development roles</li>
          <li>Opportunities to work with Python/TypeScript/React tech stacks</li>
          <li>Collaborative teams passionate about building great products</li>
          <li>Remote and onsite(open to relocation) positions</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-3">💻 Tech Stack</h2>
        
        <h3 className="text-xl font-semibold mb-2">Backend</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
          <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
          <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
          <img src="https://img.shields.io/badge/Pydantic-5B4ADF?style=for-the-badge&logo=pydantic&logoColor=white" alt="Pydantic" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2">Frontend</h3>
        <div className="flex flex-wrap gap-2">
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
          <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
          <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
          <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="shadcn/ui" />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-3">🛠️ Projects</h2>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button 
            className="w-full text-left px-4 py-3 font-bold bg-onyx focus:outline-none flex justify-between items-center"
            onClick={() => toggleProject('ChatAPI')}
          >
            <span>ChatAPI</span>
            <span>{expandedProject === 'ChatAPI' ? '−' : '+'}</span>
          </button>
          
          {expandedProject === 'ChatAPI' && (
            <div className="p-4 ">
              <p className="mb-2"><strong>Description:</strong> An open source pluggable api for messaging/chat and notifications.</p>
              <p className="mb-2"><strong>Tech Stack:</strong> Python, FastAPI, Celery, RabbitMQ, PostgreSQL, Docker</p>
              <p><strong>Links:</strong> <a href="https://github.com/Byabasaija/chatapi" className="text-blue-600 hover:underline">Repository</a></p>
            </div>
          )}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-3">📫 Connect With Me</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://www.linkedin.com/in/pascal-byabasaija/">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
          </a>
          <a href="mailto:basaijapascal9@gmail.com">
            <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
          </a>
          {/* <a href="https://pascalbyabasaija.vercel.app">
            <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white" alt="Portfolio" />
          </a>
          <a href="https://pascalbyabasaija.vercel.app/resume">
            <img src="https://img.shields.io/badge/Resume-4285F4?style=for-the-badge&logo=google-drive&logoColor=white" alt="Resume" />
          </a> */}
        </div>
      </section>

      <hr className="border-t border-gray-300 my-6" />
      
      <div className="text-center text-gray-300 italic">
        Thanks for visiting my profile! Don't hesitate to reach out if you think we could work together.
      </div>
    </div>
  );
}