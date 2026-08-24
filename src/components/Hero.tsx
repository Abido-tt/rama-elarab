import { Button } from "@/components/ui/button";
import { WhatsApp_LOGO, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/components/constants";

const Hero = () => {
  // Format WhatsApp number: remove spaces and + for URL
  const formattedWhatsAppNumber = WHATSAPP_NUMBER.replace(/\s/g, '').replace('+', '');
  
  return (
    <section className="relative" id="hero">
      <div className="absolute inset-0">
        <img 
          src="dyad-media://media/dreamy-tardigrade-flit/.dyad/media/404429d363ba97e45f420cebe6e244a0574360ea14f10f2d4220647fc9315226.jpeg"
          alt="زجاج معماري"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4 md:text-4xl">
            توريد وتركيب زجاج معماري فاخر
          </h1>
          <p className="text-base text-white/90 mb-6 max-w-xl mx-auto md:text-lg md:mb-8">
            نورد ونركب حلول زجاجية عالية الجودة للمشاريع السكنية والتجارية في جدة ومكة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-3 text-white hover:text-white/90 border border-white/50"
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              معرض الأعمال
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto bg-orange-600 text-white hover:bg-orange-700 px-8 py-3"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
            >
              طلب عرض سعر
            </Button>
            <a 
              href={`https://wa.me/${formattedWhatsAppNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto bg-green-500 text-white hover:bg-green-600 px-8 py-3 flex items-center justify-center"
            >
              <span className="mr-2">{WhatsApp_LOGO}</span>
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;