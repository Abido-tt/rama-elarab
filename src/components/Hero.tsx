import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            توريد وتركيب زجاج معماري فاخر
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            نورد ونركب حلول زجاجية عالية الجودة للمشاريع السكنية والتجارية في جدة ومكة
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" className="px-8 py-3 text-gray-600 hover:text-gray-900 border">
              معرض الأعمال
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-3"
            >
              طلب عرض سعر
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - subtle geometric patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-orange-500/5 rounded-full"></div>
        <div className="absolute bottom-10 right-1/2 -translate-x-1/2 w-36 h-36 bg-blue-500/5 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;