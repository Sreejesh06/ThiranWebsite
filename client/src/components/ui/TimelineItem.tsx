import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { getCategoryColor, getStatusColor } from "@/data/scheduleData";

interface TimelineItemProps {
  title: string;
  time: string;
  venue: string;
  category: string;
  status?: string;
  icon?: string;
  featured?: boolean;
}

export function TimelineItem({
  title,
  time,
  venue,
  category,
  status,
  icon,
  featured,
}: TimelineItemProps) {
  const categoryColor = getCategoryColor(category);
  const statusColor = getStatusColor(status);
  
  const getCategoryClass = () => {
    switch (categoryColor) {
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300';
      case 'red':
        return 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300';
      case 'green':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300';
      case 'accent':
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
    }
  };
  
  const getStatusClass = () => {
    switch (statusColor) {
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300';
      case 'purple':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300';
      case 'gray':
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
      default:
        return '';
    }
  };
  
  const getIconColor = () => {
    switch (categoryColor) {
      case 'blue':
        return 'bg-blue-500';
      case 'red':
        return 'bg-red-500';
      case 'green':
        return 'bg-green-500';
      case 'accent':
        return 'bg-accent';
      default:
        return 'bg-gray-500';
    }
  };
  
  const getStatusIcon = () => {
    if (!status) return null;
    
    switch (status) {
      case 'live':
        return (
          <span className="w-2 h-2 rounded-full bg-blue-500 mr-1 animate-pulse"></span>
        );
      case 'upcoming':
        return (
          <span className="w-2 h-2 rounded-full bg-purple-500 mr-1"></span>
        );
      default:
        return null;
    }
  };
  
  const getIcon = () => {
    if (!icon) return null;
    
    switch (icon) {
      case 'flag':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        );
      case 'award':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="mb-8 flex"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-16 md:w-24 flex-shrink-0 flex flex-col items-center">
        <div className={`w-9 h-9 rounded-full ${getIconColor()} flex items-center justify-center text-white z-10`}>
          {getIcon() || (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <span className="text-sm font-semibold mt-2 text-center">{time}</span>
      </div>
      
      <div className="flex-1 glassmorphism p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-4 hover:shadow-md transition-shadow">
        <div className="flex flex-wrap justify-between">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1" /> {venue}
            </p>
          </div>
          <div className="flex gap-2 mt-1 md:mt-0">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryClass()}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
            
            {status && (
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusClass()}`}>
                {getStatusIcon()}
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            )}
            
            {featured && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-medium">
                Featured
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
