import { Brain, Code2, Sparkles, Workflow, MessageSquare, Blocks } from 'lucide-react';
import { useState } from 'react';

const capabilities = [
  {
    icon: Brain,
    title: "Multi-Language Expertise",
    description: "Proficient in multiple programming languages, frameworks, and best practices across the development stack.",
    details: ["JavaScript/TypeScript", "Python", "Java", "C++", "React", "Node.js", "and many more"]
  },
  {
    icon: Code2,
    title: "Code Analysis & Optimization",
    description: "Advanced code review capabilities with intelligent suggestions for improvements and optimizations.",
    details: ["Performance optimization", "Code quality checks", "Best practices enforcement", "Security vulnerability detection"]
  },
  {
    icon: Sparkles,
    title: "Intelligent Problem Solving",
    description: "Quick and accurate solutions to complex programming challenges and debugging issues.",
    details: ["Error diagnosis", "Bug fixing", "Algorithm optimization", "Architecture recommendations"]
  },
  {
    icon: Workflow,
    title: "Project Architecture",
    description: "Expert guidance in designing scalable and maintainable software architectures.",
    details: ["System design", "Database modeling", "API design", "Microservices architecture"]
  },
  {
    icon: MessageSquare,
    title: "Natural Communication",
    description: "Clear and concise communication with context-aware responses and explanations.",
    details: ["Technical explanations", "Code documentation", "Best practices guidance", "Learning resources"]
  },
  {
    icon: Blocks,
    title: "Modern Development",
    description: "Up-to-date knowledge of modern development practices and tools.",
    details: ["CI/CD pipelines", "Docker containers", "Cloud services", "Testing frameworks"]
  }
];

export default function Capabilities() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">AI Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powered by advanced AI technology to assist you throughout your development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className={`group bg-white p-8 rounded-xl transition-all duration-300 cursor-pointer
                  ${activeCard === index 
                    ? 'shadow-lg scale-105 border-2 border-indigo-500' 
                    : 'shadow-sm hover:shadow-md border-2 border-transparent'}`}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeCard === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="space-y-2 mt-4 text-sm text-gray-600">
                    {capability.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}