
import { ArrowDown } from 'lucide-react';
import ScrambleText from './ScrambleText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(5,150,105,0.02)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>
      
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
