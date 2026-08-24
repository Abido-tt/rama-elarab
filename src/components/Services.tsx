import { Button } from "@/components/ui/button";

const Services = () => {
  const serviceCategories = [
    {
      title: "زجاج معماري",
      services: [
        "زجاج سيكوريت",
        "زجاج مقوى",
        "زجاج عازل",
        "زجاج مزدوج",
        "زجاج ملون",
        "زجاج مطبوع"
      ]
    },
    {
      title: "حلول الدش والحمامات",
      services: [
        "حاجز دش frameless",
        "أبواب دش زجاج",
        "حواجز استحمام",
        "مرايات حمام"
      ]
    },
    {
      title: "الواجهات والأبواب",
      services: [
        "واجهات زجاج",
        "أبواب زجاج أوتوماتيك",
        "أبواب زجاج manual",
        "مفصلات زجاج"
      ]
    },
    {
      title: "الحماية والزخرفة",
      services: [
        "درابزين زجاج",
        "حاجز مسابح زجاج",
        "مرايات ديكور",
        "مرايات مضيئة"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            حلولنا الزجاجية
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            نورد مجموعة شاملة من المنتجات الزجاجية للمشاريع المعمارية في جدة ومكة
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg p-6 hover:border-gray-200 transition-border"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-5 h-5 bg-orange-500/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600">▸</span>
                </span>
                {category.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start">
                    <span className="flex-shrink-0">•</span>
                    <span className="ml-2">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="px-8 py-3 text-gray-600 hover:text-gray-900 border">
            استعرض جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;