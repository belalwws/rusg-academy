import { motion } from 'framer-motion';
import { 
  Globe, 
  Users, 
  MessageSquare
} from 'lucide-react';

export const CommunitiesSection: React.FC = () => {
  const communities = [
    {
      title: 'المجتمع العام',
      description: 'مساحة مفتوحة تضم جميع مستخدمي المنصة، يمكن للجميع تصفح المحتوى والمشاركة بأمان',
      icon: Globe,
      features: [
        'تصفح مفتوح للجميع',
        'نشر ومشاركة محدودة للمسجلين',
        'محتوى بنّاء وآمن',
        'تفاعل اجتماعي إيجابي',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'مجتمعات الأكاديميات',
      description: 'مجتمع خاص لكل مشرف عام يجمعه مع المشرفين والمعلمين والطلاب التابعين له',
      icon: Users,
      features: [
        'إدارة فعّالة للمؤسسة',
        'تواصل مباشر بين الأعضاء',
        'متابعة النشاطات والأداء',
        'تنظيم احترافي للدورات',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'مجتمعات الدورات المباشرة',
      description: 'مجتمع خاص يجمع المعلم مع طلابه لكل دورة مباشرة في النظام',
      icon: MessageSquare,
      features: [
        'نقاش وتبادل آراء',
        'مشاركة الملفات والواجبات',
        'طرح الأسئلة والاستفسارات',
        'استمرارية التواصل بعد الحصة',
      ],
      color: 'from-green-500 to-emerald-500',
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
            <span className="gradient-primary bg-clip-text text-transparent">نظام المجتمعات التفاعلية</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            ثلاثة أنواع من المجتمعات المنظمة والآمنة لتعزيز التواصل والتفاعل
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <motion.div
              key={community.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 border-2 border-gray-100 hover:border-primary/20"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${community.color} rounded-2xl flex items-center justify-center shadow-lg mb-6`}>
                <community.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {community.title}
              </h3>
              
              <p className="text-text-secondary mb-6">
                {community.description}
              </p>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-text-primary">المميزات:</p>
                {community.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              تفاعل آمن ومنظم
            </h3>
            <p className="text-lg text-text-secondary">
              نوفر بيئة تفاعلية آمنة حيث يمكن للطلاب والمعلمين التواصل والتعاون بفعالية،
              مع الحفاظ على خصوصية البيانات وسلامة المحتوى.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
