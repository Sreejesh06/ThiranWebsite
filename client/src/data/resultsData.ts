export interface WinnerData {
  event: string;
  category: string;
  position: string;
  winner: string;
  college: string;
  certificate?: string;
}

export interface ProjectData {
  title: string;
  team: string;
  college: string;
  description: string;
  tags: string[];
}

export interface IdeaData {
  title: string;
  creator: string;
  college: string;
  description: string;
  domains: string[];
}

export interface SDGImpactData {
  title: string;
  team: string;
  college: string;
  description: string;
  sdgNumber: number;
  sdgGoal: string;
}

export const resultsData = {
  winners: [
    {
      event: "Hackathon",
      category: "Technical",
      position: "First",
      winner: "Team Innovators",
      college: "VIT Vellore"
    },
    {
      event: "Paper Presentation",
      category: "Technical",
      position: "First",
      winner: "Rahul Sharma",
      college: "Sri Eshwar College of Engineering"
    },
    {
      event: "Robotics",
      category: "Technical",
      position: "Second",
      winner: "Team Mechanoids",
      college: "PSG Tech"
    },
    {
      event: "Dance Competition",
      category: "Cultural",
      position: "First",
      winner: "Rhythmic Souls",
      college: "Amrita University"
    },
    {
      event: "Basketball Tournament",
      category: "Sports",
      position: "First",
      winner: "Team Slam Dunkers",
      college: "SSN College of Engineering"
    }
  ] as WinnerData[],
  
  projects: [
    {
      title: "Smart Agriculture Monitoring System",
      team: "Team AgriTech",
      college: "Sri Eshwar College of Engineering",
      description: "IoT-based system for real-time monitoring of soil moisture, temperature and crop health using sensors and ML algorithms.",
      tags: ["IoT", "AI/ML", "Agriculture", "Sensors"]
    },
    {
      title: "AR-based Educational Platform",
      team: "Team Visual Learners",
      college: "VIT Vellore",
      description: "Augmented reality application to make learning more interactive and immersive for K-12 students.",
      tags: ["AR/VR", "Education", "Mobile App", "3D Modeling"]
    },
    {
      title: "Blockchain for Medical Records",
      team: "Team MedChain",
      college: "PSG Tech",
      description: "Secure and decentralized system for storing and sharing medical records using blockchain technology.",
      tags: ["Blockchain", "Healthcare", "Security", "Data Privacy"]
    },
    {
      title: "Waste Segregation Robot",
      team: "Team EcoBot",
      college: "Amrita University",
      description: "Autonomous robot that uses computer vision to identify and segregate different types of waste for recycling.",
      tags: ["Robotics", "Computer Vision", "Sustainability", "Automation"]
    }
  ] as ProjectData[],
  
  ideas: [
    {
      title: "Mental Health Chatbot for Students",
      creator: "Priya Mehta",
      college: "Sri Eshwar College of Engineering",
      description: "AI-powered chatbot that provides 24/7 mental health support, resources, and guided meditation for students facing academic stress.",
      domains: ["Healthcare", "AI", "Education"]
    },
    {
      title: "Crowdsourced Traffic Management",
      creator: "Arun Kumar",
      college: "VIT Vellore",
      description: "Platform that uses crowdsourced data from drivers to optimize traffic signals and suggest alternate routes in real-time.",
      domains: ["Smart Cities", "Mobile App", "Data Analytics"]
    },
    {
      title: "Solar-Powered Community Fridges",
      creator: "Team Sustainability",
      college: "PSG Tech",
      description: "Network of solar-powered community refrigerators where people can donate excess food to reduce waste and help the underprivileged.",
      domains: ["Renewable Energy", "Social Impact", "Food Security"]
    }
  ] as IdeaData[],
  
  sdgImpact: [
    {
      title: "Low-Cost Water Filtration System",
      team: "Team Aqua Pure",
      college: "Sri Eshwar College of Engineering",
      description: "Affordable water filtration system using locally available materials, designed for rural communities without access to clean water.",
      sdgNumber: 6,
      sdgGoal: "Clean Water and Sanitation"
    },
    {
      title: "Micro Solar Grids for Rural Areas",
      team: "Team SolarX",
      college: "VIT Vellore",
      description: "Deployable micro solar grids that can provide sustainable electricity to off-grid villages at low cost.",
      sdgNumber: 7,
      sdgGoal: "Affordable and Clean Energy"
    },
    {
      title: "Biodegradable Packaging from Agricultural Waste",
      team: "Team GreenPack",
      college: "Amrita University",
      description: "Process to convert agricultural waste into biodegradable packaging materials to reduce plastic pollution.",
      sdgNumber: 12,
      sdgGoal: "Responsible Consumption and Production"
    },
    {
      title: "AI-Based Crop Disease Detection",
      team: "Team CropGuard",
      college: "PSG Tech",
      description: "Mobile application that helps farmers identify crop diseases early using image recognition, helping increase food security.",
      sdgNumber: 2,
      sdgGoal: "Zero Hunger"
    }
  ] as SDGImpactData[]
};
