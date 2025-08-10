import Link from 'next/link'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { formatDateShort } from '@/utils/dateHelpers'

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
          <div className="grid grid-cols-1 gap-6">
            {logs.map((log) => (
              <article key={log.id} className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <header className="mb-2">
                  <Link href={`/weekly-logs/${log.id}`} className="inline-block">
                    <h3 className="text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-400">{log.title}</h3>
                  </Link>
                  <p className="text-gray-500 text-sm">{formatDateShort(log.date)}</p>
                </header>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{log.summary}</p>
                <footer className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">Weekly Log</span>
                  </div>
                  <Link href={`/weekly-logs/${log.id}`} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Read more →</Link>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
} 