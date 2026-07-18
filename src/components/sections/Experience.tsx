import { motion } from 'framer-motion';
import { experience } from '../../data/resumeData';
import SectionHeading from '../SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="relative mt-12 space-y-8 border-l-2 border-ink/15 pl-8 dark:border-mist/20">
        {experience.map((item, idx) => (
          <motion.div
            key={`${item.organization}-${item.role}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-accent dark:border-void" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-ink dark:text-mist">
                {item.role} · <span className="text-accent">{item.organization}</span>
              </h3>
              <span className="text-sm font-medium text-ink-muted dark:text-mist-muted">{item.duration}</span>
            </div>
            <p className="mt-1 text-sm text-ink-muted dark:text-mist-muted">{item.location}</p>
            <ul className="mt-4 space-y-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-ink-muted dark:text-mist-muted">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-muted dark:bg-mist-muted" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
