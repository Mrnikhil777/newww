import { useState } from 'react';
import { Terminal, Play, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', javascript);

const examples = [
  {
    title: "React Component",
    code: `function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 
        text-white rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
}`
  },
  {
    title: "API Endpoint",
    code: `app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find()
      .select('-password')
      .limit(10);
    res.json(users);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch users' 
    });
  }
});`
  },
  {
    title: "Data Structure",
    code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}`
  }
];

export default function LiveDemo() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(examples[selectedExample].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="examples" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Live Demo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience my coding capabilities firsthand with these interactive examples.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/50">
            <div className="border-b border-gray-200">
              <div className="flex space-x-1 p-4">
                {examples.map((example, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedExample(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedExample === index
                        ? 'bg-indigo-100 text-indigo-700 shadow-sm'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {example.title}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#282c34]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-400">Code Example</span>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={copyCode}
                    className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check className="h-4 w-4 text-green-400" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy className="h-4 w-4 text-gray-400" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <span className="text-sm text-gray-400">
                      {copied ? 'Copied!' : 'Copy'}
                    </span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    <span className="text-sm">Run</span>
                  </motion.button>
                </div>
              </div>
              <motion.div
                key={selectedExample}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg bg-[#282c34]"
              >
                <SyntaxHighlighter
                  language="javascript"
                  style={atomOneDark}
                  customStyle={{
                    padding: '1.5rem',
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem'
                  }}
                >
                  {examples[selectedExample].code}
                </SyntaxHighlighter>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}