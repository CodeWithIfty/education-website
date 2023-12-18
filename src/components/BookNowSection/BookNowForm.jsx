import style from "./book-now.module.css";
const BookNowForm = () => {
  return (
    <div className={style.form_container}>
      <h1>Book now</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
      </p>
      <form className={style.form}>
        <label htmlFor="city">
          <p>CITY</p>
          <input type="text" name="city" placeholder="Enter Your City Here" />
        </label>

        <div className={style.double_col}>
          <label htmlFor="city">
            <p>CITY</p>
            <input type="text" name="city" placeholder="Enter Your City Here" />
          </label>
          <label htmlFor="city">
            <p>CITY</p>
            <input type="text" name="city" placeholder="Enter Your City Here" />
          </label>
        </div>
        <div className={style.double_col}>
          <label htmlFor="city">
            <p>CITY</p>
            <input type="text" name="city" placeholder="Enter Your City Here" />
          </label>
          <label htmlFor="city">
            <p>CITY</p>
            <input type="text" name="city" placeholder="Enter Your City Here" />
          </label>
        </div>

        <button className={style.submitButton}>Book Now</button>
      </form>
    </div>
  );
};

export default BookNowForm;
