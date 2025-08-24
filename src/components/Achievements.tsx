
import { Trophy, Medal, Star, Users } from 'lucide-react';
import ScrambleText from './ScrambleText';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon 2024 (Finalist)",
      description: "Selected among top teams for showcasing innovative tech solutions.",
      date: "Dec 2024",
      category: "Competition"
    },
    {
      icon: Medal,
      title: "International Rover Challenge 2025 (Finalist)",
      description: "Reached finals and carried out a successful Autonomous Rover Expedition in a robotics competition.",
      date: "Jan 2025",
      category: "Competition"
    },
    {
      icon: Star,
      title: "Qualified GATE 2025 in DA",
      description: "Secured AIR 5618 in the national-level enterance exam, in the paper Data Science and AI",
      date: "Feb 2025",
      category: "Academics"
    },
  ];

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "3", label: "Research Papers" },
    { number: "5", label: "Hackathon Wins" },
    { number: "50+", label: "Students Mentored" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrambleText 
            text="Achievements & Awards" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>
        {/*
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black/50 rounded-xl p-6 text-center border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
              <ScrambleText 
                text={stat.number}
                className="text-3xl font-bold text-emerald-400 mb-2"
                delay={index * 100}
              />
              <ScrambleText 
                text={stat.label}
                className="text-gray-300"
                delay={index * 100 + 50}
              />
            </div>
          ))}
        </div>
*/}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-black/50 rounded-xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <achievement.icon className="text-emerald-400" size={24} />
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <ScrambleText 
                      text={achievement.title}
                      className="text-lg font-bold text-white"
                      delay={index * 150}
                    />
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/30">
                      {achievement.category}
                    </span>
                  </div>
                  
                  <ScrambleText 
                    text={achievement.description}
                    className="text-gray-300 text-sm leading-relaxed mb-3"
                    delay={index * 150 + 100}
                  />
                  
                  <div className="text-emerald-400 text-sm font-medium">
                    {achievement.date}
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

export default Achievements;
