import { motion } from "framer-motion";

interface GalleryItemProps {
  image: string;
  title: string;
  date: string;
  category: string;
}

export function GalleryItem({ image, title, date, category }: GalleryItemProps) {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg group mb-4"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-white/80 text-sm">{date}</p>
        </div>
      </div>
    </motion.div>
  );
}
