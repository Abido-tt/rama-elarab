import { Button } from "@/components/ui/button";

const Services = () => {
  const serviceCategories = [
    {
      title: "أعمال الزجاج والسيكوريت",
      services: [
        "زجاج سيكوريت",
        "واجهات زجاج سيكوريت",
        "أبواب زجاج سيكوريت",
        "زجاج مقوى",
        "زجاج لمنيتد",
        "زجاج دبل",
        "زجاج عازل حراري",
        "زجاج ضد الرصاص",
        "زجاج دوران",
        "زجاج ذكي / إلكتروني"
      ]
    },
    {
      title: "الشاور والحمامات",
      services: [
        "زجاج شاور",
        "حاجز شاور",
        "باب شاور",
        "شاور سحاب",
        "باب شاور سحاب",
        "باب حمام سحاب"
      ]
    },
    {
      title: "الواجهات والأبواب",
      services: [
        "واجهات زجاج",
        "أبواب زجاج",
        "أبواب زجاج أوتوماتيك",
        "أبواب سحاب كهرباء",
        "مفصلات زجاج"
      ]
    },
    {
      title: "الدربزين وحواجز المسابح",
      services: [
        "دربزين زجاج",
        "هندريل دربزين",
        "فني دربزين زجاج",
        "حاجز مسبح زجاج"
      ]
    },
    {
      title: "الألمنيوم",
      services: [
        "نوافذ ألمنيوم",
        "أبواب ألمنيوم",
        "درايش ألمنيوم",
        "سكاي لايت ألمنيوم",
        "تنفيذ أبواب ألمنيوم"
      ]
    },
    {
      title: "المرايات والديكور",
      services: [
        "مرايات",
        "ديكورات مرايات",
        "مرايات مداخل",
        "مرايا مضيئة",
        "مرايات عسلي",
        "مرايات بلجيكي",
        "مرايات مربعات",
        "ديكور مرايا معينات"
      ]
    },
    {
      title: "الصيانة",
      services: [
        "صيانة أبواب زجاج",
        "صيانة زجاج"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          خدماتنا
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
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
        
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" className="px-8 py-3">
            عرض جميع الخدمات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;