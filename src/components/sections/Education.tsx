import { motion } from 'framer-motion';
import { education } from '../../data/resumeData';
import SectionHeading from '../SectionHeading';

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((item, idx) => (
          <motion.div
            key={`${item.institution}-${item.degree}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.1 }}
            className="flex flex-col rounded-2xl border-2 border-ink/15 bg-paper-elevated/50 p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg dark:border-mist/20 dark:bg-void-elevated/50"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">{item.duration}</span>
            <h3 className="mt-2 text-base font-semibold text-ink dark:text-mist">{item.institution}</h3>
            <p className="mt-1 text-sm text-ink-muted dark:text-mist-muted">{item.degree}</p>
            <p className="mt-1 text-sm text-ink-muted dark:text-mist-muted">{item.location}</p>
            <div className="mt-4 inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              {item.score}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
