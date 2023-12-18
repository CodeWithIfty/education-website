import "./student-review.css";
const StudentReviewSection = () => {
  return (
    <section className="container section-wrapper">
      {/* reviews */}
      <div className="reviews-container">
        {/* card1 */}
        <div className="card-container">
          <img src="/images/Rectangle 25.png" alt="" />
          <div className="card-texts">
            <h4>Jenny Wilson</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
          </div>
        </div>
        {/* card2 */}
        <div className="card-container">
          <img src="/images/Rectangle 26.png" alt="" />
          <div className="card-texts">
            <h4>Jenny Wilson</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
          </div>
        </div>
        {/* card3 */}
        <div className="card-container">
          <img src="/images/Rectangle 27.png" alt="" />
          <div className="card-texts">
            <h2>Jenny Wilson</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
          </div>
        </div>
      </div>
      {/* Texts */}
      <div className="review-text-container">
        <h3>
          Tropical Adventure <br /> <span>for Students.</span>
        </h3>
        <p>Student Tropical Vacation: Relax and Recharge</p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Massa quis natoque sit quam</li>
          <li>tortor id euismod habitant</li>
          <li>Sed suspendisse id in ultrices</li>
        </ul>
        <button className="button">Explore More</button>
      </div>
    </section>
  );
};

export default StudentReviewSection;
