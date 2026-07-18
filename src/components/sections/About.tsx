import { motion } from 'framer-motion';
import { personal } from '../../data/resumeData';
import SectionHeading from '../SectionHeading';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="About" title="Who I am" />

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-lg leading-relaxed text-ink-muted dark:text-mist-muted"
        >
          I'm pursuing a B.Tech in Computer Science at{' '}
          <span className="font-medium text-ink dark:text-mist">Delhi Technological University</span> (2023–2027),
          and I enjoy working across the full stack — from designing APIs in Spring Boot to building responsive
          interfaces in React. Alongside my coursework, I've built several projects that integrate large language
          models and Retrieval-Augmented Generation into practical, working applications. I also spent time as a
          Teaching Assistant at Coding Ninjas, mentoring students in Java and Data Structures &amp; Algorithms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="glass rounded-2xl border-2 border-ink/15 p-6 dark:border-mist/20"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Interests</h3>
          <ul className="mt-4 space-y-2 text-ink-muted dark:text-mist-muted">
            {personal.interests.map((interest) => (
              <li key={interest} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {interest}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
