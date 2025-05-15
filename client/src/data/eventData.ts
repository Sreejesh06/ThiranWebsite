export interface EventData {
  id: number;
  title: string;
  description: string;
  category: 'technical' | 'cultural' | 'sports' | 'workshops' | 'masterclasses';
  date: string;
  image: string;
  icon: string;
}

export const eventData: EventData[] = [
  {
    id: 1,
    title: "Robo Wars",
    description: "Design and build combat robots to compete in an arena-style tournament.",
    category: "technical",
    date: "Feb 21, 2025",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    icon: "cpu"
  },
  {
    id: 2,
    title: "Rhythmic Pulse",
    description: "Showcase your dancing talents across various styles from classical to contemporary.",
    category: "cultural",
    date: "Feb 20, 2025",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    icon: "music"
  },
  {
    id: 3,
    title: "Basketball Showdown",
    description: "Inter-college basketball tournament with thrilling matches and fierce competition.",
    category: "sports",
    date: "Feb 20-22, 2025",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    icon: "dribble"
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Hands-on workshop on building and deploying machine learning models.",
    category: "workshops",
    date: "Feb 21, 2025",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    icon: "brain"
  },
  {
    id: 5,
    title: "Startup Fundamentals",
    description: "Learn from successful entrepreneurs about building sustainable startups.",
    category: "masterclasses",
    date: "Feb 22, 2025",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    icon: "lightbulb"
  },
  {
    id: 6,
    title: "Code Marathon",
    description: "24-hour hackathon to build innovative solutions for real-world problems.",
    category: "technical",
    date: "Feb 21-22, 2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    icon: "code"
  }
];

export const getCategoryColor = (category: string) => {
  switch (category) {
    case 'technical':
      return 'blue';
    case 'cultural':
      return 'red';
    case 'sports':
      return 'green';
    case 'workshops':
      return 'purple';
    case 'masterclasses':
      return 'yellow';
    default:
      return 'gray';
  }
};
