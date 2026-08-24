import { Button } from "@/components/ui/button";
import { WhatsApp_LOGO, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/components/constants";

const Hero = () => {
  // Format WhatsApp number: remove spaces and + for URL
  const formattedWhatsAppNumber = WHATSAPP_NUMBER.replace(/\s/g, '').replace('+', '');
  
  return (
    <section className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            توريد وتركيب زجاج معماري فاخر
          </h1>
          <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto md:text-lg md:mb-8">
            نورد ونركب حلول زجاجية عالية الجودة للمشاريع السكنية والتجارية في جدة ومكة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3 text-gray-600 hover:text-gray-900 border">
              معرض الأعمال
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto bg-orange-600 text-white hover:bg-orange-700 px-8 py-3"
            >
              طلب عرض سعر
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-600 px-8 py-3 flex items-center"
            >
              <span className="mr-2">{WhatsApp_LOGO}</span>
              تواصل عبر واتساب
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - subtle geometric patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/5 rounded-full"></div>
        <div className="absolute bottom-8 right/2 -translate-x-1/2 w-28 h-28 bg-blue-500/5 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;