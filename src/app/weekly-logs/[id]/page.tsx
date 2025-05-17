import Link from 'next/link'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { notFound } from 'next/navigation'

const LOGS_DIR = path.join(process.cwd(), 'src/content/weekly-logs')

export async function generateStaticParams() {
  const files = await fs.readdir(LOGS_DIR)
  return files.filter(f => f.endsWith('.md')).map(filename => ({
    id: filename.replace(/\.md$/, '')
  }))
}

export default async function WeeklyLog({ params }: { params: { id: string } }) {
  const { id } = params
  const filePath = path.join(LOGS_DIR, `${id}.md`)
  let fileContent
  try {
    fileContent = await fs.readFile(filePath, 'utf8')
  } catch (e) {
    notFound()
  }
  const { data, content } = matter(fileContent || '')
  const html = marked.parse(content)

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <Link href="/weekly-logs" className="text-blue-500 hover:underline mb-8 inline-block">
            ← Back to Logs
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2">{data.title || id}</h1>
          <p className="text-gray-500 mb-8">{data.date || ''}</p>
        </div>

        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>

        <div className="mt-12 flex justify-between">
          <Link href="/weekly-logs" className="text-blue-500 hover:underline">
            ← All Logs
          </Link>
        </div>
      </div>
    </main>
  )
} 