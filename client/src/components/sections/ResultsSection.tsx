import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy,
  Lightbulb,
  Globe,
  Download,
  User,
  Award,
  School
} from "lucide-react";
import { motion } from "framer-motion";
import { resultsData } from "@/data/resultsData";

export default function ResultsSection() {
  const [activeTab, setActiveTab] = useState("winners");

  return (
    <section id="results" className="py-20 bg-gray-50 dark:bg-[#1E1E24]/95">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Results & <span className="text-accent">Achievements</span>
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
            Celebrating excellence and innovation at Thiran
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <Tabs defaultValue="winners" onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap w-full mb-8 h-auto bg-transparent justify-center gap-2">
              <TabsTrigger 
                value="winners" 
                className={`rounded-full px-6 py-2 data-[state=active]:bg-accent data-[state=active]:text-white dark:data-[state=active]:bg-accent dark:data-[state=active]:text-white`}
              >
                <Trophy className="mr-2 h-4 w-4" />
                Winners
              </TabsTrigger>
              <TabsTrigger 
                value="projects" 
                className={`rounded-full px-6 py-2 data-[state=active]:bg-accent data-[state=active]:text-white dark:data-[state=active]:bg-accent dark:data-[state=active]:text-white`}
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                Project Expo Highlights
              </TabsTrigger>
              <TabsTrigger 
                value="ideas" 
                className={`rounded-full px-6 py-2 data-[state=active]:bg-accent data-[state=active]:text-white dark:data-[state=active]:bg-accent dark:data-[state=active]:text-white`}
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                Innovative Ideas
              </TabsTrigger>
              <TabsTrigger 
                value="sdg" 
                className={`rounded-full px-6 py-2 data-[state=active]:bg-accent data-[state=active]:text-white dark:data-[state=active]:bg-accent dark:data-[state=active]:text-white`}
              >
                <Globe className="mr-2 h-4 w-4" />
                SDG Impact
              </TabsTrigger>
            </TabsList>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              {/* Winners Tab */}
              <TabsContent value="winners" className="mt-0">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Competition Winners</h3>
                  <Badge variant="outline" className="px-3 py-1 text-accent">
                    <Trophy className="h-3.5 w-3.5 mr-1" /> Thiran 2024
                  </Badge>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Event</th>
                        <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Position</th>
                        <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Winner</th>
                        <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">College</th>
                        <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Certificate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {resultsData.winners.map((winner, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="py-4 text-sm">
                            <span className="font-medium">{winner.event}</span>
                            <Badge className="ml-2" variant="outline">{winner.category}</Badge>
                          </td>
                          <td className="py-4 text-sm">
                            <Badge className={
                              winner.position === 'First' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                              winner.position === 'Second' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' :
                              'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                            }>
                              {winner.position}
                            </Badge>
                          </td>
                          <td className="py-4 text-sm flex items-center">
                            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-2">
                              <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            </div>
                            {winner.winner}
                          </td>
                          <td className="py-4 text-sm flex items-center">
                            <School className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                            {winner.college}
                          </td>
                          <td className="py-4 text-sm">
                            <button className="flex items-center text-accent hover:text-accent/80">
                              <Download className="h-4 w-4 mr-1" /> Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              {/* Project Expo Tab */}
              <TabsContent value="projects" className="mt-0">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Outstanding Projects</h3>
                  <Badge variant="outline" className="px-3 py-1 text-blue-600 dark:text-blue-400">
                    <Lightbulb className="h-3.5 w-3.5 mr-1" /> Project Expo
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resultsData.projects.map((project, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                            <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{project.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                              <span className="font-medium">{project.team}</span> • {project.college}
                            </p>
                            <p className="text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.tags.map((tag, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Innovative Ideas Tab */}
              <TabsContent value="ideas" className="mt-0">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Innovative Ideas</h3>
                  <Badge variant="outline" className="px-3 py-1 text-purple-600 dark:text-purple-400">
                    <Lightbulb className="h-3.5 w-3.5 mr-1" /> Innovation Hub
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resultsData.ideas.map((idea, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{idea.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                              <span className="font-medium">{idea.creator}</span> • {idea.college}
                            </p>
                            <p className="text-sm">{idea.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {idea.domains.map((domain, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {domain}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* SDG Impact Tab */}
              <TabsContent value="sdg" className="mt-0">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">SDG Impact Projects</h3>
                  <Badge variant="outline" className="px-3 py-1 text-green-600 dark:text-green-400">
                    <Globe className="h-3.5 w-3.5 mr-1" /> Sustainable Development
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resultsData.sdgImpact.map((impact, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                            <Badge className="h-6 w-6 flex items-center justify-center bg-green-600">
                              {impact.sdgNumber}
                            </Badge>
                          </div>
                          <div>
                            <h4 className="font-semibold">{impact.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                              <span className="font-medium">{impact.team}</span> • {impact.college}
                            </p>
                            <p className="text-sm mb-2">{impact.description}</p>
                            <Badge variant="secondary" className="text-xs">
                              SDG {impact.sdgNumber}: {impact.sdgGoal}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
