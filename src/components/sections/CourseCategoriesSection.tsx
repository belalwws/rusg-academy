import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { 
  BookOpen, 
  Languages, 
  Globe, 
  Code, 
  GraduationCap, 
  Users 
} from 'lucide-react';

export const CourseCategoriesSection: React.FC = () => {
  const categories = [
    {
      title: 'العلوم الإنسانية',
      description: 'استكشف علم النفس، الفلسفة، والعلوم الاجتماعية',
      icon: Users,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      title: 'اللغة العربية',
      description: 'أتقن قواعد اللغة، الأدب، والبلاغة العربية',
      icon: BookOpen,
      color: 'bg-green-500/10 text-green-600',
    },
    {
      title: 'اللغات الحديثة',
      description: 'تعلم الإنجليزية، الفرنسية، وغيرها من اللغات',
      icon: Languages,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      title: 'البرمجة والتقنية',
      description: 'احترف البرمجة، التطوير، والتقنيات الحديثة',
      icon: Code,
      color: 'bg-orange-500/10 text-orange-600',
    },
    {
      title: 'المواد الأكاديمية',
      description: 'الرياضيات، العلوم، والمناهج الدراسية',
      icon: GraduationCap,
      color: 'bg-red-500/10 text-red-600',
    },
    {
      title: 'المهارات الشخصية',
      description: 'القيادة، التواصل، وإدارة الوقت والمشاريع',
      icon: Globe,
      color: 'bg-teal-500/10 text-teal-600',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">مجالات الدورات المتاحة</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            اختر المجال الذي يناسبك وابدأ رحلتك التعليمية في بيئة احترافية ومتطورة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={category.title} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center gap-4">
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                  <category.icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {category.title}
                  </h3>
                  <p className="text-text-secondary">
                    {category.description}
                  </p>
                </div>
                <button className="mt-2 text-primary font-semibold hover:text-primary-dark transition-colors">
                  استكشف الدورات ←
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
