import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Target, Lightbulb, Rocket, TrendingUp, Users as UsersIcon, BookOpen as BookOpenIcon } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: 'رؤيتنا',
      description: 'أن نكون المنصة التعليمية الرائدة في تطوير المهارات والمعرفة',
      icon: Target,
    },
    {
      title: 'مهمتنا',
      description: 'توفير تعليم عالي الجودة ومتاح للجميع في بيئة تفاعلية',
      icon: Lightbulb,
    },
    {
      title: 'قيمنا',
      description: 'الابتكار، الجودة، والالتزام بنجاح كل متعلم',
      icon: Rocket,
    },
  ];

  const stats = [
    { number: '500+', label: 'طالب نشط', icon: UsersIcon },
    { number: '50+', label: 'مدرب محترف', icon: TrendingUp },
    { number: '100+', label: 'دورة تدريبية', icon: BookOpenIcon },
  ];

  return (
    <section id="about" className="py-20 bg-background-light pattern-dots">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">من نحن</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            أكاديمية رشد هي منصة تعليمية رقمية متخصصة في تقديم دورات تدريبية عالية الجودة 
            في مختلف المجالات. نؤمن بأن التعليم هو مفتاح النمو والتطور، ونسعى لتوفير 
            بيئة تعليمية حديثة تساعد المتعلمين على تحقيق أهدافهم.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={value.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-secondary">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-glow"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-text-primary">
            أرقامنا تتحدث
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary" size={32} />
                </div>
                <h4 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h4>
                <p className="text-text-secondary font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
