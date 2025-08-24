
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
            <br className="mb-4" />
            <ScrambleText 
              text="That moment made me realize: if AI is the future, it's only wise to understand how it works — and even better, learn how to build it."
              className="text-gray-300 text-lg leading-relaxed"
              delay={400}
            />
            <br className="mb-4" />
            <ScrambleText 
              text="I'm particularly passionate about exploring the real-world applications of AI in areas that genuinely matter - Smart Education, Computer Vision and Astronomy"
              className="text-gray-300 text-lg leading-relaxed"
              delay={400}
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
