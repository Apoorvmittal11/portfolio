import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="focus-ring relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink/20 bg-paper-elevated/80 text-ink transition-colors hover:border-accent dark:border-mist/25 dark:bg-void-elevated/80 dark:text-mist"
    >
      <motion.span
        key={theme}
        initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
      </motion.span>
    </button>
  );
}
