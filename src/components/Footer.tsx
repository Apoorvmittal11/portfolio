import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { navLinks, personal } from '../data/resumeData';

const socials = [
  { label: 'GitHub', href: personal.links.github, icon: FiGithub },
  { label: 'LinkedIn', href: personal.links.linkedin, icon: FiLinkedin },
  { label: 'LeetCode', href: personal.links.leetcode, icon: SiLeetcode },
  { label: 'Email', href: `mailto:${personal.email}`, icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 dark:border-mist/15">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-ink dark:text-mist">{personal.name}</p>
          <p className="text-sm text-ink-muted dark:text-mist-muted">{personal.tagline}</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring text-sm text-ink-muted transition-colors hover:text-ink dark:text-mist-muted dark:hover:text-mist"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink/20 text-ink-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-mist/25 dark:text-mist-muted"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <p className="border-t border-ink/5 py-4 text-center text-xs text-ink-muted dark:border-mist/5 dark:text-mist-muted">
        © {new Date().getFullYear()} {personal.name}. Built with React, Tailwind CSS &amp; Framer Motion.
      </p>
    </footer>
  );
}
