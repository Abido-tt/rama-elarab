import { INSTAGRAM_URL, TIKTOK_URL } from "./constants";

const SocialMedia = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 md:text-3xl">
          تواصل معنا عبر وسائل التواصل
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-lg p-4 sm:p-5 border border-gray-100 hover:border-gray-200 transition-all w-36 sm:w-40"
          >
            <div className="w-10 h-10 mb-2 sm:mb-3 bg-orange-500/10 rounded-full flex items-center justify-center">
              <span className="text-orange-600">📷</span>
            </div>
            <span className="font-medium text-gray-900 text-sm sm:text-base">إنستغرام</span>
            <span className="mt-1 text-xs sm:text-sm text-gray-500">@rama_alarab_glass</span>
          </a>
          <a 
            href={TIKTOK_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-lg p-4 sm:p-5 border border-gray-100 hover:border-gray-200 transition-all w-36 sm:w-40"
          >
            <div className="w-10 h-10 mb-2 sm:mb-3 bg-blue-500/10 rounded-full flex items-center justify-center">
              <span className="text-blue-600">🎵</span>
            </div>
            <span className="font-medium text-gray-900 text-sm sm:text/base">تيك توك</span>
            <span className="mt-1 text-xs sm:text-sm text-gray-500">@rama.alarab.glass</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;