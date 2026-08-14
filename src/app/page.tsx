import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import VideoShowcaseSection from '@/components/VideoShowcaseSection';
import ClientReviewsSection from '@/components/ClientReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070c] text-white selection:bg-accent-violet selection:text-white relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <VideoShowcaseSection />
      <ClientReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
