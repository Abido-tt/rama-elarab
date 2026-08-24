const ServiceAreas = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8 md:text-3xl">
          مناطق الخدمة
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <div className="border border-gray-100 rounded-lg p-6 text-center">
            <div className="w-14 h-14 mx-auto mb-3 bg-orange-500/10 rounded-full flex items-center justify-center">
              <span className="text-orange-600">📍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              جدة
            </h3>
            <p className="text-sm text-gray-600">
              نخدم جميع أحياء جدة، ونوفر حلولًا زجاجية للمشاريع السكنية 
              والتجارية والتجديدات مع استجابة سريعة وخدمة احترافية.
            </p>
          </div>
          <div className="border border-gray-100 rounded-lg p-6 text-center">
            <div className="w-14 h-14 mx-auto mb-3 bg-blue-500/10 rounded-full flex items-center justify-center">
              <span className="text-blue-600">📍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              مكة المكرمة
            </h3>
            <p className="text-sm text-gray-600">
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