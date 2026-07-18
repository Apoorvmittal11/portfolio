import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { certifications } from '../../data/resumeData';
import SectionHeading from '../SectionHeading';

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Certifications" title="Certifications" />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
            className="flex items-start gap-4 rounded-2xl border-2 border-ink/15 bg-paper-elevated/50 p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg dark:border-mist/20 dark:bg-void-elevated/50"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <FiAward size={18} />
            </span>
            <div>
              <h3 className="text-base font-semibold text-ink dark:text-mist">{cert.title}</h3>
              <p className="mt-1 text-sm text-ink-muted dark:text-mist-muted">{cert.issuer}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-muted dark:text-mist-muted">
                {cert.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
