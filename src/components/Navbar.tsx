import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, personal } from '../data/resumeData';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((link) => link.href.replace('#', '')));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-ink/5 dark:border-mist/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
        <a
          href="#hero"
          className="focus-ring rounded-full text-sm font-semibold tracking-tight text-ink dark:text-mist"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-mist dark:bg-mist dark:text-void">
            {personal.initials}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-ink dark:text-mist'
                      : 'text-ink-muted hover:text-ink dark:text-mist-muted dark:hover:text-mist'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-ink/5 dark:bg-mist/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={personal.resumeFile}
            download
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-mist transition-transform hover:scale-[1.03] active:scale-[0.97] dark:bg-mist dark:text-void"
          >
            <FiDownload size={14} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink/20 text-ink dark:border-mist/25 dark:text-mist"
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="glass overflow-hidden border-b border-ink/5 md:hidden dark:border-mist/5"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    //onClick={() => setMobileOpen(false)}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.href.replace('#', '');
                      setMobileOpen(false);
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }, 250);
      }}
                    className="focus-ring block rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-ink/5 dark:text-mist dark:hover:bg-mist/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="/Apoorv_Resume_23_CS_072.pdf" target="s3://apoorv-portfolio-assets/Apoorv_Resume_23_CS_072.pdf" rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-ink/20 bg-paper-elevated/60 px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] hover:border-accent active:scale-[0.97] dark:border-mist/25 dark:bg-void-elevated/60 dark:text-mist"
            >
              <FiDownload size={15} />
              Download Resume
            </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
