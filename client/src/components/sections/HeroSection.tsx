import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ParticlesContainer } from "@/components/ui/particles-container";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

// Hero slider data
const sliderData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    title: "Keynote Presentations",
    description: "Thought leaders sharing industry insights",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    title: "Cultural Extravaganza",
    description: "Fusion of tradition and innovation",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    title: "24-Hour Hackathon",
    description: "Code, collaborate, and create",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation(href);
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          filter: "blur(3px) brightness(0.4)"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/95 to-black z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(20,230,245,0.05)_0%,rgba(20,230,245,0)_70%)] z-0"></div>
      
      {/* Particles effect */}
      <div className="absolute inset-0 z-[1]">
        <ParticlesContainer />
      </div>
      
      <div className="container mx-auto px-4 py-12 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="text-center lg:text-left lg:w-1/2">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold font-montserrat text-white mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white neon-text">THIRAN</span> <span className="text-accent neon-text-pink">2026</span>
            </motion.h1>
            
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto lg:mx-0 mb-8 neon-glow"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl font-light text-white mb-6 neon-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Confluence of Talents
            </motion.p>
            
            <motion.div 
              className="glassmorphism rounded-lg px-6 py-3 mb-8 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-semibold">February 20-22, 2026</span>
                </div>
                <div className="hidden sm:block h-5 w-px bg-white/30"></div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Sri Eshwar College, Coimbatore</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button 
                className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-6 rounded-full h-auto hover-pulse neon-glow-pink"
                onClick={() => handleNavClick("#register")}
              >
                Register Now
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-full h-auto hover-float neon-glow"
                onClick={() => handleNavClick("#schedule")}
              >
                View Schedule
              </Button>
              <Button 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 rounded-full h-auto hover-float neon-glow-purple"
                onClick={() => handleNavClick("#events")}
              >
                Event Highlights
              </Button>
            </motion.div>
          </div>
          
          {/* Event Slider */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className="max-w-xl mx-auto">
              <div className="relative overflow-hidden rounded-xl glassmorphism">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {sliderData.map((slide) => (
                    <div className="min-w-full" key={slide.id}>
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-64 md:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
                        <div className="p-6">
                          <h3 className="text-white text-xl font-semibold">{slide.title}</h3>
                          <p className="text-white/80">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/50 transition-all z-10"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/50 transition-all z-10"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                  {sliderData.map((_, index) => (
                    <button 
                      key={index}
                      className={`w-2 h-2 rounded-full bg-white ${
                        currentSlide === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
