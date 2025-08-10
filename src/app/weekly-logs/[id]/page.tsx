import Link from 'next/link'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { formatDateShort } from '@/utils/dateHelpers'

const LOGS_DIR = path.join(process.cwd(), 'src/content/weekly-logs')

export async function generateStaticParams() {
  const files = await fs.readdir(LOGS_DIR)
  return files.filter(f => f.endsWith('.md')).map(filename => ({
    id: filename.replace(/\.md$/, '')
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Weekly Log - ${id}`,
    description: `Weekly learning log: ${id}`,
  }
}

export default async function WeeklyLog({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const filePath = path.join(LOGS_DIR, `${id}.md`)
  let fileContent
  try {
    fileContent = await fs.readFile(filePath, 'utf8')
  } catch {
    notFound()
  }
  const { data, content } = matter(fileContent || '')
  marked.use(markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
  }))
  const html = marked.parse(content)

  // Build prev/next based on frontmatter dates
  const files = await fs.readdir(LOGS_DIR)
  const items = await Promise.all(
    files.filter(f => f.endsWith('.md')).map(async (fn) => {
      const p = path.join(LOGS_DIR, fn)
      const fc = await fs.readFile(p, 'utf8')
      const { data: d } = matter(fc)
      return { id: fn.replace(/\.md$/, ''), date: d?.date ?? '' }
    })
  )
  items.sort((a, b) => (a.date < b.date ? 1 : -1))
  const i = items.findIndex(e => e.id === id)
  const prev = i >= 0 && i < items.length - 1 ? items[i + 1] : null
  const next = i > 0 ? items[i - 1] : null

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="w-full max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/weekly-logs" className="text-blue-600 dark:text-blue-400 hover:underline">← Back to Logs</Link>
          <div className="text-sm text-gray-500">{data.date ? formatDateShort(data.date) : ''}</div>
        </div>
        <header className="mb-6">
          <h1 className="text-4xl font-bold mb-2">{data.title || id}</h1>
        </header>

        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>

        <nav className="mt-12 flex justify-between items-center" aria-label="Log navigation">
          <Link href="/weekly-logs" className="text-blue-600 dark:text-blue-400 hover:underline">← All Logs</Link>
          <div className="flex items-center gap-4">
            {prev && (
              <Link href={`/weekly-logs/${prev.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">← Prev</Link>
            )}
            {next && (
              <Link href={`/weekly-logs/${next.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Next →</Link>
            )}
          </div>
        </nav>
      </div>
    </main>
  )
} 