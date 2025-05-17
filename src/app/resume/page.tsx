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
            Professional software engineer with expertise in web development and distributed systems.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Professional Experience</h2>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium">Senior Software Engineer</h3>
              <span className="text-gray-500">Jan 2022 - Present</span>
            </div>
            <div className="text-lg mb-2">Company Name</div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Led development of key features for the company&apos;s main product</li>
              <li>Architected and implemented scalable backend solutions</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium">Software Engineer</h3>
              <span className="text-gray-500">Jun 2019 - Dec 2021</span>
            </div>
            <div className="text-lg mb-2">Previous Company</div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed and maintained RESTful APIs</li>
              <li>Implemented frontend features using React and TypeScript</li>
              <li>Collaborated with cross-functional teams to deliver projects on time</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Languages</h3>
              <ul className="list-disc pl-5">
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Go</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Technologies</h3>
              <ul className="list-disc pl-5">
                <li>React, Next.js</li>
                <li>Node.js, Express</li>
                <li>Docker, Kubernetes</li>
                <li>AWS, GCP</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
          <div className="mb-4">
            <div className="flex flex-col md:flex-row justify-between">
              <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
              <span className="text-gray-500">2015 - 2019</span>
            </div>
            <div className="text-lg">University Name</div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
          <div className="grid grid-cols-1 gap-6">
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