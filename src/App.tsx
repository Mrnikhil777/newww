import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Capabilities from './components/Capabilities';
import LiveDemo from './components/LiveDemo';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Capabilities />
      <LiveDemo />
    </Layout>
  );
}