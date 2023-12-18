import DiscountSection from "./DiscountSection/DiscountSection";
import BookNowSection from "./components/BookNowSection/BookNowSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import OurDestinationSection from "./components/OurDestinationSection/OurDestinationSection";
import StudentReviewSection from "./components/StudentReviewSection/StudentReviewSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StudentReviewSection />
      <OurDestinationSection />
      <DiscountSection />
      <BookNowSection />
      <TestimonialsSection />
    </div>
  );
}

export default App;
