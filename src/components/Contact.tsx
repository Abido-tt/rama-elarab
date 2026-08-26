However, note: we must be cautious because the Contact component might have changed? 
 We are going to write the entire Contact component as it is now, with the added button.

 But note: we are not to change unrelated parts. We are only adding the button.

 Let's get the current Contact component from the codebase:

   import { WhatsApp_LOGO, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, INSTAGRAM_URL, TIKTOK_URL } from "./constants";

   const Contact = () => {
     // Format WhatsApp number: remove spaces and + for URL
     const formattedWhatsAppNumber = WHATSAPP_NUMBER.replace(/\s/g, '').replace('+', '');
     
     return (
       <section className="py-16 bg-white" id="contact">
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
               href={`https://wa.me/${formattedWhatsAppNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} 
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

 We are going to add the phone button after the WhatsApp button and before the Instagram button.

 Let's write the updated Contact component.

</think><dyad-write path="src/components/Contact.tsx" description="Adding a phone call button in the Contact section">
import { WhatsApp_LOGO, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, INSTAGRAM_URL, TIKTOK_URL } from "./constants";

const Contact = () => {
  // Format WhatsApp number: remove spaces and + for URL
  const formattedWhatsAppNumber = WHATSAPP_NUMBER.replace(/\s/g, '').replace('+', '');
  
  return (
    <section className="py-16 bg-white" id="contact">
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
            href={`https://wa.me/${formattedWhatsAppNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-orange-600 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-lg font-medium hover:bg-orange-700 transition-colors w-full sm:w-auto"
          >
            <span className="mr-2">{WhatsApp_LOGO}</span>
            تواصل عبر واتساب
          </a>
          <a 
            href={`tel:+966558348364`}
            className="flex items-center bg-gray-100 text-gray-800 px-5 py-3 sm:px-6 sm:py-4 rounded-lg font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
          >
            <span className="mr-2">📞</span>
            اتصل بنا
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