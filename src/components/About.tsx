const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              عن راما العرب للزجاج
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              تأسست في 2024، ونمت بسرعة لتصبح واحدة من الشركات الرائدة في مجال 
              تركيب الزجاج والألمنيوم في منطقتي مكة المكرمة والمدينة المنورة.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              نركز على تقديم حلول زجاجية عصرية بتنفيذ احترافي، مع اهتمام فائق 
              بالتفاصيل والجودة في كل مشروع نقوم به.
            </p>
            <p className="text-gray-700 leading-relaxed">
              نخدم كل من المساحات السكنية والتجارية، ونعمل على تحويل رؤى عملائنا 
              إلى واقع ملموس يجمع بين الجمال والوظيفة.
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
                <h3 className="font-medium text-gray-900">تنفيذ متخصص</h3>
                <p className="text-gray-600">فريق عمل مدرب على أعلى معايير الجودة والسلامة</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">✓</span>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">اهتمام بالتفاصيل</h3>
                <p className="text-gray-600">من التصميم الدقيق إلى التنفيذ المثالي</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <span className="text-orange-600">✓</span>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">حلول مناسبة</h3>
                <p className="text-gray-600">للمساحات السكنية والتجارية على حد سواء</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;