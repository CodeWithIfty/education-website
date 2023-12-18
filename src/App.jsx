import DiscountSection from "./DiscountSection/DiscountSection";
import BookNowSection from "./components/BookNowSection/BookNowSection";
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
      <BookNowSection />
    </div>
  );
}

export default App;
