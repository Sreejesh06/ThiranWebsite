import { Play, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CelebrityCardProps {
  image: string;
  name: string;
  type: string;
  description: string;
  date: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function CelebrityCard({
  image,
  name,
  type,
  description,
  date,
  gradientFrom = "pink-500",
  gradientTo = "purple-500",
}: CelebrityCardProps) {
  return (
    <motion.div 
      className="glassmorphism rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 relative h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-64 relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E24]/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-accent/90 text-white">
            <Play className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-white">{name}</h3>
        <p className="text-accent mb-2">{type}</p>
        <p className="text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-300 flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {date}
          </div>
          <Button 
            variant="link" 
            className="text-accent hover:text-accent/80 font-medium p-0 flex items-center"
          >
            Book Passes <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className={`h-1 w-full bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}></div>
      
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
    </motion.div>
  );
}
