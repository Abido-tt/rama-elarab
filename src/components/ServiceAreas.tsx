const ServiceAreas = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          مناطق الخدمة
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border border-gray-100 rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/10 rounded-full flex items-center justify-center">
              <span className="text-orange-600">📍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              جدة
            </h3>
            <p className="text-gray-600">
              نخدم جميع أحياء جدة، ونوفر حلولًا زجاجية للمشاريع السكنية 
              والتجارية والتجديدات مع استجابة سريعة وخدمة احترافية.
            </p>
          </div>
          <div className="border border-gray-100 rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
              <span className="text-blue-600">📍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              مكة المكرمة
            </h3>
            <p className="text-gray-600">
              نغطي جميع أحياء مكة المكرمة، ونقدم منتجات وخدمات زجاجية 
              مخصصة لاحتياجات كل مشروع مع الالتزام بالمعايير المحلية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;