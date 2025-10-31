import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { 
  Sparkles, 
  Users, 
  MessageCircle, 
  Award, 
  BookOpen, 
  RefreshCw 
} from 'lucide-react';

export const WhyRushdSection: React.FC = () => {
  const features = [
    {
      title: 'بيئة تعليمية حديثة',
      description: 'منصة متطورة بتقنيات حديثة لتجربة تعليمية سلسة',
      icon: Sparkles,
      color: 'from-primary to-accent',
    },
    {
      title: 'مجتمع أكاديمي نشط',
      description: 'انضم لمجتمع من المتعلمين الطموحين وشارك خبراتك',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'نظام تواصل متطور',
      description: 'تواصل مباشر مع المدربين والطلاب في بيئة تفاعلية',
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'مدربون محترفون',
      description: 'خبراء متخصصون في مجالاتهم مع سنوات من الخبرة',
      icon: Award,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'أساليب تعليم متنوعة',
      description: 'مباشر، تفاعلي، أو مسجل - اختر ما يناسبك',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'محتوى محدث باستمرار',
      description: 'مواد دراسية حديثة تواكب آخر التطورات في كل مجال',
      icon: RefreshCw,
      color: 'from-teal-500 to-blue-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">لماذا أكاديمية رشد؟</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            نقدم لك تجربة تعليمية متكاملة تجمع بين الجودة والابتكار
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={feature.title} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
