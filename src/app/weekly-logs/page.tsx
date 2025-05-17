import Link from 'next/link'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

// Directory containing markdown logs
const LOGS_DIR = path.join(process.cwd(), 'src/content/weekly-logs')

export default async function WeeklyLogs() {
  // Read all markdown files in the logs directory
  const files = await fs.readdir(LOGS_DIR)
  const logs = await Promise.all(
    files.filter(f => f.endsWith('.md')).map(async (filename) => {
      const filePath = path.join(LOGS_DIR, filename)
      const fileContent = await fs.readFile(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      return {
        id: filename.replace(/\.md$/, ''),
        title: data.title || filename,
        date: data.date || '',
        summary: data.summary || content.slice(0, 120) + '...'
      }
    })
  )
  // Sort logs by date descending
  logs.sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-6">Weekly Learning Logs</h1>
          <p className="text-lg mb-8">
            A journal of what I learn week by week. Documenting my journey helps me reinforce my knowledge and share insights with others.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Recent Logs</h2>
          <div className="space-y-8">
            {logs.map((log) => (
              <div key={log.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <Link href={`/weekly-logs/${log.id}`}>
                  <h3 className="text-xl font-medium mb-2 hover:text-blue-500">{log.title}</h3>
                </Link>
                <p className="text-gray-500 mb-3">{log.date}</p>
                <p className="mb-4">{log.summary}</p>
                <Link href={`/weekly-logs/${log.id}`} className="text-blue-500 hover:underline">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
} 