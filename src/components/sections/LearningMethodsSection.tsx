import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';

export const LearningMethodsSection: React.FC = () => {
  const methods = [
    {
      title: 'تعليم تفاعلي',
      status: 'قريباً',
      features: [
        'تفاعل مباشر مع المحتوى',
        'أسئلة وتمارين تفاعلية',
        'ردود فورية على الإجابات',
        'تجربة تعليمية غامرة',
      ],
      available: false,
    },
    {
      title: 'دورات مسجلة',
      status: 'قريباً',
      features: [
        'تعلم بوتيرتك الخاصة',
        'إمكانية الوصول على مدار الساعة',
        'محتوى عالي الجودة',
        'شهادات إتمام معتمدة',
      ],
      available: false,
    },
    {
      title: 'تعليم مباشر',
      status: 'متاح الآن',
      features: [
        'جلسات مباشرة مع المدربين',
        'تفاعل فوري مع الطلاب',
        'جداول زمنية مرنة',
        'دعم فني مباشر',
      ],
      available: true,
    },
  ];

  return (
    <section className="py-20 bg-background-light pattern-diagonal">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">أساليب التعليم</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            اختر أسلوب التعليم الذي يناسب احتياجاتك وجدولك الزمني
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-soft transition-all duration-300 hover:shadow-glow ${
                method.available ? 'border-2 border-primary' : 'border-2 border-gray-200'
              }`}
            >
              {/* Status Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  method.available 
                    ? 'gradient-primary text-white shadow-glow' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {method.available ? (
                    <span className="flex items-center gap-1">
                      <Check size={16} />
                      {method.status}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {method.status}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
                  {method.title}
                </h3>
                
                <ul className="space-y-4">
                  {method.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        method.available ? 'bg-primary/20' : 'bg-gray-200'
                      }`}>
                        <Check 
                          size={14} 
                          className={method.available ? 'text-primary' : 'text-gray-500'} 
                        />
                      </div>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  disabled={!method.available}
                  className={`w-full mt-8 py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                    method.available
                      ? 'gradient-primary text-white shadow-glow hover:shadow-xl hover:scale-105'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {method.available ? 'استكشف الآن' : 'قريباً'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
