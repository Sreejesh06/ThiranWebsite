import { Button } from "@/components/ui/button";
import { WorkshopCard } from "@/components/ui/WorkshopCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { workshopData } from "@/data/workshopData";

export default function WorkshopsSection() {
  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="workshops" className="py-20 bg-white dark:bg-[#1E1E24]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Workshops & <span className="text-accent">Masterclasses</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Expand your knowledge with hands-on workshops and expert sessions
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {workshopData.map(workshop => (
            <WorkshopCard 
              key={workshop.id}
              title={workshop.title}
              level={workshop.level}
              description={workshop.description}
              duration={workshop.duration}
              instructor={workshop.instructor}
              topics={workshop.topics}
              requirements={workshop.requirements}
              color={workshop.color}
              icon={workshop.icon}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            className="bg-accent hover:bg-accent/90 rounded-full px-8 py-6 h-auto"
          >
            View All Workshops <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
