const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              عن راما العرب للزجاج
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              تأسست في 2024، ونمت بسرعة لتصبح موردًا موثوقًا للحلول الزجاجية 
              المعمارية في منطقتي جدة ومكة المكرمة.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              نورد ونركب مجموعة واسعة من المنتجات الزجاجية عالية الجودة 
              للمشاريع السكنية والتجارية، مع تركيز على الدقة والالتزام بالمواعيد.
            </p>
            <p className="text-gray-700 leading-relaxed">
              نخدم عملاءنا من المقاولين والمطورين وأصحاب المنازل، ونعمل على 
              تحويل متطلبات المشروع إلى واقع ملموس يجمع بين الأداء والجمال.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <span className="text-orange-600">✓</span>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">جودة مضمونة</h3>
                <p className="text-gray-600">نورد زجاجًا مواصفات عالية من مصنعين معتمدين</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">✓</span>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">تسليم في الوقت المحدد</h3>
                <p className="text-gray-600">لوجستيات فعالة لضمان التسليم حسب الجدول الزمني</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <span className="text-orange-600">✓</span>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">دعم فني متخصص</h3>
                <p className="text-gray-600">فريق متخصص لتقديم الاستشارات الفنية والحلول المناسبة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;