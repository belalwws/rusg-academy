import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'الدورات', href: '#courses' },
    { label: 'عن الأكاديمية', href: '#about' },
    { label: 'تواصل معنا', href: '#contact' },
    { label: 'انضم كمدرب', href: '#join-trainer' },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-md shadow-soft">
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
              alt="شعار أكاديمية رشد" 
              className="w-12 h-12 object-contain rounded-xl shadow-glow"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">أكاديمية رشد</h1>
              <p className="text-xs text-text-secondary">طريقك نحو النمو</p>
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
                className="text-text-primary hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm">
              تسجيل الدخول
            </Button>
            <Button variant="primary" size="sm">
              التسجيل
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-text-primary hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-primary hover:text-primary font-medium transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
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
