import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { scheduleData } from "@/data/scheduleData";

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filteredEvents = scheduleData
    .filter(event => event.day === activeDay)
    .filter(event => activeFilter === "all" || event.category === activeFilter);

  return (
    <section id="schedule" className="py-20 bg-white dark:bg-[#1E1E24]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Event <span className="text-accent">Schedule</span>
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
            Plan your 3-day Thiran experience
          </motion.p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Schedule Tabs */}
          <motion.div 
            className="flex overflow-x-auto mb-8 sticky top-20 bg-white dark:bg-[#1E1E24] z-30 pb-2 -mx-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant={activeDay === 1 ? "default" : "outline"}
              className={`flex-shrink-0 px-6 py-3 rounded-lg mr-4 flex flex-col items-center ${
                activeDay === 1 ? "bg-accent hover:bg-accent/90" : ""
              }`}
              onClick={() => setActiveDay(1)}
            >
              <span className="block text-sm opacity-80">Day 1</span>
              Feb 20, 2025
            </Button>
            <Button
              variant={activeDay === 2 ? "default" : "outline"}
              className={`flex-shrink-0 px-6 py-3 rounded-lg mr-4 flex flex-col items-center ${
                activeDay === 2 ? "bg-accent hover:bg-accent/90" : ""
              }`}
              onClick={() => setActiveDay(2)}
            >
              <span className="block text-sm opacity-80">Day 2</span>
              Feb 21, 2025
            </Button>
            <Button
              variant={activeDay === 3 ? "default" : "outline"}
              className={`flex-shrink-0 px-6 py-3 rounded-lg flex flex-col items-center ${
                activeDay === 3 ? "bg-accent hover:bg-accent/90" : ""
              }`}
              onClick={() => setActiveDay(3)}
            >
              <span className="block text-sm opacity-80">Day 3</span>
              Feb 22, 2025
            </Button>
          </motion.div>
          
          {/* Schedule Filters */}
          <motion.div 
            className="mb-8 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              className={`px-4 py-2 text-sm rounded-full ${
                activeFilter === "all" ? "bg-accent hover:bg-accent/90" : ""
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All Events
            </Button>
            <Button
              variant={activeFilter === "technical" ? "default" : "outline"}
              className={`px-4 py-2 text-sm rounded-full ${
                activeFilter === "technical" ? "bg-blue-500 hover:bg-blue-600" : ""
              }`}
              onClick={() => setActiveFilter("technical")}
            >
              Technical
            </Button>
            <Button
              variant={activeFilter === "cultural" ? "default" : "outline"}
              className={`px-4 py-2 text-sm rounded-full ${
                activeFilter === "cultural" ? "bg-red-500 hover:bg-red-600" : ""
              }`}
              onClick={() => setActiveFilter("cultural")}
            >
              Cultural
            </Button>
            <Button
              variant={activeFilter === "sports" ? "default" : "outline"}
              className={`px-4 py-2 text-sm rounded-full ${
                activeFilter === "sports" ? "bg-green-500 hover:bg-green-600" : ""
              }`}
              onClick={() => setActiveFilter("sports")}
            >
              Sports
            </Button>
          </motion.div>
          
          {/* Schedule Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 ml-4 md:ml-6 z-0"></div>
            
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <TimelineItem
                  key={event.id}
                  title={event.title}
                  time={event.time}
                  venue={event.venue}
                  category={event.category}
                  status={event.status}
                  icon={event.icon}
                  featured={event.featured}
                />
              ))
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                No events found for this filter combination. Try another filter.
              </div>
            )}
          </div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full"
            >
              Download Full Schedule <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
