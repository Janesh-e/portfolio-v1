
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ScrambleText from './ScrambleText';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const projects = [
    {
      title: "AI-Powered Recommendation System",
      description: "Built a machine learning model using collaborative filtering to recommend products based on user behavior and preferences.",
      technologies: ["Python", "TensorFlow", "Pandas", "Flask"],
      primaryDomain: "Machine Learning",
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    },
    {
      title: "Stock Market Prediction Model",
      description: "Developed a deep learning model using LSTM networks to predict stock prices with 87% accuracy.",
      technologies: ["Python", "Keras", "NumPy", "Matplotlib"],
      primaryDomain: "Machine Learning",
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging, user authentication, and responsive design.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      primaryDomain: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing large datasets with various chart types and filtering options.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      primaryDomain: "Data Science",
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    }
  ];

  // Get unique domains for filter
  const domains = Array.from(new Set(projects.map(project => project.primaryDomain)));

  // Filter projects based on selected domain
  const filteredProjects = selectedDomain === 'all' 
    ? projects 
    : projects.filter(project => project.primaryDomain === selectedDomain);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 320; // Width of one project card (w-80 = 320px)
    const gap = 24; // gap-6 = 24px
    const scrollAmount = cardWidth + gap;
    
    const newScrollLeft = direction === 'left' 
      ? Math.max(0, container.scrollLeft - scrollAmount)
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    // Update button states after scroll animation completes
    setTimeout(() => {
      updateScrollButtons();
    }, 400);
  };

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(scrollLeft > 5); // Small tolerance for floating point precision
    setCanScrollRight(scrollLeft < maxScrollLeft - 5);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      updateScrollButtons();
      container.addEventListener('scroll', updateScrollButtons);
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrambleText 
            text="My Projects" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          
          {/* Domain Filter */}
          <div className="flex justify-center">
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger className="w-64 bg-black/50 border-gray-800 text-white">
                <SelectValue placeholder="Filter by domain" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all" className="text-white hover:bg-gray-700">All Domains</SelectItem>
                {domains.map((domain) => (
                  <SelectItem key={domain} value={domain} className="text-white hover:bg-gray-700">
                    {domain}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-emerald-500/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              canScrollLeft 
                ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 hover:border-emerald-400' 
                : 'bg-gray-800/50 text-gray-600 border-gray-600/50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-emerald-500/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              canScrollRight 
                ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 hover:border-emerald-400' 
                : 'bg-gray-800/50 text-gray-600 border-gray-600/50 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Projects Container */}
          <div className="overflow-hidden mx-16">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                width: '100%',
                maxWidth: 'calc(4 * 320px + 3 * 24px)' // Exactly 4 cards + 3 gaps
              }}
            >
              {filteredProjects.map((project, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-black/50 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-6xl text-emerald-400/50">📊</div>
                  </div>
                  
                  <div className="p-6">
                    <ScrambleText 
                      text={project.title}
                      className="text-xl font-bold text-white mb-1"
                      delay={index * 200}
                    />
                    
                    {/* Primary Domain Badge */}
                    <div className="mb-4">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                        {project.primaryDomain}
                      </span>
                    </div>
                    
                    <ScrambleText 
                      text={project.description}
                      className="text-gray-300 mb-4 leading-relaxed text-sm"
                      delay={index * 200 + 100}
                    />

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a href={project.github} className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                      <a href={project.demo} className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
