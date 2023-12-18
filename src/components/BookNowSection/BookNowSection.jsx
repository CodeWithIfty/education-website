import BookNowForm from "./BookNowForm";
import style from "./book-now.module.css";
const BookNowSection = () => {
  return (
    <section className={`container ${style.bookNowContainer}`}>
      {/* Image Container */}
      <div className={style.image_container}>
        <img src="/images/Group 167.png" alt="" />
      </div>

      {/* Form Container */}

        <BookNowForm />
    </section>
  );
};

export default BookNowSection;
