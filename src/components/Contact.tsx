import { WhatsApp_LOGO, WHATSAPP_NUMBER, INSTAGRAM_URL, TIKTOK_URL } from "./constants";

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-3xl">
          مشروع زجاج؟ ننفذه لك في جدة ومكة
        </h2>
        <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto md:text-lg">
          فريقنا جاهز لمناقشة مشروعك وتقديم أفضل الحلول الزجاجية 
          لاحتياجاتك السكنية أو التجارية في جدة ومكة المكرمة.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-orange-600 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-lg font-medium hover:bg-orange-700 transition-colors w-full sm:w-auto"
          >
            <span className="mr-2">{WhatsApp_LOGO}</span>
            تواصل عبر واتساب
          </a>
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-gray-100 text-gray-800 px-5 py-3 sm:px-6 sm:py-4 rounded-lg font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
          >
            <span className="mr-2">📷</span>
            زيارة إنستغرام
          </a>
          <a 
            href={TIKTOK_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-gray-100 text-gray-800 px-5 py-3 sm:px-6 sm:py-4 rounded-lg font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
          >
            <span className="mr-2">🎵</span>
            زيارة تيك توك
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;