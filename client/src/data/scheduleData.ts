export interface ScheduleItem {
  id: number;
  title: string;
  time: string;
  venue: string;
  category: 'technical' | 'cultural' | 'sports' | 'all';
  day: 1 | 2 | 3;
  status?: 'live' | 'upcoming' | 'done';
  icon?: string;
  featured?: boolean;
}

export const scheduleData: ScheduleItem[] = [
  // Day 1
  {
    id: 1,
    title: "Inaugural Ceremony",
    time: "9:00 AM",
    venue: "Main Auditorium",
    category: "all",
    day: 1,
    status: "live",
    icon: "flag",
    featured: true
  },
  {
    id: 2,
    title: "Paper Presentation",
    time: "10:30 AM",
    venue: "Block A, Seminar Hall",
    category: "technical",
    day: 1
  },
  {
    id: 3,
    title: "Solo Singing Competition",
    time: "2:00 PM",
    venue: "Open Air Theatre",
    category: "cultural",
    day: 1
  },
  {
    id: 4,
    title: "Basketball Tournament",
    time: "4:00 PM",
    venue: "Main Sports Ground",
    category: "sports",
    day: 1
  },
  
  // Day 2
  {
    id: 5,
    title: "AI & Machine Learning Workshop",
    time: "9:00 AM",
    venue: "Computer Lab 1",
    category: "technical",
    day: 2
  },
  {
    id: 6,
    title: "24-Hour Hackathon Begins",
    time: "10:00 AM",
    venue: "Innovation Hub",
    category: "technical",
    day: 2,
    status: "live"
  },
  {
    id: 7,
    title: "Group Dance Competition",
    time: "2:00 PM",
    venue: "Main Auditorium",
    category: "cultural",
    day: 2
  },
  {
    id: 8,
    title: "Football Tournament",
    time: "4:00 PM",
    venue: "Football Ground",
    category: "sports",
    day: 2
  },
  
  // Day 3
  {
    id: 9,
    title: "Hackathon Finale",
    time: "9:00 AM",
    venue: "Innovation Hub",
    category: "technical",
    day: 3
  },
  {
    id: 10,
    title: "Entrepreneurship Masterclass",
    time: "11:00 AM",
    venue: "Block B, Seminar Hall",
    category: "technical",
    day: 3
  },
  {
    id: 11,
    title: "Sports Tournament Finals",
    time: "2:00 PM",
    venue: "Main Sports Ground",
    category: "sports",
    day: 3,
    status: "live"
  },
  {
    id: 12,
    title: "Closing Ceremony & Awards",
    time: "6:00 PM",
    venue: "Main Auditorium",
    category: "all",
    day: 3,
    status: "upcoming",
    icon: "award",
    featured: true
  }
];

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'technical':
      return 'blue';
    case 'cultural':
      return 'red';
    case 'sports':
      return 'green';
    case 'all':
      return 'accent';
    default:
      return 'gray';
  }
};

export const getStatusColor = (status?: string): string => {
  switch (status) {
    case 'live':
      return 'blue';
    case 'upcoming':
      return 'purple';
    case 'done':
      return 'gray';
    default:
      return 'gray';
  }
};
