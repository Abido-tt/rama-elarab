import { WhatsApp_LOGO, WHATSAPP_NUMBER, INSTAGRAM_URL, TIKTOK_URL } from "./constants";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between">
          <div className="mb-3 sm:mb-0">
            <a href="/" className="flex items-center">
              <img 
                src="dyad-media://media/dreamy-tardigrade-flit/.dyad/media/a4a3cbe2331120c1db390521877b9ee0fe0ec19b23d8f1c11e6630cbf1c75e41.jpeg"
                alt="شعار راما العرب للزجاج"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:space-x-4">
            <div className="mb-2 sm:mb-0">
              <span className="text-gray-600">جدة &middot; مكة المكرمة</span>
            </div>
            <div className="flex space-x-2 sm:space-x-3">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
              >
                إنستغرام
              </a>
              <a 
                href={TIKTOK_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
              >
                تيك توك
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
          © 2024-2026 راما العرب للزجاج. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;