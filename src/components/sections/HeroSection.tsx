import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Sparkles, TrendingUp, GraduationCap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 gradient-hero pattern-dots -z-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-40 left-1/4 w-16 h-16 bg-accent-cool/10 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={20} />
              <span className="font-semibold">منصة تعليمية رقمية متطورة</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-text-primary">أكاديمية رشد</span>
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">
                طريقك نحو النمو والتطور
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              منصة تعليمية سحابية متكاملة توفر ثلاثة أنماط تعليمية: التعليم المسجل والتفاعلي والمباشر. 
              حل شامل لإدارة العملية التعليمية بكفاءة وتفاعل في بيئة رقمية موحدة.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg">
                ابدأ التعلم الآن
              </Button>
              <Button variant="secondary" size="lg">
                تصفح الدورات
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center lg:text-right">
                <h3 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">500+</h3>
                <p className="text-text-secondary text-sm">طالب نشط</p>
              </div>
              <div className="text-center lg:text-right">
                <h3 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">50+</h3>
                <p className="text-text-secondary text-sm">مدرب محترف</p>
              </div>
              <div className="text-center lg:text-right">
                <h3 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">100+</h3>
                <p className="text-text-secondary text-sm">دورة تدريبية</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Main Illustration */}
              <motion.img
                src="/Learning-cuate.svg"
                alt="التعليم الإلكتروني"
                className="w-full h-full object-contain drop-shadow-2xl"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-white p-6 rounded-2xl shadow-glow w-64 z-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">تعليم تفاعلي</h4>
                    <p className="text-sm text-text-secondary">خبرة تعليمية متميزة</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 left-0 bg-white p-6 rounded-2xl shadow-glow w-64 z-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-cool/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-accent-cool" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">نمو مستمر</h4>
                    <p className="text-sm text-text-secondary">تطوير المهارات بكفاءة</p>
                  </div>
                </div>
              </motion.div>

              {/* Central Glow Effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10 animate-pulse -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
