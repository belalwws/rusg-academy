import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { 
  Sparkles, 
  BookOpen, 
  Clock, 
  Zap, 
  Heart, 
  Mic
} from 'lucide-react';

export const IslamicFeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'أذكار الصباح والمساء',
      description: 'عرض تفاعلي للأذكار اليومية مع تنبيهات يومية',
      icon: Clock,
      color: 'from-orange-500 to-amber-500',
    },
    {
      title: 'مواقيت الصلاة الدقيقة',
      description: 'أوقات صلاة حسب الموقع الجغرافي مع تنبيهات',
      icon: Zap,
      color: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'قارئ القرآن الكريم',
      description: 'تجربة قراءة متكاملة بأصوات متعددة',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'الحديث اليومي',
      description: 'أحاديث نبوية موثقة مع شروح مبسطة',
      icon: Mic,
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'ألعاب ومسابقات إسلامية',
      description: 'تفاعل ممتع لتعزيز المعرفة الدينية',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'عداد التسبيح الرقمي',
      description: 'أداة تسبيح إلكترونية مع إحصاءات شخصية',
      icon: Sparkles,
      color: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-background-light">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full mb-6">
            <Heart size={20} />
            <span className="font-semibold">مزايا إسلامية متطورة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">المزايا الإسلامية في رشد</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            نجمع بين التعليم والدين لتقوية الإيمان جنباً إلى جنب مع التطور العلمي
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

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 lg:p-12 border border-green-500/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              تجربة إسلامية تعليمية متكاملة
            </h3>
            <p className="text-lg text-text-secondary mb-6">
              حرصنا في أكاديمية رشد على دمج أدوات ومحتوى إسلامي احترافي يساعدك على تعزيز روح الإيمان بجانب التعليم،
              من خلال تجربة تفاعلية سهلة وممتعة تناسب الأطفال والكبار.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <h4 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">6+</h4>
                <p className="text-text-secondary">مزايا إسلامية</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">مجاني</h4>
                <p className="text-text-secondary">لجميع المستخدمين</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">آمن</h4>
                <p className="text-text-secondary">محتوى معتمد</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
