import { WhatsApp_LOGO, WHATSAPP_NUMBER, INSTAGRAM_URL, TIKTOK_URL } from "./constants";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          عندك مشروع زجاج؟ خلنا ننفذه.
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          فريقنا جاهز لمناقشة مشروعك وتقديم أفضل الحلول الزجاجية والألمنيوم 
          لاحتياجاتك السكنية أو التجارية.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            <span className="mr-2">{WhatsApp_LOGO}</span>
            تواصل عبر واتساب
          </a>
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            <span className="mr-2">📷</span>
            زيارة إنستغرام
          </a>
          <a 
            href={TIKTOK_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
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