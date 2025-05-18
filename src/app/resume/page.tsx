"use client";
import Link from 'next/link'
import Image from 'next/image';

export default function Resume() {
  const projects = [
    {
      title: 'Financial Research Agent',
      description:
        'Multi‑agent LLM pipeline that synthesizes decades of fundamentals and real‑time news into an exportable markdown report. Built with LangChain, OpenAI, and Streamlit.',
      github: 'https://github.com/himmannshu/stock-market-agents',
      image: '/images/financial-research-agent.png',
      tech: ['LangChain', 'OpenAI', 'Streamlit'],
    },
    {
      title: 'Danse Macabre – AR Spell‑Casting Shooter',
      description:
        'Mixed‑reality Quest 3 game with gesture‑based spell‑casting, enemy AI, and real‑world occlusion. Built in Unity XR Hands & MR Utility Kit.',
      github: 'https://github.com/himmannshu/ar-final-project',
      image: '/images/danse-macabre.png',
      tech: ['Unity', 'XR Hands', 'MR Utility Kit'],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 dark:bg-black bg-black">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 dark:bg-gray-900 bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center md:items-start gap-8 w-full md:sticky md:top-8" aria-label="Sidebar with profile, skills, education, tech stack, and certifications">
          {/* Profile Section */}
          <div className="flex flex-col items-center md:items-start w-full">
            <Image
              src="/images/himanshu.jpg"
              alt="Himanshu profile photo"
              width={120}
              height={120}
              priority
              className="rounded-full shadow-lg mb-4"
            />
            <h1 className="text-3xl font-bold mb-1 text-center md:text-left text-white">Fnu Himanshu</h1>
            <p className="text-base text-gray-300 mb-2 text-center md:text-left">
              MS CS candidate & AI/ML enthusiast focused on building data‑driven products that bridge machine intelligence with immersive user experiences.
            </p>
            <div className="flex gap-3 mt-2 mb-2">
              <a
                href="https://github.com/himmannshu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full dark:bg-gray-700 bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-100">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/himanshu00/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full dark:bg-gray-700 bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-400">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Skills */}
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2 border-b pb-1 text-white">Skills</h2>
            <div className="grid grid-cols-1 gap-2">
              <div>
                <h3 className="text-lg font-medium mb-1 text-white">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-900 text-blue-200 rounded-full px-3 py-1 text-sm font-semibold">Java</span>
                  <span className="inline-block bg-blue-900 text-blue-200 rounded-full px-3 py-1 text-sm font-semibold">JavaScript/TypeScript</span>
                  <span className="inline-block bg-blue-900 text-blue-200 rounded-full px-3 py-1 text-sm font-semibold">Python</span>
                  <span className="inline-block bg-blue-900 text-blue-200 rounded-full px-3 py-1 text-sm font-semibold">SQL</span>
                  <span className="inline-block bg-blue-900 text-blue-200 rounded-full px-3 py-1 text-sm font-semibold">C#</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-white">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">PyTorch</span>
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">Angular</span>
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">NestJS</span>
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">Express</span>
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">Node.js</span>
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">Docker</span>
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">PowerBI</span>
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">Git</span>
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">VS Code</span>
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">Unity</span>
                  <span className="inline-block bg-green-900 text-green-200 rounded-full px-3 py-1 text-sm font-semibold">Eclipse</span>
                </div>
              </div>
            </div>
          </div>
          {/* Tech Stack */}
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2 border-b pb-1 text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 mt-2">
              <span title="Python" className="flex items-center gap-1 bg-gray-800 text-white rounded-lg px-2 py-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1.1 0-2 .9-2 2v2h4V4c0-1.1-.9-2-2-2zm-6 6c-1.1 0-2 .9-2 2v2h4V8c0-1.1-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2v2h4V8c0-1.1-.9-2-2-2zm-6 6c-1.1 0-2 .9-2 2v2h4v-2c0-1.1-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2v2h4v-2c0-1.1-.9-2-2-2z"/></svg>
                Python
              </span>
              <span title="JavaScript" className="flex items-center gap-1 bg-yellow-800 text-white rounded-lg px-2 py-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2 2h20v20H2V2zm10 17.5c-1.1 0-2-.9-2-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h2v2h2v2h-2v2h2v2h-2v2h2c0 1.1-.9 2-2 2z"/></svg>
                JavaScript
              </span>
              <span title="TypeScript" className="flex items-center gap-1 bg-blue-800 text-white rounded-lg px-2 py-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2 2h20v20H2V2zm10 17.5c-1.1 0-2-.9-2-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h2v2h2v2h-2v2h2v2h-2v2h2c0 1.1-.9 2-2 2z"/></svg>
                TypeScript
              </span>
              <span title="React" className="flex items-center gap-1 bg-cyan-800 text-white rounded-lg px-2 py-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                React
              </span>
              <span title="Node.js" className="flex items-center gap-1 bg-green-800 text-white rounded-lg px-2 py-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                Node.js
              </span>
              <span title="Docker" className="flex items-center gap-1 bg-blue-900 text-white rounded-lg px-2 py-1 text-sm font-medium">
                🐳 Docker
              </span>
              <span title="Unity" className="flex items-center gap-1 bg-gray-700 text-white rounded-lg px-2 py-1 text-sm font-medium">
                🎮 Unity
              </span>
              <span title="Git" className="flex items-center gap-1 bg-orange-800 text-white rounded-lg px-2 py-1 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                Git
              </span>
            </div>
          </div>
          {/* Education */}
          <div className="w-full rounded-xl bg-gray-800 border border-gray-700 p-4 mb-2 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 border-b pb-1 flex items-center gap-2 text-white">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" /></svg>
              Education
            </h2>
            <div className="mb-3 flex items-start gap-2">
              <span className="mt-1 text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" /></svg>
              </span>
              <div>
                <h3 className="text-base font-bold text-blue-300">Master of Science in Computer Science</h3>
                <span className="text-gray-400 text-sm">Aug 2024 - Dec 2025</span>
                <div className="text-sm text-gray-200">University of Arkansas, Fayetteville, AR</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" /></svg>
              </span>
              <div>
                <h3 className="text-base font-bold text-blue-300">Bachelor of Science in Computer Science</h3>
                <span className="text-gray-400 text-sm">Aug 2017 - May 2021</span>
                <div className="text-sm text-gray-200">Virginia Tech, Blacksburg, VA</div>
              </div>
            </div>
          </div>
          {/* Certifications & Awards */}
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2 border-b pb-1 text-white">Certifications & Awards</h2>
            <ul className="list-disc pl-5 text-sm text-gray-200">
              <li>AWS Certified Solutions Architect – Associate</li>
              <li>Unity Certified Associate: Game Developer</li>
              <li>Dean's List, Virginia Tech (2018-2021)</li>
            </ul>
          </div>
        </aside>
        {/* Main Content */}
        <section className="md:col-span-2 flex flex-col gap-12 w-full" aria-label="Main resume content">
          {/* Download PDF Resume Button */}
          <div className="flex justify-end mb-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Download PDF Resume
            </a>
          </div>
          {/* Back to Home Button (always visible at top of main content) */}
          <Link
            href="/"
            className="flex items-center gap-2 mb-6 text-blue-400 hover:text-blue-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 w-fit"
            aria-label="Back to Home"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          {/* Projects */}
          <section className="mb-0">
            <div className="rounded-2xl shadow-lg bg-gray-800 p-8 border border-gray-700">
              <h2 className="text-3xl font-semibold mb-8 border-b pb-3 text-white">Projects</h2>
              <div className="grid gap-6">
                {projects.map((proj) => (
                  <article
                    key={proj.title}
                    className="flex flex-col lg:flex-row gap-8 rounded-xl shadow-md p-6 bg-gray-900 border border-gray-700 transition-transform transition-shadow duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group animate-fade-in-up"
                  >
                    {/* Project Image */}
                    <div className="w-full lg:w-48 flex-shrink-0 flex items-center justify-center mb-4 lg:mb-0">
                      <Image
                        src={proj.image || '/images/project-placeholder.png'}
                        alt={proj.title + ' screenshot'}
                        width={192}
                        height={108}
                        className="rounded-lg object-cover border border-gray-700"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium mb-2 text-white">{proj.title}</h3>
                      <p className="mb-4 text-gray-300">{proj.description}</p>
                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tech && proj.tech.map((tech) => (
                          <span key={tech} className="inline-block bg-purple-900 text-purple-200 rounded-full px-3 py-1 text-xs font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        View on GitHub →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          {/* Professional Experience */}
          <section className="mb-0">
            <div className="rounded-2xl shadow-lg bg-gray-800 p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-white">Professional Experience</h2>

              <div className="relative pl-6 before:content-[''] before:absolute before:top-0 before:left-2 before:w-1 before:h-full before:bg-gray-700 before:rounded-full">
                {/* Timeline Item: Data Analyst */}
                <div className="mb-10 relative transition-all duration-500 ease-out opacity-0 translate-y-4 animate-fade-in-up">
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 border-4 border-gray-800 rounded-full z-10"></div>
                  <div className="ml-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-medium text-white">Data Analyst</h3>
                      <span className="text-gray-400">Aug 2024 - Present</span>
                    </div>
                    <div className="text-lg mb-2 text-gray-200">University of Arkansas, Fayetteville, AR</div>
                    <ul className="list-disc pl-5 space-y-2">
                      {[
                        'Delivered data-driven insights that improved student engagement and increased overall satisfaction ratings, helping student organizations tailor their initiatives.',
                        'Streamlined the data cleaning and student selection process by implementing automation, reducing manual work by 24 hours per month, and significantly enhancing operational efficiency.'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 text-green-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Timeline Item: Software Engineer II */}
                <div className="mb-10 relative transition-all duration-500 ease-out opacity-0 translate-y-4 animate-fade-in-up">
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 border-4 border-gray-800 rounded-full z-10"></div>
                  <div className="ml-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-medium text-white">Software Engineer II</h3>
                      <span className="text-gray-400">Oct 2021 - Jul 2024</span>
                    </div>
                    <div className="text-lg mb-2 text-gray-200">Dematic Corp, Charlotte, NC</div>
                    <ul className="list-disc pl-5 space-y-2">
                      {[
                        'Developed and customized key WCS modules, including order management and sortation, to meet diverse client needs, resulting in a 15% reduction in manual intervention errors.',
                        'Designed user interfaces for warehouse operators and managers, enhancing usability through streamlined workflows and real-time data visualization.',
                        'Led requirements gathering sessions with clients to translate operational needs into detailed software specifications, reducing development time by 10%.',
                        'Collaborated with project management, engineering, and client teams to integrate, test, and deploy custom WCS solutions, ensuring on-schedule delivery.',
                        'Provided expert technical support, reducing system downtime by 30% through rapid troubleshooting and issue resolution.',
                        'Conducted training sessions for warehouse staff across multiple clients, boosting WCS adoption rates and improving workflow efficiency by 15%.'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 text-green-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Timeline Item: Undergraduate Researcher */}
                <div className="mb-10 relative transition-all duration-500 ease-out opacity-0 translate-y-4 animate-fade-in-up">
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 border-4 border-gray-800 rounded-full z-10"></div>
                  <div className="ml-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-medium text-white">Undergraduate Researcher</h3>
                      <span className="text-gray-400">Jan 2021 - May 2021</span>
                    </div>
                    <div className="text-lg mb-2 text-gray-200">InfoVis Lab, Virginia Tech, Blacksburg, VA</div>
                    <ul className="list-disc pl-5 space-y-2">
                      {[
                        'Spearheaded the development of a data portal for a Food Access and Security Study, customizing D3.js visualizations, increasing user engagement by 30%.',
                        'Optimized portal accessibility by improving layout, navigation, and implementing a color-blind-friendly palette.',
                        'Conducted a security audit of the portal, identifying and resolving vulnerabilities to ensure data privacy compliance.'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 text-green-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Timeline Item: Undergraduate Teaching Assistant */}
                <div className="relative transition-all duration-500 ease-out opacity-0 translate-y-4 animate-fade-in-up">
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 border-4 border-gray-800 rounded-full z-10"></div>
                  <div className="ml-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-medium text-white">Undergraduate Teaching Assistant</h3>
                      <span className="text-gray-400">Feb 2021 - May 2021</span>
                    </div>
                    <div className="text-lg mb-2 text-gray-200">Computer Science Department, Virginia Tech, Blacksburg, VA</div>
                    <ul className="list-disc pl-5 space-y-2">
                      {[
                        'Provided guidance to 50+ students in an introductory GUI Programming course, assisting with Unity and JavaScript projects.',
                        'Evaluated assignments, delivering detailed feedback on programming practices and logic.',
                        'Conducted tutoring sessions, clarifying core concepts and troubleshooting challenges, leading to higher course retention rates.'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 text-green-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
