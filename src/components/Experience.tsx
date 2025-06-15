
import { Calendar, MapPin } from 'lucide-react';
import ScrambleText from './ScrambleText';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "Jun 2024 - Aug 2024",
      description: "Developed and optimized machine learning models for customer behavior analysis. Improved model accuracy by 23% and reduced processing time by 40%.",
      achievements: [
        "Built predictive models using Python and scikit-learn",
        "Collaborated with data engineering team on pipeline optimization",
        "Presented findings to senior management team"
      ]
    },
    {
      title: "Data Science Research Assistant",
      company: "University Research Lab",
      location: "Campus",
      duration: "Jan 2024 - Present",
      description: "Conducting research on natural language processing applications in healthcare data analysis under Professor Johnson.",
      achievements: [
        "Published 2 papers in peer-reviewed conferences",
        "Developed NLP models for medical text analysis",
        "Mentored 3 junior students in research methodology"
      ]
    },
    {
      title: "Software Development Intern",
      company: "StartupXYZ",
      location: "New York, NY",
      duration: "May 2023 - Aug 2023",
      description: "Full-stack development of web applications using React and Node.js. Worked in an agile environment with daily standups and sprint planning.",
      achievements: [
        "Developed 5 major features for the main product",
        "Improved application performance by 35%",
        "Participated in code reviews and debugging sessions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrambleText 
            text="Experience" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-black"></div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-32 bg-emerald-500/30 ml-1.5 mt-4"></div>
                  )}
                </div>
                
                <div className="flex-grow bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <ScrambleText 
                        text={exp.title}
                        className="text-xl font-bold text-white mb-1"
                        delay={index * 200}
                      />
                      <ScrambleText 
                        text={exp.company}
                        className="text-emerald-400 font-semibold mb-2"
                        delay={index * 200 + 100}
                      />
                    </div>
                    
                    <div className="text-sm text-gray-400 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ScrambleText 
                    text={exp.description}
                    className="text-gray-300 mb-4 leading-relaxed"
                    delay={index * 200 + 200}
                  />

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <ScrambleText 
                          text={achievement}
                          className="text-gray-300 text-sm"
                          delay={index * 200 + 300 + achIndex * 100}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
