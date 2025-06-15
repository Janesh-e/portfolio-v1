import { Calendar, MapPin } from 'lucide-react';
import ScrambleText from './ScrambleText';

const Experience = () => {
  const experiences = [
    {
      title: "Mentorship",
      company: "Indian Institute of Technology, Madras (IITM)",
      location: "Remote",
      duration: "Sept 2023 - Dec 2023",
      description: "Served as a mentor for the Mathematics for Data Science – 2 course under IIT Madras' online BSc program, providing academic guidance and conceptual support to the learners.",
      achievements: [
        "Mentored 10+ undergraduate students enrolled in IIT Madras' online BSc program in Mathematics for Data Science – 2.",
        "Clarified complex mathematical concepts such as linear algebra, probability and statistics as applied in data science.",
      ]
    },
    {
      title: "Data Science Internship Trainee",
      company: "Corizo",
      location: "Remote",
      duration: "Jan 2024 - Mar 2024",
      description: "Honed my skills in data analysis, programming, prediction model building and problem-solving, laying a strong foundation for my journey into the field of data science ; worked on diverse projects, including stock price prediction and wine quality assessment.",
      achievements: [
        "Laid a solid foundation in data science workflows — from data collection to modeling and evaluation.",
        "Built predictive models using Python and scikit-learn.",
      ]
    },
    {
      title: "Data Scientist Intern",
      company: "University Research Lab",
      location: "Remote",
      duration: "May 2024 - June 2024",
      description: "Worked on a healthcare AI project focused on predicting diabetes risk using patient lab results and lifestyle data.",
      achievements: [
        "Engineered 8+ domain-specific features using patient lab results and lifestyle data.",
        "Implemented a stacking ensemble combining multiple base learners.",
        "Built a diabetes risk prediction model that achieved 90% accuracy, surpassing traditional risk assessment benchmarks."
      ]
    },
    {
      title: "Software & AI Subsystem Member",
      company: "Ad Astra Rover Team",
      location: "Sri Sairam Engineering College, Chennai",
      duration: "Oct 2024 - March 2025",
      description: "Orchestrated autonomous navigation system for next-generation Mars rover, enabling the rover to traverse rugged terrains while avoiding obstacles.",
      achievements: [
        "Achieved 95% obstacle avoidance accuracy using advanced path-planning algorithms and localization techniques.",
        "Integrated computer vision and sensor fusion to enhance real-time decision-making in unpredictable environments.",
        "Collaborated with a multidisciplinary team to enhance software architecture and system efficiency."
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
                        className="text-xl font-bold text-white mb-2"
                        delay={index * 200}
                      />
                      <br />
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
                  <br className="mb-4" />

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
