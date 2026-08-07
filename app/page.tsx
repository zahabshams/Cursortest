import Hero from '@/components/landing/Hero';
import ArchitecturalStyles from '@/components/landing/ArchitecturalStyles';
import Process from '@/components/landing/Process';
import Testimonials from '@/components/landing/Testimonials';
import CallToAction from '@/components/landing/CallToAction';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ArchitecturalStyles />
      <Process />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
