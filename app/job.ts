import path from 'path'
import fs from 'fs/promises'
import parseFrontmatter from 'front-matter'

export type Job = {
  slug: string
  title: string
  company: string
  url: string
}

const jobsPath = path.join(__dirname, '..', 'jobs')

export async function getJobs() {
  const dir = await fs.readdir(jobsPath)
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(jobsPath, filename))
      const { attributes }: any = parseFrontmatter(file.toString())
      return {
        slug: filename.replace(/\.md$/, ''),
        title: attributes.title,
      }
    })
  )
}
