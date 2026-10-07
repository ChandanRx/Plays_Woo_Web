import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import Hero from "@/components/marketing/Hero";
import IntroSection from "@/components/marketing/IntroSection";
import SportsSection from "@/components/marketing/SportsSection";
import MapSection from "@/components/marketing/MapSection";
import CreateGameSection from "@/components/marketing/CreateGameSection";
import CommunitySection from "@/components/marketing/CommunitySection";
import ChatSection from "@/components/marketing/ChatSection";
import ProfileSection from "@/components/marketing/ProfileSection";
import HowItWorks from "@/components/marketing/HowItWorks";
import FinalCta from "@/components/marketing/FinalCta";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <SportsSection />
        <MapSection />
        <CreateGameSection />
        <CommunitySection />
        <ChatSection />
        <ProfileSection />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
