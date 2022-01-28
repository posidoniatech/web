import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'
import type { MetaFunction } from 'remix'

import Navigation from './components/navigation'

import styles from './styles/app.css'

export const meta: MetaFunction = () => {
  return { title: 'Posidonia.tech' }
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navigation />
        <Link to="/jobs">Jobs</Link>
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
