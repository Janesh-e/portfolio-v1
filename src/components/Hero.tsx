
import { ArrowDown } from 'lucide-react';
import ScrambleText from './ScrambleText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23059669\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83z\"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <ScrambleText 
            text="Hello, I'm Alex Thompson" 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"
          />
        </div>
        
        <div className="mb-8">
          <ScrambleText 
            text="Final Year Computer Science Student" 
            className="text-xl md:text-2xl text-gray-300 font-light"
            delay={500}
          />
        </div>
        
        <div className="mb-12">
          <ScrambleText 
            text="Specializing in AI/ML & Data Science" 
            className="text-lg md:text-xl text-emerald-400 font-medium"
            delay={1000}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25">
            View My Work
          </button>
          <button className="px-8 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black font-semibold rounded-lg transition-all duration-300">
            Download CV
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-emerald-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
