import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GalleryItem } from "@/components/ui/GalleryItem";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { galleryData, getCategoryColor } from "@/data/galleryData";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredGallery = activeFilter === "all"
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-[#1E1E24]/95">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Event <span className="text-accent">Gallery</span>
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
            Glimpses from our previous events
          </motion.p>
        </div>
        
        {/* Gallery Filters */}
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
            All
          </Button>
          <Button
            variant={activeFilter === "tech" ? "default" : "outline"}
            className={`rounded-full px-6 ${
              activeFilter === "tech" 
                ? "bg-blue-500 hover:bg-blue-600" 
                : "hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300"
            }`}
            onClick={() => setActiveFilter("tech")}
          >
            Tech
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
            variant={activeFilter === "celebs" ? "default" : "outline"}
            className={`rounded-full px-6 ${
              activeFilter === "celebs" 
                ? "bg-purple-500 hover:bg-purple-600" 
                : "hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900 dark:hover:text-purple-300"
            }`}
            onClick={() => setActiveFilter("celebs")}
          >
            Celebs
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
            variant={activeFilter === "fun" ? "default" : "outline"}
            className={`rounded-full px-6 ${
              activeFilter === "fun" 
                ? "bg-yellow-500 hover:bg-yellow-600" 
                : "hover:bg-yellow-100 hover:text-yellow-600 dark:hover:bg-yellow-900 dark:hover:text-yellow-300"
            }`}
            onClick={() => setActiveFilter("fun")}
          >
            Fun
          </Button>
        </motion.div>
        
        {/* Masonry Gallery */}
        <div className="masonry-grid">
          {filteredGallery.map(item => (
            <div className="masonry-item" key={item.id}>
              <GalleryItem
                image={item.image}
                title={item.title}
                date={item.date}
                category={item.category}
              />
            </div>
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
            className="bg-accent hover:bg-accent/90 rounded-full px-8 py-6 h-auto"
          >
            View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
