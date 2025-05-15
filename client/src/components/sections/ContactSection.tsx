import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FAQItem } from "@/components/ui/FAQItem";
import { MapPin, Phone, Mail, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { faqData } from "@/data/faqData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Here we would typically send the data to the server
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#1E1E24]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Contact <span className="text-accent">Us</span>
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
            Get in touch with the Thiran team
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glassmorphism rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-800 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-800 dark:text-white"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <Select value={formData.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-800 dark:text-white">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="registration">Registration Inquiry</SelectItem>
                      <SelectItem value="sponsorship">Sponsorship</SelectItem>
                      <SelectItem value="event">Event Details</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-800 dark:text-white"
                    placeholder="Your message"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-white font-medium transition-all"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Organizer Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Faculty Coordinator */}
              <div className="glassmorphism rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4 flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white">
                      <User className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Dr. Lakshmi N</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Faculty Coordinator</p>
                    <a href="tel:+919876543210" className="text-sm text-accent hover:underline mt-1 block">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Student Coordinator */}
              <div className="glassmorphism rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4 flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center bg-green-500 text-white">
                      <User className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rahul Sharma</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Student Coordinator</p>
                    <a href="tel:+919876543211" className="text-sm text-accent hover:underline mt-1 block">
                      +91 98765 43211
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location & Map */}
            <div className="glassmorphism rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
              <h3 className="text-xl font-semibold mb-4">Find Us</h3>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-40 mb-4 flex items-center justify-center">
                <MapPin className="h-10 w-10 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Sri Eshwar College of Engineering<br />
                Kinathukadavu, Coimbatore - 641202<br />
                Tamil Nadu, India
              </p>
            </div>
            
            {/* FAQs */}
            <div className="glassmorphism rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <FAQItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
