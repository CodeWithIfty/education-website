import style from "./testimonials.module.css";
const TestimonialsSection = () => {
  return (
    <section className="container" style={{ padding: "150px 0" }}>
      <h1 style={{ textAlign: "center" }}>Testimonials</h1>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.avatar}>
            <img src="./images/Rectangle 16.png" alt="" />
            <p>Corey Korsgaard</p>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.avatar}>
            <img src="./images/Rectangle 17.png" alt="" />
            <p>Corey Korsgaard</p>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.avatar}>
            <img src="./images/Rectangle 18.png" alt="" />
            <p>Corey Korsgaard</p>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
