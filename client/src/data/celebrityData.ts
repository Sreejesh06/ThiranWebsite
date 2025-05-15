export interface CelebrityData {
  id: number;
  name: string;
  type: string;
  description: string;
  date: string;
  image: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const celebrityData: CelebrityData[] = [
  {
    id: 1,
    name: "Rockstar Night",
    type: "Musical Performance",
    description: "A high-energy rock performance that will have everyone on their feet.",
    date: "Feb 20, 8:00 PM",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    gradientFrom: "blue-500",
    gradientTo: "purple-500"
  },
  {
    id: 2,
    name: "EDM Extravaganza",
    type: "DJ Night",
    description: "Experience electric beats and stunning visuals in this immersive EDM show.",
    date: "Feb 21, 8:00 PM",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    gradientFrom: "green-500",
    gradientTo: "blue-500"
  },
  {
    id: 3,
    name: "Comedy Night",
    type: "Stand-up Comedy",
    description: "Get ready to laugh out loud with India's top comedians performing live.",
    date: "Feb 22, 7:00 PM",
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    gradientFrom: "yellow-500",
    gradientTo: "red-500"
  }
];
