import Hero from '@/components/landing/Hero';
import SplashScreen from '@/components/landing/SplashScreen';
import HeritageFilms from '@/components/landing/HeritageFilms';
import ArchitecturalStyles from '@/components/landing/ArchitecturalStyles';
import Process from '@/components/landing/Process';
import Testimonials from '@/components/landing/Testimonials';
import CallToAction from '@/components/landing/CallToAction';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplashScreen />
      <Hero />
      <HeritageFilms />
      <ArchitecturalStyles />
      <Process />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
