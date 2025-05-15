import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Code, Music, Trophy, Brain, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getCategoryColor } from "@/data/eventData";

export interface EventCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  icon: string;
}

export function EventCard({
  title,
  description,
  category,
  date,
  image,
  icon
}: EventCardProps) {
  const categoryColor = getCategoryColor(category);
  
  const getIcon = () => {
    switch (icon) {
      case 'code':
        return <Code className="h-5 w-5" />;
      case 'music':
        return <Music className="h-5 w-5" />;
      case 'dribble':
        return <Trophy className="h-5 w-5" />;
      case 'brain':
        return <Brain className="h-5 w-5" />;
      case 'lightbulb':
        return <Lightbulb className="h-5 w-5" />;
      case 'cpu':
        return <Code className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };
  
  const getCategoryClass = () => {
    switch (categoryColor) {
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300';
      case 'red':
        return 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300';
      case 'green':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300';
      case 'purple':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300';
      case 'yellow':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300';
    }
  };
  
  const getIconBgClass = () => {
    switch (categoryColor) {
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-500';
      case 'red':
        return 'bg-red-100 dark:bg-red-900 text-red-500';
      case 'green':
        return 'bg-green-100 dark:bg-green-900 text-green-500';
      case 'purple':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-500';
      case 'yellow':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-500';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-500';
    }
  };
  
  const getLinkClass = () => {
    switch (categoryColor) {
      case 'blue':
        return 'text-blue-500 hover:text-blue-700 dark:text-blue-400';
      case 'red':
        return 'text-red-500 hover:text-red-700 dark:text-red-400';
      case 'green':
        return 'text-green-500 hover:text-green-700 dark:text-green-400';
      case 'purple':
        return 'text-purple-500 hover:text-purple-700 dark:text-purple-400';
      case 'yellow':
        return 'text-yellow-500 hover:text-yellow-700 dark:text-yellow-400';
      default:
        return 'text-gray-500 hover:text-gray-700 dark:text-gray-400';
    }
  };
  
  const getBorderClass = () => {
    switch (categoryColor) {
      case 'blue':
        return 'border-t-4 border-blue-500';
      case 'red':
        return 'border-t-4 border-red-500';
      case 'green':
        return 'border-t-4 border-green-500';
      case 'purple':
        return 'border-t-4 border-purple-500';
      case 'yellow':
        return 'border-t-4 border-yellow-500';
      default:
        return 'border-t-4 border-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className={`h-full overflow-hidden shadow-lg transition-all duration-300 ${getBorderClass()}`}>
        <div className="h-48 relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <Badge className={`absolute top-4 right-4 ${getCategoryClass()}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${getIconBgClass()}`}>
                {getIcon()}
              </div>
              <h3 className="text-xl font-semibold ml-3">{title}</h3>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="mr-2 h-4 w-4" />
              {date}
            </div>
            <a href="#" className={`${getLinkClass()} font-medium flex items-center`}>
              Know More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
