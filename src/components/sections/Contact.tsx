import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCheck, FiCopy, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personal } from '../../data/resumeData';
import SectionHeading from '../SectionHeading';

const contactLinks = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: FiMail },
  { label: 'LinkedIn', value: 'linkedin.com/in/apoorvmittall', href: personal.links.linkedin, icon: FiLinkedin },
  { label: 'GitHub', value: 'github.com/Apoorvmittal11', href: personal.links.github, icon: FiGithub },
  { label: 'LeetCode', value: 'leetcode.com/u/Apoorvmittal', href: personal.links.leetcode, icon: SiLeetcode },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — user can still use the mailto/email link directly.
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/15 blur-[130px] animate-blob" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to internship and full-time opportunities. Reach out directly, or download my resume for the full picture."
          align="center"
        />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto mt-12 max-w-3xl"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="focus-ring group flex items-center gap-4 rounded-2xl border-2 border-ink/15 bg-paper-elevated/50 p-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/20 dark:border-mist/20 dark:bg-void-elevated/50"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink dark:text-mist">{label}</p>
                <p className="truncate text-sm text-ink-muted dark:text-mist-muted">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03] hover:border-accent dark:border-mist/25 dark:text-mist"
          >
            {copied ? <FiCheck size={14} className="text-accent" /> : <FiCopy size={14} />}
            {copied ? 'Email copied!' : 'Copy email address'}
          </button>

          <a href="/Apoorv_Resume_23_CS_072.pdf" target="s3://apoorv-portfolio-assets/Apoorv_Resume_23_CS_072.pdf" rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-ink/20 bg-paper-elevated/60 px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] hover:border-accent active:scale-[0.97] dark:border-mist/25 dark:bg-void-elevated/60 dark:text-mist"
            >
              <FiDownload size={15} />
              Download Resume
            </a>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
