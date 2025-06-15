
import ScrambleText from './ScrambleText';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "R", "SQL"]
    },
    {
      title: "AI/ML & Data Science",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "Web Technologies",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "AWS", "Jupyter", "VS Code", "Linux", "Tableau"]
    }
  ];

  const getRandomSize = () => {
    const sizes = ['text-sm', 'text-base', 'text-lg'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const getRandomColor = () => {
    const colors = [
      'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'bg-pink-500/20 text-pink-300 border-pink-500/30',
      'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'bg-orange-500/20 text-orange-300 border-orange-500/30'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

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

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <ScrambleText 
                text={category.title}
                className="text-2xl font-bold text-emerald-400 mb-8"
                delay={categoryIndex * 200}
              />
              
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`
                      px-4 py-2 rounded-full border transition-all duration-300
                      hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20
                      cursor-default transform hover:-translate-y-1
                      ${getRandomColor()}
                      ${getRandomSize()}
                      animate-fade-in
                    `}
                    style={{
                      animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                    }}
                  >
                    <ScrambleText 
                      text={skill}
                      className="font-medium"
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating background elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
