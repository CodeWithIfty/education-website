import style from "./discount-section.module.css";
const DiscountSection = () => {
  return (
    <section className={`${style.discountContainer}`}>
      <div className={`container  ${style.discountWrapper}`}>
        {/* Text Container */}
        <div className={style.text_container}>
          <h5>Get 20% off for student</h5>
          <h4>
            Student discounts available. <br />
            <span>Get ready for some fun in the sun!</span>
          </h4>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <button className="button"> Explore More</button>
        </div>
        {/* Image Container */}
        <div className={style.image_container}>
          <img src="/images/Mask group.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
