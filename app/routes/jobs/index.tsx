import { Link, useLoaderData } from 'remix'
import { getJobs } from '~/job'

import type { Job } from '~/job'

export const loader = () => {
  return getJobs()
}

export default function Jobs() {
  const jobs = useLoaderData<Job[]>()
  console.log(jobs)
  return (
    <div>
      <h1>Jobs</h1>
      <ul>
        {jobs.map((post: Job) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
