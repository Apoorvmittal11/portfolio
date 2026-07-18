import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { PointerEvent } from 'react';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personal } from '../../data/resumeData';

const socials = [
  { label: 'GitHub', href: personal.links.github, icon: FiGithub },
  { label: 'LinkedIn', href: personal.links.linkedin, icon: FiLinkedin },
  { label: 'LeetCode', href: personal.links.leetcode, icon: SiLeetcode },
  { label: 'Email', href: `mailto:${personal.email}`, icon: FiMail },
];

const orbitBadges = ['React.js', 'Spring Boot', 'LangChain4j', 'PostgreSQL'];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, color-mix(in srgb, var(--color-accent) 15%, transparent), transparent 70%)`;

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      id="hero"
      onPointerMove={handlePointerMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent/40 blur-[110px] animate-float animate-blob" />
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-accent-2/35 blur-[110px] animate-float animate-blob [animation-delay:1.5s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent-3/30 blur-[110px] animate-float animate-blob [animation-delay:3s]" />
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center rounded-full border-2 border-ink/20 bg-paper-elevated/60 px-4 py-1.5 text-sm font-medium text-ink-muted dark:border-mist/25 dark:bg-void-elevated/60 dark:text-mist-muted"
          >
            {personal.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="mt-6 text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl dark:text-mist"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="text-gradient mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {personal.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted dark:text-mist-muted"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="focus-ring glow-shadow inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-mist shadow-lg shadow-ink/10 transition-transform hover:scale-[1.03] active:scale-[0.97] dark:bg-mist dark:text-void dark:shadow-black/30"
            >
              View Projects
            </a>
            <a href="/Apoorv_Resume_23_CS_072.pdf" target="s3://apoorv-portfolio-assets/Apoorv_Resume_23_CS_072.pdf" rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-ink/20 bg-paper-elevated/60 px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] hover:border-accent active:scale-[0.97] dark:border-mist/25 dark:bg-void-elevated/60 dark:text-mist"
            >
              <FiDownload size={15} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink-muted transition-colors hover:text-ink dark:text-mist-muted dark:hover:text-mist"
            >
              Contact Me →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-3"
          >
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink/20 text-ink-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-mist/25 dark:text-mist-muted"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Abstract tech visual — no photo provided, so we visualize the stack instead */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-accent/30 dark:border-accent/25" />
          <div className="absolute inset-10 rounded-full border-2 border-ink/15 dark:border-mist/20" />
          <div className="glass flex h-40 w-40 items-center justify-center rounded-3xl border-2 border-accent/30 text-4xl font-bold text-gradient shadow-2xl glow-shadow dark:border-accent/25">
            {personal.initials}
          </div>
          {orbitBadges.map((badge, i) => {
            const angle = (i / orbitBadges.length) * 2 * Math.PI;
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <span
                key={badge}
                style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.4}s` }}
                className="animate-float glass absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-accent/30 px-3 py-1.5 text-xs font-medium text-ink shadow-md dark:border-accent/25 dark:text-mist"
              >
                {badge}
              </span>
            );
          })}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="focus-ring absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-ink-muted dark:text-mist-muted"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <FiArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
