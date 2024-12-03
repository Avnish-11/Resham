import HabotSection from "../Component/HabotSection";
import HeroSection from "../Component/HeroSection";
import HowItWorksSection from "../Component/HowItWorksSection";
import SupplierSection from "../Component/SupplierSection";
import YoutubeSection from "../Component/YoutubeSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <HabotSection />
      <YoutubeSection />
      <SupplierSection />
      <HowItWorksSection />
    </div>
  );
}

export default Home;
