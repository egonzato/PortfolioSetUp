import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleBtn = document.getElementById('toggleSidebar');
    const toggle = () => setIsOpen((prev) => !prev);
    toggleBtn.addEventListener('click', toggle);

    return () => toggleBtn.removeEventListener('click', toggle);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <motion.nav
            className="fixed top-0 left-0 h-full w-60 bg-gray-900 text-white z-50 p-4"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-xl text-white"
            >
              ×
            </button>
            {children}
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
