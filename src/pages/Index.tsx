import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ServiceAreas from "@/components/ServiceAreas";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { WhatsApp_LOGO, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/components/constants";

const Index = () => {
  // Format WhatsApp number: remove spaces and + for URL
  const formattedWhatsAppNumber = WHATSAPP_NUMBER.replace(/\s/g, '').replace('+', '');
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CompanyIntro />
        <Services />
        <Projects />
        <About />
        <ServiceAreas />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${formattedWhatsAppNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <span className="text-2xl">{WhatsApp_LOGO}</span>
      </a>
    </>
  );
};

export default Index;