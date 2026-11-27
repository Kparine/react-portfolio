import type { ReactNode } from 'react';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';

export const links: Route.LinksFunction = () => [
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'manifest', href: '/manifest.json' },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '48px 24px' }}>
      <h1>{notFound ? 'Page not found' : 'Something went wrong'}</h1>
      <p>
        <a href="/">Back to the home page</a>
      </p>
    </main>
  );
}
