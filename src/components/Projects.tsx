
import { ExternalLink, Github } from 'lucide-react';
import ScrambleText from './ScrambleText';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Recommendation System",
      description: "Built a machine learning model using collaborative filtering to recommend products based on user behavior and preferences.",
      technologies: ["Python", "TensorFlow", "Pandas", "Flask"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    },
    {
      title: "Stock Market Prediction Model",
      description: "Developed a deep learning model using LSTM networks to predict stock prices with 87% accuracy.",
      technologies: ["Python", "Keras", "NumPy", "Matplotlib"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging, user authentication, and responsive design.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing large datasets with various chart types and filtering options.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrambleText 
            text="My Projects" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-black/50 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-6xl text-emerald-400/50">📊</div>
              </div>
              
              <div className="p-6">
                <ScrambleText 
                  text={project.title}
                  className="text-xl font-bold text-white mb-3"
                  delay={index * 200}
                />
                
                <ScrambleText 
                  text={project.description}
                  className="text-gray-300 mb-4 leading-relaxed"
                  delay={index * 200 + 100}
                />

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full border border-emerald-500/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors">
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
