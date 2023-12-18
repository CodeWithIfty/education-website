import DiscountSection from "./DiscountSection/DiscountSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import OurDestinationSection from "./components/OurDestinationSection/OurDestinationSection";
import StudentReviewSection from "./components/StudentReviewSection/StudentReviewSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StudentReviewSection />
      <OurDestinationSection />
      <DiscountSection />
    </div>
  );
}

export default App;
