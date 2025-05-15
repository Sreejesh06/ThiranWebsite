import { SponsorCard } from "@/components/ui/SponsorCard";
import { 
  sponsorData, 
  titleSponsor,
  goldSponsors,
  silverSponsors,
  associatePartners
} from "@/data/sponsorData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HandHelping } from "lucide-react";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 bg-gray-50 dark:bg-[#1E1E24]/95">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-accent">Sponsors</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Partners who make Thiran possible
          </motion.p>
        </div>
        
        {/* Title Sponsor */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">Title Sponsor</h3>
          <div className="flex justify-center">
            <SponsorCard 
              name={titleSponsor.name}
              type="title"
              icon={titleSponsor.icon}
            />
          </div>
        </motion.div>
        
        {/* Gold Sponsors */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">Gold Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {goldSponsors.map((sponsor, index) => (
              <SponsorCard 
                key={index}
                name={sponsor.name}
                type="gold"
                icon={sponsor.icon}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Silver Sponsors */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">Silver Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {silverSponsors.map((sponsor, index) => (
              <SponsorCard 
                key={index}
                name={sponsor.name}
                type="silver"
                icon={sponsor.icon}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Associate Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">Associate Partners</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {associatePartners.map((partner, index) => (
              <SponsorCard 
                key={index}
                name={partner.name}
                type="associate"
                icon={partner.icon}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Sponsorship CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">Interested in becoming a sponsor for Thiran 2026?</p>
          <Button
            className="bg-accent hover:bg-accent/90 rounded-full px-8 py-6 h-auto"
          >
            <HandHelping className="mr-2 h-5 w-5" />
            Sponsorship Opportunities
          </Button>
        </motion.div>
        
        {/* Partners Footer */}
        <motion.div 
          className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <span className="mr-2 font-medium">Powered by:</span>
              <span>Sri Eshwar College of Engineering</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center">
              <span className="mr-2 font-medium">Media Partner:</span>
              <span>Local Media Network</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center">
              <span className="mr-2 font-medium">Supported by:</span>
              <span>Student Council</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
