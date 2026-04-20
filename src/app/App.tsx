import { Hero } from './components/Hero';
import { About } from './components/About';
import { ForWho } from './components/ForWho';
import { WhatsInside } from './components/WhatsInside';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <ForWho />
      <WhatsInside />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
