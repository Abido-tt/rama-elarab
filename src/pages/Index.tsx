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

const Index = () => {
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
    </>
  );
};

export default Index;