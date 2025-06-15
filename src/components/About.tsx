
import { Code, Brain, Database } from 'lucide-react';
import ScrambleText from './ScrambleText';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrambleText 
            text="About Me" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <ScrambleText 
              text="I'm a Computer Science undergrad in my final year, specializing in Artificial Intelligence, Machine Learning, and Data Science. My journey into the world of AI/ML began not just out of academic pursuit, but out of pure curiosity."
              className="text-gray-300 text-lg leading-relaxed"
              delay={200}
            />
            
            <ScrambleText 
              text=" When I first learned that AI could already handle complex tasks that once demanded careful planning, logic, and engineering by humans like us, I was hooked. From writing code to diagnosing diseases, AI is no longer science fiction — it's happening now, and it's only getting smarter."
              className="text-gray-300 text-lg leading-relaxed"
              delay={400}
            />
            <br />
            <ScrambleText 
              text="That moment made me realize: if AI is the future, it's only wise to understand how it works — and even better, learn how to build it."
              className="text-gray-300 text-lg leading-relaxed"
              delay={400}
            />
            <br />
            <ScrambleText 
              text="I'm particularly passionate about exploring the real-world applications of AI in areas that genuinely matter - Smart Education, Computer Vision and Astronomy"
              className="text-gray-300 text-lg leading-relaxed"
              delay={400}
            />
            
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 p-8 rounded-2xl backdrop-blur-sm border border-emerald-500/30">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Problem Solving</span>
                  <span className="text-emerald-400">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full w-[95%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI/ML Knowledge</span>
                  <span className="text-emerald-400">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full w-[88%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Data Analysis</span>
                  <span className="text-emerald-400">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full w-[92%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Programming</span>
                  <span className="text-emerald-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
