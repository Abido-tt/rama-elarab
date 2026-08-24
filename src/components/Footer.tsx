import { WhatsApp_LOGO, WHATSAPP_NUMBER, INSTAGRAM_URL, TIKTOK_URL } from "./constants";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <span className="text-gray-900 font-medium">راما العرب للزجاج</span>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:space-x-6">
            <div className="mb-2 sm:mb-0">
              <span className="text-gray-600">جدة &middot; مكة المكرمة</span>
            </div>
            <div className="flex space-x-4">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                إنستغرام
              </a>
              <a 
                href={TIKTOK_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                تيك توك
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
          © 2024-2026 راما العرب للزجاج. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;