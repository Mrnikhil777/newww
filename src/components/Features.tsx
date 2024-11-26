import { Brain, Zap, GitBranch, Code2, RefreshCw, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms that understand context and provide smart suggestions."
  },
  {
    icon: Zap,
    title: "Real-Time Assistance",
    description: "Instant code completion and error detection as you type, improving development speed."
  },
  {
    icon: GitBranch,
    title: "Multi-Language Support",
    description: "Seamless support for all major programming languages and frameworks."
  },
  {
    icon: Code2,
    title: "Smart Refactoring",
    description: "Automated code improvements and pattern recognition for better quality."
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Adapts to your coding style and preferences over time."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security ensuring your code stays confidential."
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            Powerful Features
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how MyCoder can transform your development workflow with cutting-edge AI capabilities.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}