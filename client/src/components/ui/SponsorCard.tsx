import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building, Landmark, Cpu, Rocket, Coffee, Pen, Utensils, PaintbrushVertical, Camera, Headphones } from "lucide-react";

interface SponsorCardProps {
  name: string;
  type: 'title' | 'gold' | 'silver' | 'associate';
  icon: string;
}

export function SponsorCard({ name, type, icon }: SponsorCardProps) {
  const getSizeClassByType = () => {
    switch (type) {
      case 'title':
        return "w-64 h-32";
      case 'gold':
        return "h-24";
      case 'silver':
        return "h-20";
      case 'associate':
        return "h-16";
      default:
        return "h-24";
    }
  };
  
  const getIconSizeByType = () => {
    switch (type) {
      case 'title':
        return "w-24 h-24 text-4xl";
      case 'gold':
        return "w-16 h-16 text-2xl";
      case 'silver':
        return "w-12 h-12 text-xl";
      case 'associate':
        return "w-10 h-10 text-sm";
      default:
        return "w-16 h-16 text-2xl";
    }
  };
  
  const getIcon = () => {
    switch (icon) {
      case 'building':
        return <Building className="h-full w-full" />;
      case 'landmark':
        return <Landmark className="h-full w-full" />;
      case 'microchip':
        return <Cpu className="h-full w-full" />;
      case 'rocket':
        return <Rocket className="h-full w-full" />;
      case 'coffee':
        return <Coffee className="h-full w-full" />;
      case 'pen':
        return <Pen className="h-full w-full" />;
      case 'utensils':
        return <Utensils className="h-full w-full" />;
      case 'paint-brush':
        return <PaintbrushVertical className="h-full w-full" />;
      case 'camera':
        return <Camera className="h-full w-full" />;
      case 'headphones':
        return <Headphones className="h-full w-full" />;
      default:
        return <Building className="h-full w-full" />;
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
      className={`${getSizeClassByType()} bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center p-4 shadow-md transition-all`}
    >
      <div className="text-center">
        <div className={`${getIconSizeByType()} mx-auto bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center`}>
          <div className="text-gray-400 dark:text-gray-500 w-1/2 h-1/2">
            {getIcon()}
          </div>
        </div>
        {type === 'title' && <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">{name}</p>}
      </div>
    </motion.div>
  );
}
