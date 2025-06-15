
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import ScrambleText from './ScrambleText';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrambleText 
            text="Get In Touch" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <ScrambleText 
            text="I'm always open to discussing new opportunities, interesting projects, or just having a chat about AI and technology."
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            delay={200}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <ScrambleText 
                    text="alex.thompson@email.com"
                    className="text-gray-300"
                    delay={300}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <ScrambleText 
                    text="+1 (555) 123-4567"
                    className="text-gray-300"
                    delay={400}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <ScrambleText 
                    text="San Francisco, CA, USA"
                    className="text-gray-300"
                    delay={500}
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Github className="text-gray-300 group-hover:text-black" size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Linkedin className="text-gray-300 group-hover:text-black" size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Twitter className="text-gray-300 group-hover:text-black" size={20} />
              </a>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-emerald-500 focus:outline-none text-white transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-emerald-500 focus:outline-none text-white transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-emerald-500 focus:outline-none text-white transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-emerald-500 focus:outline-none text-white transition-colors"
                  placeholder="Let's work together"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-emerald-500 focus:outline-none text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <ScrambleText 
            text="© 2024 Alex Thompson. All rights reserved."
            className="text-gray-400"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
