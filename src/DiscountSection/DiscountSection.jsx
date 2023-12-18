import style from "./discount-section.module.css";
const DiscountSection = () => {
  return (
    <section className={`container ${style.discountContainer}`}>
      {/* Text Container */}
      <div className={style.text_container}>
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
      <div className={style.image_container}>
        <img src="/images/Mask group.png" alt="" />
      </div>
    </section>
  );
};

export default DiscountSection;
