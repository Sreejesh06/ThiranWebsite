import { useState } from "react";
import { EventCard } from "@/components/ui/EventCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { eventData } from "@/data/eventData";

export default function EventsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filteredEvents = activeFilter === "all"
    ? eventData
    : eventData.filter(event => event.category === activeFilter);
    
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
    <section id="events" className="py-20 bg-gray-50 dark:bg-[#1E1E24]/90">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-accent">Events</span>
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
            From technical competitions to cultural performances
          </motion.p>
        </div>
        
        {/* Event Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            className={`rounded-full px-6 ${
              activeFilter === "all" 
                ? "bg-accent hover:bg-accent/90" 
                : "hover:bg-accent/10 hover:text-accent"
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All Events
          </Button>
          <Button
            variant={activeFilter === "technical" ? "default" : "outline"}
            className={`rounded-full px-6 ${
              activeFilter === "technical" 
                ? "bg-blue-500 hover:bg-blue-600" 
                : "hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300"
            }`}
            onClick={() => setActiveFilter("technical")}
          >
            Technical
          </Button>
          <Button
            variant={activeFilter === "cultural" ? "default" : "outline"}
            className={`rounded-full px-6 ${
              activeFilter === "cultural" 
                ? "bg-red-500 hover:bg-red-600" 
                : "hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 dark:hover:text-red-300"
            }`}
            onClick={() => setActiveFilter("cultural")}
          >
            Cultural
          </Button>
          <Button
            variant={activeFilter === "sports" ? "default" : "outline"}
            className={`rounded-full px-6 ${
              activeFilter === "sports" 
                ? "bg-green-500 hover:bg-green-600" 
                : "hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-900 dark:hover:text-green-300"
            }`}
            onClick={() => setActiveFilter("sports")}
          >
            Sports
          </Button>
          <Button
            variant={activeFilter === "workshops" ? "default" : "outline"}
            className={`rounded-full px-6 ${
              activeFilter === "workshops" 
                ? "bg-purple-500 hover:bg-purple-600" 
                : "hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900 dark:hover:text-purple-300"
            }`}
            onClick={() => setActiveFilter("workshops")}
          >
            Workshops
          </Button>
          <Button
            variant={activeFilter === "masterclasses" ? "default" : "outline"}
            className={`rounded-full px-6 ${
              activeFilter === "masterclasses" 
                ? "bg-yellow-500 hover:bg-yellow-600" 
                : "hover:bg-yellow-100 hover:text-yellow-600 dark:hover:bg-yellow-900 dark:hover:text-yellow-300"
            }`}
            onClick={() => setActiveFilter("masterclasses")}
          >
            Masterclasses
          </Button>
        </motion.div>
        
        {/* Event Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredEvents.map(event => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              description={event.description}
              category={event.category}
              date={event.date}
              image={event.image}
              icon={event.icon}
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
            View All Events <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
