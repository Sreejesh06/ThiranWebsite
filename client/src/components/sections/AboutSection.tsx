import { Users, Trophy, Building } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-[#1E1E24]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-accent">Thiran</span>
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
            A confluence of technology, culture, and sport
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">One of South India's biggest inter-college techno-cultural fests</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Thiran has established itself as a platform for young talents to showcase their skills in technology, arts, and sports. Since its inception, Thiran has grown exponentially in terms of participation, events, and scope.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With over 5000+ participants from 100+ colleges across South India, Thiran 2025 promises to be a grand celebration of creativity, innovation, and athletic excellence. Join us for three days of exhilarating competitions, workshops, cultural performances, and sports events.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-3">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">5000+</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Participants</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-3">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">50+</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Events</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-3">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">100+</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Colleges</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glassmorphism rounded-xl p-6 border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Students at Thiran event" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="flex items-start mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent/20 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <blockquote className="text-gray-600 dark:text-gray-300 italic">
                  "Thiran is more than an event; it's a celebration of young minds coming together to innovate, compete, and inspire. It represents the spirit of Sri Eshwar in creating leaders for tomorrow."
                </blockquote>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <div className="w-full h-full bg-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Dr. S. Narayanan</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Principal, Sri Eshwar College of Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
