export interface GalleryItem {
  id: number;
  title: string;
  date: string;
  image: string;
  category: 'tech' | 'cultural' | 'celebs' | 'sports' | 'fun';
  width: number;
  height: number;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Robotics Competition",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "tech",
    width: 600,
    height: 400
  },
  {
    id: 2,
    title: "Cultural Dance",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    category: "cultural",
    width: 600,
    height: 800
  },
  {
    id: 3,
    title: "Evening Concert",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500",
    category: "celebs",
    width: 600,
    height: 500
  },
  {
    id: 4,
    title: "Basketball Finals",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "sports",
    width: 600,
    height: 400
  },
  {
    id: 5,
    title: "Campus Fun",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "fun",
    width: 600,
    height: 400
  },
  {
    id: 6,
    title: "Code Marathon",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    category: "tech",
    width: 600,
    height: 800
  }
];

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'tech':
      return 'blue';
    case 'cultural':
      return 'red';
    case 'celebs':
      return 'purple';
    case 'sports':
      return 'green';
    case 'fun':
      return 'yellow';
    default:
      return 'gray';
  }
};
