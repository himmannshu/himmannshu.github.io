import Link from 'next/link'

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-6">Resume</h1>
          <p className="text-lg mb-8">
            Data Analyst and Software Engineer with experience in data-driven insights, automation, and full-stack development.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Professional Experience</h2>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium">Data Analyst</h3>
              <span className="text-gray-500">Aug 2024 - Present</span>
            </div>
            <div className="text-lg mb-2">University of Arkansas, Fayetteville, AR</div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delivered data-driven insights that improved student engagement and increased overall satisfaction ratings, helping student organizations tailor their initiatives.</li>
              <li>Streamlined the data cleaning and student selection process by implementing automation, reducing manual work by 24 hours per month, and significantly enhancing operational efficiency.</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium">Software Engineer II</h3>
              <span className="text-gray-500">Oct 2021 - Jul 2024</span>
            </div>
            <div className="text-lg mb-2">Dematic Corp, Charlotte, NC</div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed and customized key WCS modules, including order management and sortation, to meet diverse client needs, resulting in a 15% reduction in manual intervention errors.</li>
              <li>Designed user interfaces for warehouse operators and managers, enhancing usability through streamlined workflows and real-time data visualization.</li>
              <li>Led requirements gathering sessions with clients to translate operational needs into detailed software specifications, reducing development time by 10%.</li>
              <li>Collaborated with project management, engineering, and client teams to integrate, test, and deploy custom WCS solutions, ensuring on-schedule delivery.</li>
              <li>Provided expert technical support, reducing system downtime by 30% through rapid troubleshooting and issue resolution.</li>
              <li>Conducted training sessions for warehouse staff across multiple clients, boosting WCS adoption rates and improving workflow efficiency by 15%.</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium">Undergraduate Researcher</h3>
              <span className="text-gray-500">Jan 2021 - May 2021</span>
            </div>
            <div className="text-lg mb-2">InfoVis Lab, Virginia Tech, Blacksburg, VA</div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Spearheaded the development of a data portal for a Food Access and Security Study, customizing D3.js visualizations, increasing user engagement by 30%.</li>
              <li>Optimized portal accessibility by improving layout, navigation, and implementing a color-blind-friendly palette.</li>
              <li>Conducted a security audit of the portal, identifying and resolving vulnerabilities to ensure data privacy compliance.</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium">Undergraduate Teaching Assistant</h3>
              <span className="text-gray-500">Feb 2021 - May 2021</span>
            </div>
            <div className="text-lg mb-2">Computer Science Department, Virginia Tech, Blacksburg, VA</div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provided guidance to 50+ students in an introductory GUI Programming course, assisting with Unity and JavaScript projects.</li>
              <li>Evaluated assignments, delivering detailed feedback on programming practices and logic.</li>
              <li>Conducted tutoring sessions, clarifying core concepts and troubleshooting challenges, leading to higher course retention rates.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Languages</h3>
              <ul className="list-disc pl-5">
                <li>Java</li>
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>SQL</li>
                <li>C#</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Frameworks & Tools</h3>
              <ul className="list-disc pl-5">
                <li>PyTorch, Angular, NestJS, Express</li>
                <li>Node.js, Docker, PowerBI</li>
                <li>Git, VS Code, Unity, Eclipse</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
          <div className="mb-4">
            <div className="flex flex-col md:flex-row justify-between">
              <h3 className="text-xl font-medium">Master of Science in Computer Science</h3>
              <span className="text-gray-500">Aug 2024 - Dec 2025</span>
            </div>
            <div className="text-lg">University of Arkansas, Fayetteville, AR</div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-between">
              <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
              <span className="text-gray-500">Aug 2017 - May 2021</span>
            </div>
            <div className="text-lg">Virginia Tech, Blacksburg, VA</div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            {/* Project entries to be updated later */}
            <div>
              <h3 className="text-xl font-medium mb-1">Project Name</h3>
              <p className="mb-2">
                A brief description of the project and your role in it. Highlight key technologies used and outcomes achieved.
              </p>
              <Link href="https://github.com/yourusername/project" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View on GitHub →
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">Another Project</h3>
              <p className="mb-2">
                A brief description of the project and your role in it. Highlight key technologies used and outcomes achieved.
              </p>
              <Link href="https://github.com/yourusername/another-project" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View on GitHub →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
