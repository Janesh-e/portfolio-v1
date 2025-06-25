
import ScrambleText from './ScrambleText';
import { 
  SiPython, SiJavascript, SiCplusplus, SiR, SiMysql,
  SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiOpencv,
  SiFlask, SiFastapi, SiPostgresql, SiVuedotjs, SiDocker,
  SiGit, SiJupyter, SiAnaconda, SiLinux, SiVisualstudiocode
} from 'react-icons/si';
import { FaC } from 'react-icons/fa6';
import { SiGnubash } from 'react-icons/si';
import { Coffee } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "C", icon: FaC },
        { name: "C++", icon: SiCplusplus },
        { name: "R", icon: SiR },
        { name: "SQL", icon: SiMysql },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Java", icon: Coffee },
        { name: "Bash", icon: SiGnubash }
      ]
    },
    {
      title: "AI/ML & Data Science",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "PyTorch", icon: SiPytorch },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "OpenCV", icon: SiOpencv }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "Flask", icon: SiFlask },
        { name: "FastAPI", icon: SiFastapi },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Vue.js", icon: SiVuedotjs },
        { name: "Docker", icon: SiDocker }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "Jupyter", icon: SiJupyter },
        { name: "Anaconda", icon: SiAnaconda },
        { name: "VS Code", icon: SiVisualstudiocode },
        { name: "Linux", icon: SiLinux }
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

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <ScrambleText 
                text={category.title}
                className="text-2xl font-bold text-emerald-400 mb-8"
                delay={categoryIndex * 200}
              />
              
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skillIndex}
                      className="
                        px-4 py-3 rounded-full border border-emerald-500/30
                        bg-emerald-500/10 text-emerald-300
                        hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20
                        hover:bg-emerald-500/20 hover:border-emerald-500/50
                        cursor-default transform hover:-translate-y-1
                        transition-all duration-300
                        flex items-center gap-2
                        animate-fade-in
                      "
                      style={{
                        animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                      }}
                    >
                      <IconComponent className="text-lg text-emerald-400" />
                      <ScrambleText 
                        text={skill.name}
                        className="font-medium text-sm text-emerald-300"
                        delay={categoryIndex * 200 + skillIndex * 100}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Floating background elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-emerald-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
