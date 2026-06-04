import Navbar from "../components/Navbar";
import MoodSelector from "../components/MoodSelector";
import TrendingFits from "../components/TrendingFits";
import HeroSection from "../sections/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#07070A] text-white">
      <Navbar />
      <HeroSection />
      <MoodSelector />
      <TrendingFits />
    </div>
  );
};

export default Home;