import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiGithub } from 'react-icons/fi';
import type { Project } from '../data/resumeData';

const accents = [
  {
    overlay: 'from-indigo-950/80 via-indigo-900/10 to-transparent',
    ring: 'group-hover:border-indigo-400/60',
    glow: 'group-hover:shadow-indigo-500/25',
  },
  {
    overlay: 'from-cyan-950/80 via-cyan-900/10 to-transparent',
    ring: 'group-hover:border-cyan-400/60',
    glow: 'group-hover:shadow-cyan-500/25',
  },
  {
    overlay: 'from-fuchsia-950/80 via-fuchsia-900/10 to-transparent',
    ring: 'group-hover:border-fuchsia-400/60',
    glow: 'group-hover:shadow-fuchsia-500/25',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLinks = Boolean(project.demoUrl || project.githubUrl);
  const accent = accents[index % accents.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink/15 bg-paper-elevated/60 shadow-md transition-all duration-300 hover:shadow-2xl dark:border-mist/15 dark:bg-void-elevated/60 ${accent.ring} ${accent.glow}`}
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          style={{ objectPosition: project.imagePosition ?? 'center' }}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${accent.overlay}`} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-ink dark:text-mist">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-mist-muted">{project.description}</p>

        {project.features.length > 0 && (
          <ul className="mt-4 space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink-muted dark:text-mist-muted">
                <FiCheck className="mt-0.5 flex-shrink-0 text-accent" size={14} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border-2 border-ink/20 bg-ink/[0.03] px-2.5 py-1 text-xs font-medium text-ink-muted dark:border-mist/25 dark:bg-mist/[0.06] dark:text-mist-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-1 items-end">
          {hasLinks ? (
            <div className="flex flex-wrap gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring glow-shadow inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-mist transition-transform hover:scale-[1.03] dark:bg-mist dark:text-void"
                >
                  Live Demo
                  <FiArrowUpRight size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-1.5 rounded-full border-2 border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.03] hover:border-accent dark:border-mist/25 dark:text-mist"
                >
                  <FiGithub size={14} />
                  Source Code
                </a>
              )}
            </div>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-ink/25 px-4 py-2 text-xs font-medium text-ink-muted dark:border-mist/25 dark:text-mist-muted">
              Personal Project
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
