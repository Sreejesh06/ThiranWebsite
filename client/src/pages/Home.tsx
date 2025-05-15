import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import GallerySection from "@/components/sections/GallerySection";
import CelebritySection from "@/components/sections/CelebritySection";
import WorkshopsSection from "@/components/sections/WorkshopsSection";
import ResultsSection from "@/components/sections/ResultsSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useScrollEffect } from "@/lib/hooks/useScrollEffect";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { visible, scrollToTop } = useScrollEffect(300);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ScheduleSection />
        <GallerySection />
        <CelebritySection />
        <WorkshopsSection />
        <ResultsSection />
        <SponsorsSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <Button
        variant="default"
        size="icon"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 rounded-full bg-accent hover:bg-accent/90 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
