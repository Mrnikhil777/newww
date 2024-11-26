import { Bot, Sparkles, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative min-h-[calc(100vh-6rem)] pt-24 pb-16 px-4 bg-gradient-to-b from-indigo-50/50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center bg-indigo-50 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="h-4 w-4 text-indigo-600 mr-2 animate-pulse" />
          <span className="text-sm text-indigo-600 font-medium">Expert AI Development Assistant</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Your Expert AI Developer
          </span>
          <br />
          <TypeAnimation
            sequence={[
              'Companion',
              2000,
              'Assistant',
              2000,
              'Partner',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          />
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Transform your development workflow with AI-powered assistance. Get expert help with coding, debugging, and optimization.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <button 
            onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="flex items-center justify-center">
              <Bot className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Explore Capabilities
            </span>
          </button>
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="group border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="flex items-center justify-center">
              <Code className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Features
            </span>
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="relative max-w-5xl mx-auto group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80" 
            alt="Code editor preview" 
            className="rounded-xl shadow-2xl mx-auto transform group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-xl border border-indigo-200/20 group-hover:border-indigo-300/40 transition-colors" />
        </motion.div>

        <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </motion.div>
    </section>
  );
}