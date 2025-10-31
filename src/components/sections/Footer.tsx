import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
  ];

  const quickLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'الدورات', href: '#courses' },
    { label: 'عن الأكاديمية', href: '#about' },
    { label: 'سياسة الخصوصية', href: '#privacy' },
    { label: 'الشروط والأحكام', href: '#terms' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="شعار أكاديمية رُشد" 
                className="w-12 h-12 object-contain rounded-xl shadow-glow"
              />
              <div>
                <h3 className="text-xl font-bold dark:text-slate-50">أكاديمية رُشد</h3>
                <p className="text-sm text-gray-400 dark:text-slate-400">طريقك نحو النمو</p>
              </div>
            </div>
            <p className="text-gray-400 dark:text-slate-300 leading-relaxed mb-4">
              منصة تعليمية رقمية متخصصة في تقديم دورات عالية الجودة في مختلف المجالات، 
              نساعدك على تحقيق أهدافك التعليمية والمهنية.
            </p>
            <Button variant="primary" size="sm">
              <span className="flex items-center gap-2">
                انضم كمدرس
                <ArrowRight size={16} />
              </span>
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold dark:text-slate-50 mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight size={16} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold dark:text-slate-50 mb-4">تواصل معنا</h3>
            <div className="space-y-4">
              <a 
                href="mailto:info@rushd.academy" 
                className="flex items-center gap-3 text-gray-400 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">البريد الإلكتروني</p>
                  <p className="font-medium dark:text-slate-200">info@rushd.academy</p>
                </div>
              </a>
              <a 
                href="tel:+966500000000" 
                className="flex items-center gap-3 text-gray-400 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">الهاتف</p>
                  <p className="font-medium dark:text-slate-200">+966 50 000 0000</p>
                </div>
              </a>
              <a 
                href="https://wa.me/966500000000" 
                className="flex items-center gap-3 text-gray-400 dark:text-slate-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">واتساب</p>
                  <p className="font-medium dark:text-slate-200">+966 50 000 0000</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold dark:text-slate-50 mb-4">تابعنا</h3>
            <p className="text-gray-400 dark:text-slate-300 mb-4">
              تواصل معنا على منصات التواصل الاجتماعي
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 bg-white/10 dark:bg-slate-800 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:bg-white/20 dark:hover:bg-slate-700 ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 dark:text-slate-300 text-sm text-center md:text-right">
              © 2025 أكاديمية رُشد. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#terms" className="text-gray-400 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
