import { useEffect, useState } from "react";
import DiscountSection from "./DiscountSection/DiscountSection";
import BookNowSection from "./components/BookNowSection/BookNowSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import OurDestinationSection from "./components/OurDestinationSection/OurDestinationSection";
import StudentReviewSection from "./components/StudentReviewSection/StudentReviewSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <HeroSection />
          <StudentReviewSection />
          <OurDestinationSection />
          <DiscountSection />
          <BookNowSection />
          <TestimonialsSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
