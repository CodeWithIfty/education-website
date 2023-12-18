import "./hero-section.css";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container hero-container">
        {/* Text Container */}
        <div className="text-container">
          <h4>Discover the beauty of the tropics</h4>
          <h1>
            Tropical Destinations <span>For Student</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
            integer rutrum nisi. A nec nisl vitae{" "}
          </p>
          <button className="button"> SIGN UP</button>
        </div>
        {/* Image Container */}
        <div className="image-container">
          <img src="/images/Group 171.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
