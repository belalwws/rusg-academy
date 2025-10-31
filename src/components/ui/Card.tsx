import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = true,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={cn(
        'bg-background-card dark:bg-slate-800 rounded-2xl p-6 shadow-soft transition-all duration-300 border border-gray-100 dark:border-slate-700',
        hover && 'hover:shadow-glow cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
