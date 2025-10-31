import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/context/ThemeContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'الدورات', href: '#courses' },
    { label: 'عن الأكاديمية', href: '#about' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  const islamicTools = [
    { label: 'أذكار الصباح والمساء', href: '#adhkar' },
    { label: 'مواقيت الصلاة', href: '#prayer-times' },
    { label: 'قارئ القرآن الكريم', href: '#quran' },
    { label: 'الحديث اليومي', href: '#hadith' },
    { label: 'ألعاب ومسابقات إسلامية', href: '#islamic-games' },
    { label: 'عداد التسبيح الرقمي', href: '#tasbih' },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-soft border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img 
              src="/logo.png" 
              alt="شعار أكاديمية رُشد" 
              className="w-12 h-12 object-contain rounded-xl shadow-glow"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary dark:text-primary">أكاديمية رُشد</h1>
              <p className="text-xs text-text-secondary dark:text-slate-400">طريقك نحو النمو</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-text-primary dark:text-slate-200 hover:text-primary dark:hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Islamic Tools Dropdown */}
            <div
              className="relative group/islamic"
            >
              <button className="text-text-primary dark:text-slate-200 hover:text-primary dark:hover:text-primary font-medium transition-colors flex items-center gap-1 py-2">
                الأدوات الإسلامية
                <ChevronDown size={16} className="group-hover/islamic:rotate-180 transition-transform" />
              </button>
              
              {/* Dropdown Menu */}
              <div
                className="absolute right-0 mt-0 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-glow z-50 opacity-0 invisible group-hover/islamic:opacity-100 group-hover/islamic:visible transition-all duration-300 pointer-events-none group-hover/islamic:pointer-events-auto border border-gray-200 dark:border-slate-600"
              >
                {islamicTools.map((tool, idx) => (
                  <a
                    key={tool.label}
                    href={tool.href}
                    className={`block px-6 py-4 text-text-secondary dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors font-medium ${
                      idx === 0 ? 'rounded-t-2xl pt-6' : ''
                    } ${idx === islamicTools.length - 1 ? 'rounded-b-2xl pb-6' : ''}`}
                  >
                    {tool.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Communities Link */}
            <motion.a
              href="#communities"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navItems.length + 1) * 0.1 }}
              className="text-text-primary dark:text-slate-200 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              المجتمعات
            </motion.a>

            {/* Interactive Islamic */}
            <motion.a
              href="#islamic-interactive"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navItems.length + 2) * 0.1 }}
              className="text-text-primary dark:text-slate-200 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              التفاعلي الإسلامي
            </motion.a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-text-primary dark:text-slate-200"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Button variant="outline" size="sm">
              تسجيل الدخول
            </Button>
            <Button variant="primary" size="sm">
              التسجيل
            </Button>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-text-primary dark:text-slate-200"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-text-primary dark:text-slate-200 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-primary dark:text-slate-200 hover:text-primary font-medium transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Islamic Tools */}
              <div className="py-2">
                <button className="w-full text-right text-text-primary hover:text-primary font-medium transition-colors flex items-center gap-2">
                  الأدوات الإسلامية
                  <ChevronDown size={16} />
                </button>
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {islamicTools.map((tool) => (
                    <a
                      key={tool.label}
                      href={tool.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-text-secondary hover:text-primary transition-colors py-1"
                    >
                      {tool.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Communities */}
              <a
                href="#communities"
                onClick={() => setIsMenuOpen(false)}
                className="text-text-primary hover:text-primary font-medium transition-colors py-2"
              >
                المجتمعات
              </a>

              {/* Mobile Interactive Islamic */}
              <a
                href="#islamic-interactive"
                onClick={() => setIsMenuOpen(false)}
                className="text-text-primary hover:text-primary font-medium transition-colors py-2"
              >
                التفاعلي الإسلامي
              </a>

              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" size="md">
                  تسجيل الدخول
                </Button>
                <Button variant="primary" size="md">
                  التسجيل
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};
