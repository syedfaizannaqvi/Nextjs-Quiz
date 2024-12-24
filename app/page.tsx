// components/QuestionList.js
import React from 'react';

const questions = [
  {
    question: "What is Next.js primarily used for?",
    options: ["Backend development", "Data science", "Frontend development", "Mobile app development"],
    answer: "Frontend development"
  },
  {
    question: "What is server-side rendering (SSR) in Next.js?",
    options: ["Rendering pages on the client-side only", "Generating HTML on the server for each request", "Using CSS for styling components", "Creating APIs with Node.js"],
    answer: "Generating HTML on the server for each request"
  },
  {
    question: "Which command is used to create a new Next.js project?",
    options: ["npm init next-app", "create-next-app my-app", "npx create-next-app my-app", "npm create-next-app"],
    answer: "npx create-next-app my-app"
  },
  {
    question: "In Next.js, what file is used to configure custom server settings?",
    options: ["server.js", "next.config.js", "custom-server.js", "server-settings.js"],
    answer: "next.config.js"
  },
  {
    question: "How can you enable static site generation (SSG) for a page in Next.js?",
    options: ["By using getServerSideProps", "By using getStaticProps", "By using useEffect", "By using staticConfig"],
    answer: "By using getStaticProps"
  },
  {
    question: "What is the purpose of the _app.js file in Next.js?",
    options: ["To define API routes", "To initialize a Next.js project", "To customize the main entry point of the application", "To configure database settings"],
    answer: "To customize the main entry point of the application"
  },
  {
    question: "Which method is used to handle API requests in Next.js?",
    options: ["getStaticProps", "getServerSideProps", "getInitialProps", "API routes"],
    answer: "API routes"
  },
  {
    question: "What does the Link component in Next.js do?",
    options: ["It adds a CSS framework", "It fetches data from an API", "It enables client-side navigation", "It sets up server configuration"],
    answer: "It enables client-side navigation"
  },
  {
    question: "How can you add custom styles in a Next.js application?",
    options: ["By using inline styles only", "By importing CSS files directly into a component", "By using an external CSS framework only", "By using getStaticProps"],
    answer: "By importing CSS files directly into a component"
  },
  {
    question: "What is the main advantage of using static site generation (SSG) with Next.js?",
    options: ["Faster page load times", "Dynamic content updates", "Easier backend integration", "Real-time data fetching"],
    answer: "Faster page load times"
  },
  {
    question: "Which Next.js function is used to fetch data at request time for pre-rendering?",
    options: ["getStaticProps", "getServerSideProps", "useEffect", "fetchData"],
    answer: "getServerSideProps"
  },
  {
    question: "What is the default file for defining custom document structure in Next.js?",
    options: ["_app.js", "document.js", "_document.js", "main.js"],
    answer: "_document.js"
  },
  {
    question: "How do you create dynamic routes in Next.js?",
    options: ["Using query parameters", "Using brackets in the file name", "Using dynamic imports", "Using Redux"],
    answer: "Using brackets in the file name"
  },
  {
    question: "Which command is used to start a Next.js development server?",
    options: ["npm run start", "npm run build", "npm run dev", "npm start"],
    answer: "npm run dev"
  },
  {
    question: "What feature does Next.js offer for image optimization?",
    options: ["NextImage", "ImageOptimizer", "next/image", "ImgOptimization"],
    answer: "next/image"
  },
  {
    question: "What is the purpose of next/head in Next.js?",
    options: ["To define server-side logic", "To manage application state", "To modify the <head> section of a page", "To add CSS styles"],
    answer: "To modify the <head> section of a page"
  },
  {
    question: "How can you create API routes in Next.js?",
    options: ["By creating files in the pages/api directory", "By adding functions in _app.js", "By using the Link component", "By importing next/config"],
    answer: "By creating files in the pages/api directory"
  },
  {
    question: "What does getStaticPaths do in Next.js?",
    options: ["Fetches data at request time", "Defines dynamic routes to pre-render pages", "Handles API requests", "Manages application state"],
    answer: "Defines dynamic routes to pre-render pages"
  },
  {
    question: "How can you enable incremental static regeneration in Next.js?",
    options: ["By using getServerSideProps", "By using getStaticProps with a revalidate key", "By using useEffect", "By using next/link"],
    answer: "By using getStaticProps with a revalidate key"
  },
  {
    question: "What does next/link enable in a Next.js application?",
    options: ["Server-side rendering", "Static site generation", "Client-side navigation", "API routes"],
    answer: "Client-side navigation"
  },
  {
    question: "Which lifecycle method is not available in Next.js functional components?",
    options: ["componentDidMount", "useEffect", "useState", "componentDidUpdate"],
    answer: "componentDidMount"
  },
  {
    question: "What is a key feature of Next.js that improves SEO?",
    options: ["Client-side rendering", "Server-side rendering", "CSS modules", "WebSockets"],
    answer: "Server-side rendering"
  },
  {
    question: "How do you handle 404 pages in Next.js?",
    options: ["Create a custom 404 component", "Modify _app.js", "Use next/404", "Configure next.config.js"],
    answer: "Create a custom 404 component"
  },
  {
    question: "How can you add environment variables in a Next.js project?",
    options: ["Directly in JavaScript files", "In next.config.js", "Using a .env file", "Using next/env"],
    answer: "Using a .env file"
  },
  {
    question: "What command is used to build a Next.js application for production?",
    options: ["npm run dev", "npm run start", "npm run build", "npm run test"],
    answer: "npm run build"
  },
  {
    question: "Which component in Next.js is used to handle client-side routing?",
    options: ["next/route", "Link", "next/navigation", "Router"],
    answer: "Link"
  },
  {
    question: "What is the main benefit of using getInitialProps in Next.js?",
    options: ["To add global styles", "To manage component state", "To fetch data on both server and client side", "To create dynamic routes"],
    answer: "To fetch data on both server and client side"
  },
  {
    question: "How can you customize the HTML <head> tag in Next.js?",
    options: ["By editing index.html", "Using next/head", "Modifying next.config.js", "Using _app.js"],
    answer: "Using next/head"
  },
  {
    question: "What does the next/image component optimize?",
    options: ["JavaScript", "Images", "CSS", "HTML"],
    answer: "Images"
  },
  {
    question: "Which directory is used for static files in a Next.js project?",
    options: ["/public", "/static", "/assets", "/content"],
    answer: "/public"
  },
  {
    question: "How do you enable CSS modules in Next.js?",
    options: ["By using inline styles", "By importing CSS files", "By naming CSS files with .module.css", "By using styled-components"],
    answer: "By naming CSS files with .module.css"
  },
  {
    question: "What is the purpose of next/router in Next.js?",
    options: ["To handle server-side rendering", "To manage application state", "To enable client-side navigation", "To fetch data from APIs"],
    answer: "To enable client-side navigation"
  },
  {
    question: "What command is used to run tests in a Next.js project?",
    options: ["npm run dev", "npm run build", "npm test", "npm run test"],
    answer: "npm run test"
  },
  {
    question: "How can you create a catch-all route in Next.js?",
    options: ["Using getServerSideProps", "Using getStaticProps", "Using [...param].js", "Using next/link"],
    answer: "Using [...param].js"
  },
  {
    question: "Which Next.js function is used for server-side rendering?",
    options: ["getStaticProps", "getServerSideProps", "useEffect", "fetchData"],
    answer: "getServerSideProps"
  },
  {
    question: "What is the purpose of next/head in a Next.js project?",
    options: ["To define server-side logic", "To manage global state", "To modify the <head> of the document", "To add global styles"],
    answer: "To modify the <head> of the document"
  },
  {
    question: "How can you enable TypeScript in a Next.js project?",
    options: ["By installing TypeScript and adding a tsconfig.json", "By modifying next.config.js", "By using next/typescript", "By adding TypeScript files in the pages directory"],
    answer: "By installing TypeScript and adding a tsconfig.json"
  },
  {
    question: "What is the purpose of getStaticPaths in Next.js?",
    options: ["To fetch data at request time", "To define dynamic routes for static generation", "To handle client-side routing", "To manage global state"],
    answer: "To define dynamic routes for static generation"
  },
  {
    question: "How do you perform client-side navigation in Next.js?",
    options: ["Using HTML <a> tags", "Using the Link component", "Using the Router component", "Using navigate function"],
    answer: "Using the Link component"
  },
  {
    question: "What is the main purpose of next.config.js in Next.js?",
    options: ["To handle client-side routing", "To configure Next.js application settings", "To define API routes", "To add global styles"],
    answer: "To configure Next.js application settings"
  },
  {
    question: "How can you add global CSS styles in a Next.js project?",
    options: ["By importing CSS files in _app.js", "By using inline styles", "By adding CSS in next.config.js", "By using CSS modules"],
    answer: "By importing CSS files in _app.js"
  },
  {
    question: "What is a significant advantage of using server-side rendering (SSR) with Next.js?",
    options: ["Better SEO", "Faster build times", "Real-time updates", "Smaller bundle sizes"],
    answer: "Better SEO"
  },
  {
    question: "How do you create API endpoints in Next.js?",
    options: ["By adding functions in next.config.js", "By creating files in the pages/api directory", "By using next/server", "By using next/api"],
    answer: "By creating files in the pages/api directory"
  },
  {
    question: "What is the purpose of next/router?",
    options: ["To handle server-side rendering", "To fetch data from APIs", "To enable client-side navigation", "To add global styles"],
    answer: "To enable client-side navigation"
  },
];

const QuestionList = () => (
  <div className="container">
  <h1 className='text-3xl text-center mb-10 font-semibold'>Next.js Quiz</h1>
  {questions.map((q, index) => (
    <div key={index} className="question">
      <div className="question-title">
        <h3 className='font-medium'>{index + 1}. {q.question}</h3>
      </div>
      <ul className="options">
        {q.options.map((option, idx) => (
          <li key={idx} className="option">
            {option}
            {option === q.answer && <span className="correct-answer"> (Correct Answer)</span>}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
);

export default QuestionList;