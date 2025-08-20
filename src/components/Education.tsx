
import { GraduationCap, BookOpen, School } from 'lucide-react';
import ScrambleText from './ScrambleText';

interface EducationItem {
  type: 'college' | 'school';
  degree?: string;
  school: string;
  location: string;
  duration: string;
  gpa?: string;
  percentage?: string;
  specialization?: string;
  description?: string;
  coursework?: string[];
}

const Education = () => {
  const education: EducationItem[] = [
    {
      type: 'college',
      degree: "BTech, Computer Science and Business Systems",
      school: "Sri Sairam Engineering College",
      location: "Chennai, TN, India",
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
      type: 'college',
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
        "Deep Learning"
      ]
    },
    {
      type: 'school',
      degree : "Grade XI - XII",
      school: "N.S.N Memorial Senior Secondary School (CBSE)",
      location: "Chennai, TN, India", 
      duration: "2020 - 2022",
      percentage: "90.2",
      description: "Graduated in Science Stream (Biology + Math)",
    },
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

        <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    {edu.type === 'college' ? (
                      <GraduationCap className="text-emerald-400" size={24} />
                    ) : (
                      <School className="text-emerald-400" size={24} />
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <ScrambleText 
                      text={edu.degree || edu.school}
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
                      {(edu.gpa || edu.percentage) && (
                        <>
                          <span>•</span>
                          <span className="text-emerald-400 font-semibold">
                            {edu.gpa ? `GPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                          </span>
                        </>
                      )}
                    </div>

                    {edu.description && (
                      <ScrambleText 
                        text={edu.description}
                        className="text-gray-300 mb-4"
                        delay={index * 200 + 150}
                      />
                    )}

                    {edu.specialization && (
                      <ScrambleText 
                        text={`Specialization: ${edu.specialization}`}
                        className="text-gray-300 font-medium mb-4"
                        delay={index * 200 + 200}
                      />
                    )}

                    {edu.coursework && (
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
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
