import { ArrowDown, Download } from 'lucide-react';
import ScrambleText from './ScrambleText';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Path to CV in public folder
    link.download = 'Janesh_CV.pdf'; // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(5,150,105,0.02)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <ScrambleText 
            text="Hello, I'm Janesh" 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"
          />
        </div>
        
        <div className="mb-12">
          <ScrambleText 
            text="Exploring the boundaries of intelligence, one model at a time." 
            className="text-lg md:text-xl text-emerald-400 font-medium"
            delay={1000}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleDownloadCV}
            className="px-8 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <Download size={18} />
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
