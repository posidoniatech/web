import { Link, useLoaderData } from 'remix'

import type { Job } from '~/job'

export const loader = () => {
  return []
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
