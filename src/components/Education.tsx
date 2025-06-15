import { GraduationCap, Award, BookOpen } from 'lucide-react';
import ScrambleText from './ScrambleText';

const Education = () => {
  const education = [
    {
      degree: "BTech, Computer Science and Business Systems",
      school: "Sri Sairam Engineering College",
      location: "Chennai, India",
      duration: "2022 - 2026",
      gpa: "8.91/10.0",
      specialization: "Computer Science and Engineering",
      coursework: [
        "Data Structures and Algorithm",
        "Database Management System",
        "Operating Systems",
        "Compiler Design",
        "Formal Language & Automata Theory",
        "Financial Management",
        "Design Thinking"
      ]
    },
    {
      degree: "BS in Data Science and Applications",
      school: "Indian Institute of Technology, Madras",
      location: "Online", 
      duration: "2022 - 2028 (Expected)",
      gpa: "8.48/10.0",
      specialization: "Data Science, Machine Learning, Artificial Intelligence",
      coursework: [
        "Linear Algebra",
        "Probability & Statistics",
        "Calculus",
        "Modern Application Development",
        "Tools for Data Science",
        "Machine Learning Fundamentals, Practices & Techniques",
        "Deep Learning",
      ]
    }
  ];

  const certifications = [
    "Google Data Analytics Professional Certificate",
    "AWS Machine Learning Specialty",
    "Deep Learning Specialization - Coursera",
    "Python for Data Science - IBM"
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrambleText 
            text="Education" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-emerald-400" size={24} />
                  </div>
                  
                  <div className="flex-grow">
                    <ScrambleText 
                      text={edu.degree}
                      className="text-xl font-bold text-white mb-1"
                      delay={index * 200}
                    />
                    <br />
                    <ScrambleText 
                      text={edu.school}
                      className="text-emerald-400 font-semibold mb-2"
                      delay={index * 200 + 100}
                    />
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span>{edu.duration}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-semibold">GPA: {edu.gpa}</span>
                    </div>

                    <ScrambleText 
                      text={`Specialization: ${edu.specialization}`}
                      className="text-gray-300 font-medium mb-4"
                      delay={index * 200 + 200}
                    />

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">Relevant Coursework:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <div key={courseIndex} className="flex items-center space-x-2">
                            <BookOpen className="text-emerald-400" size={16} />
                            <ScrambleText 
                              text={course}
                              className="text-gray-300 text-sm"
                              delay={index * 200 + 300 + courseIndex * 50}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="text-emerald-400" size={24} />
                <ScrambleText 
                  text="Certifications"
                  className="text-xl font-bold text-white"
                />
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <ScrambleText 
                      text={cert}
                      className="text-gray-300 text-sm leading-relaxed"
                      delay={400 + index * 100}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl p-6 border border-emerald-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">3.8</div>
                <div className="text-white font-semibold mb-1">Current GPA</div>
                <div className="text-gray-300 text-sm">Out of 4.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
