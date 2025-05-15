import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain,
  Cpu,
  Lightbulb,
  User,
  Clock,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { getColorClasses } from "@/data/workshopData";

interface WorkshopCardProps {
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  description: string;
  duration: string;
  instructor: {
    name: string;
    role: string;
    image?: string;
  };
  topics: string[];
  requirements: string;
  color: string;
  icon: string;
}

export function WorkshopCard({
  title,
  level,
  description,
  duration,
  instructor,
  topics,
  requirements,
  color,
  icon
}: WorkshopCardProps) {
  const colorClasses = getColorClasses(color);
  
  const getIcon = () => {
    switch (icon) {
      case 'brain':
        return <Brain className="h-6 w-6" />;
      case 'cpu':
        return <Cpu className="h-6 w-6" />;
      case 'lightbulb':
        return <Lightbulb className="h-6 w-6" />;
      default:
        return <Brain className="h-6 w-6" />;
    }
  };

  return (
    <motion.div 
      className="flip-card h-96 perspective"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flip-card-inner w-full h-full transition-transform duration-1000 transform-style preserve-3d hover:rotate-y-180">
        {/* Front of card */}
        <div className="flip-card-front absolute inset-0 backface-hidden">
          <Card className="h-full">
            <CardContent className="p-0 h-full flex flex-col">
              <div className={`h-48 bg-gradient-to-r ${colorClasses.gradient} flex items-center justify-center text-white p-6`}>
                {getIcon()}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <Badge className={colorClasses.badge}>
                      {level}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="mr-2 h-4 w-4" /> {duration}
                  </div>
                  <span className={`text-sm font-medium ${colorClasses.icon} hover:underline cursor-pointer`}>
                    Flip for details
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back absolute inset-0 backface-hidden rotate-y-180">
          <Card className={`h-full bg-${color}-50 dark:bg-gray-800 border-${color}-100 dark:border-gray-700`}>
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">Workshop Details</h3>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Instructor</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-2">
                    <div className={`w-full h-full flex items-center justify-center ${colorClasses.iconBg} text-white`}>
                      <User className="h-4 w-4" />
                    </div>
                  </div>
                  <span className="text-sm">{instructor.name}, {instructor.role}</span>
                </div>
              </div>
              
              <div className="mb-4 flex-grow">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">You'll Learn</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Requirements</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {requirements}
                </p>
              </div>
              
              <Button className={`${colorClasses.button} text-white mt-auto`}>
                Register for Workshop
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
