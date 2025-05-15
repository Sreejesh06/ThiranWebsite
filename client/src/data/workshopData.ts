export interface WorkshopData {
  id: number;
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

export const workshopData: WorkshopData[] = [
  {
    id: 1,
    title: "AI & Machine Learning",
    level: "Advanced",
    description: "Learn to build and deploy machine learning models for real-world applications.",
    duration: "3 hours",
    instructor: {
      name: "Dr. Arun Kumar",
      role: "AI Researcher"
    },
    topics: [
      "Fundamentals of Machine Learning",
      "Building Neural Networks",
      "Data Preprocessing Techniques",
      "Model Deployment Strategies"
    ],
    requirements: "Basic programming knowledge, laptop with Python installed",
    color: "blue",
    icon: "brain"
  },
  {
    id: 2,
    title: "Robotics & IoT",
    level: "Intermediate",
    description: "Build and program IoT-enabled robots using Arduino and Raspberry Pi.",
    duration: "4 hours",
    instructor: {
      name: "Prof. Ramesh S",
      role: "Robotics Expert"
    },
    topics: [
      "Arduino Programming",
      "Sensor Integration",
      "Servo Motor Control",
      "IoT Connectivity"
    ],
    requirements: "Basic electronics knowledge, materials provided in workshop",
    color: "green",
    icon: "cpu"
  },
  {
    id: 3,
    title: "Startup Fundamentals",
    level: "All Levels",
    description: "Learn the essentials of building successful startups from industry experts.",
    duration: "2 hours",
    instructor: {
      name: "Rahul Sharma",
      role: "Serial Entrepreneur"
    },
    topics: [
      "Idea Validation",
      "Business Model Canvas",
      "Funding Strategies",
      "Pitching to Investors"
    ],
    requirements: "Open to all, notebook recommended for ideation sessions",
    color: "yellow",
    icon: "lightbulb"
  }
];

export const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        gradient: "from-blue-500 to-purple-600",
        badge: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
        icon: "text-blue-600 dark:text-blue-400",
        iconBg: "bg-blue-500"
      };
    case 'green':
      return {
        gradient: "from-green-500 to-teal-600",
        badge: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        button: "bg-green-600 hover:bg-green-700",
        icon: "text-green-600 dark:text-green-400",
        iconBg: "bg-green-500"
      };
    case 'yellow':
      return {
        gradient: "from-yellow-500 to-orange-600",
        badge: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
        button: "bg-yellow-600 hover:bg-yellow-700",
        icon: "text-yellow-600 dark:text-yellow-400",
        iconBg: "bg-yellow-500"
      };
    default:
      return {
        gradient: "from-gray-500 to-gray-600",
        badge: "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200",
        button: "bg-gray-600 hover:bg-gray-700",
        icon: "text-gray-600 dark:text-gray-400",
        iconBg: "bg-gray-500"
      };
  }
};
