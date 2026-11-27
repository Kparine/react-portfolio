import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import '@fontsource-variable/inter';
import './v2.css';
import { V2_HOME } from './paths';
import { contact } from './content';

const nav = [
  { label: 'Work', to: V2_HOME, matches: (path: string) => path === '/' || path === '/v2' || path.startsWith('/work/') },
  { label: 'About', to: '/about', matches: (path: string) => path === '/about' },
  { label: 'Résumé', to: '/resume', matches: (path: string) => path === '/resume' },
];

export default function Shell({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, '') || '/';
  return (
    <div className={wide ? 'v2 v2--wide' : 'v2'}>
      <a className="v2-skip" href="#content">
        Skip to content
      </a>
      <header className="v2-header">
        <Link className="v2-brand" to={V2_HOME}>
          <span className="v2-brand-name">Kevin Parine</span>
          <span className="v2-brand-role">Senior Software Engineer · Platform</span>
        </Link>
        <nav aria-label="Main">
          <ul className="v2-nav">
            {nav.map((item) => (
              <li key={item.label}>
                <Link to={item.to} aria-current={item.matches(path) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="content" className="v2-main">
        {children}
      </main>
      <footer className="v2-footer">
        <p>© Kevin Parine</p>
        <ul className="v2-footer-links">
          <li>
            <a href={`mailto:${contact.email}`}>Email</a>
          </li>
          <li>
            <a href={contact.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={contact.github}>GitHub</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
