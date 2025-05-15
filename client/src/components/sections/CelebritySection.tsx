import { Button } from "@/components/ui/button";
import { CelebrityCard } from "@/components/ui/CelebrityCard";
import { CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import { celebrityData } from "@/data/celebrityData";

export default function CelebritySection() {
  return (
    <section id="celebrity" className="py-20 relative bg-[#2B2D42] text-white overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B2D42] via-[#2B2D42] to-accent/70 opacity-90"></div>
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-30 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Celebrity <span className="text-accent">Shows</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Star-studded performances to light up your evenings
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {celebrityData.map(celeb => (
            <CelebrityCard
              key={celeb.id}
              image={celeb.image}
              name={celeb.name}
              type={celeb.type}
              description={celeb.description}
              date={celeb.date}
              gradientFrom={celeb.gradientFrom}
              gradientTo={celeb.gradientTo}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            className="bg-white hover:bg-white/90 text-primary rounded-full px-8 py-6 h-auto"
          >
            <CalendarClock className="mr-2 h-5 w-5" /> View Evening Lineup
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
