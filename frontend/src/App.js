import "@/App.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import HoursLocation from "@/components/sections/HoursLocation";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <SmoothScroll>
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Gallery />
          <HoursLocation />
          <Reviews />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </SmoothScroll>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
