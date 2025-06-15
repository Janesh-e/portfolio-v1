
import ScrambleText from './ScrambleText';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "Java", level: 82 },
        { name: "C++", level: 78 },
        { name: "R", level: 75 },
        { name: "SQL", level: 90 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 92 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 93 },
        { name: "Matplotlib", level: 88 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 92 },
        { name: "AWS", level: 78 },
        { name: "Jupyter", level: 95 },
        { name: "VS Code", level: 98 },
        { name: "Linux", level: 85 },
        { name: "Tableau", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrambleText 
            text="Skills & Technologies" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
              <ScrambleText 
                text={category.title}
                className="text-xl font-bold text-emerald-400 mb-6"
                delay={categoryIndex * 200}
              />
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <ScrambleText 
                        text={skill.name}
                        className="text-gray-300 font-medium"
                        delay={categoryIndex * 200 + skillIndex * 100}
                      />
                      <span className="text-emerald-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
