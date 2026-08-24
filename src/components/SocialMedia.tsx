import { INSTAGRAM_URL, TIKTOK_URL } from "./constants";

const SocialMedia = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          تواصل معنا عبر وسائل التواصل
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow w-48"
          >
            <div className="w-12 h-12 mb-3 bg-orange-500/10 rounded-full flex items-center justify-center">
              <span className="text-orange-600">📷</span>
            </div>
            <span className="font-medium text-gray-900">إنستغرام</span>
            <span className="mt-1 text-sm text-gray-500">@rama_alarab_glass</span>
          </a>
          <a 
            href={TIKTOK_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow w-48"
          >
            <div className="w-12 h-12 mb-3 bg-blue-500/10 rounded-full flex items-center justify-center">
              <span className="text-blue-600">🎵</span>
            </div>
            <span className="font-medium text-gray-900">تيك توك</span>
            <span className="mt-1 text-sm text-gray-500">@rama.alarab.glass</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;