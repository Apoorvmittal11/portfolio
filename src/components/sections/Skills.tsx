import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaLayerGroup, FaLightbulb, FaToolbox } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { skillCategories } from '../../data/resumeData';
import SectionHeading from '../SectionHeading';

const categoryIcons: Record<string, IconType> = {
  Languages: FaCode,
  'Frameworks & Libraries': FaLayerGroup,
  Databases: FaDatabase,
  Concepts: FaLightbulb,
  'Development Tools': FaToolbox,
};

// Each category gets its own vibrant accent so the grid reads as colorful,
// distinct groups rather than one flat tone.
const categoryStyles: Record<string, { badge: string; card: string; pill: string }> = {
  Languages: {
    badge: 'bg-indigo-500/15 text-indigo-500 dark:bg-indigo-400/15 dark:text-indigo-400',
    card: 'hover:border-indigo-400/50 dark:hover:border-indigo-400/40',
    pill: 'hover:border-indigo-400/70 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:border-indigo-400/60 dark:hover:text-indigo-300',
  },
  'Frameworks & Libraries': {
    badge: 'bg-cyan-500/15 text-cyan-500 dark:bg-cyan-400/15 dark:text-cyan-400',
    card: 'hover:border-cyan-400/50 dark:hover:border-cyan-400/40',
    pill: 'hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300',
  },
  Databases: {
    badge: 'bg-emerald-500/15 text-emerald-500 dark:bg-emerald-400/15 dark:text-emerald-400',
    card: 'hover:border-emerald-400/50 dark:hover:border-emerald-400/40',
    pill: 'hover:border-emerald-400/70 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:border-emerald-400/60 dark:hover:text-emerald-300',
  },
  Concepts: {
    badge: 'bg-fuchsia-500/15 text-fuchsia-500 dark:bg-fuchsia-400/15 dark:text-fuchsia-400',
    card: 'hover:border-fuchsia-400/50 dark:hover:border-fuchsia-400/40',
    pill: 'hover:border-fuchsia-400/70 hover:bg-fuchsia-500/10 hover:text-fuchsia-600 dark:hover:border-fuchsia-400/60 dark:hover:text-fuchsia-300',
  },
  'Development Tools': {
    badge: 'bg-amber-500/15 text-amber-500 dark:bg-amber-400/15 dark:text-amber-400',
    card: 'hover:border-amber-400/50 dark:hover:border-amber-400/40',
    pill: 'hover:border-amber-400/70 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:border-amber-400/60 dark:hover:text-amber-300',
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Skills"
        title="Tech stack"
        description="Languages, frameworks, and tools I use to design and ship full-stack, AI-integrated applications."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillCategories.map((category, idx) => {
          const Icon = categoryIcons[category.name] ?? FaCode;
          const style = categoryStyles[category.name];
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 2) * 0.1 }}
              className={`rounded-2xl border-2 border-ink/15 bg-paper-elevated/60 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-mist/15 dark:bg-void-elevated/60 ${style.card}`}
            >
              <div className="flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${style.badge}`}>
                  <Icon size={16} />
                </span>
                <h3 className="text-base font-semibold text-ink dark:text-mist">{category.name}</h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.07, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`rounded-full border-2 border-ink/25 bg-ink/[0.04] px-3 py-1.5 text-sm font-medium text-ink shadow-sm transition-colors dark:border-mist/30 dark:bg-mist/[0.07] dark:text-mist ${style.pill}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
