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
    <main className="min-h-screen bg-[#050507] text-[#e5e1e5] relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container font-sans antialiased">
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
