import { useState } from "react";
import style from "./book-now.module.css";
const BookNowForm = () => {
  const [star, setStar] = useState(0);
  const [room, setRoom] = useState(0);
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
          <label htmlFor="arrival">
            <p>Arrival</p>
            <input type="text" name="arrival" placeholder="10 October" />
          </label>

          <label htmlFor="Departure">
            <p>Departure</p>
            <input type="text" name="Departure" placeholder="11 October" />
          </label>
        </div>

        <div className={style.double_col}>
          <div className={style.increaseInput}>
            <p>STAR</p>
            <div className="">
              <button onClick={() => setStar(star - 1)}>-</button>
              {star}
              <button onClick={() => setStar(star + 1)}>+</button>
            </div>
          </div>
          <div className={style.increaseInput}>
            <p>Room</p>
            <div className="">
              <button onClick={() => setRoom(room - 1)}>-</button>
              {room}
              <button onClick={() => setRoom(room + 1)}>+</button>
            </div>
          </div>
        </div>

        <button className={style.submitButton}>Book Now</button>
      </form>
    </div>
  );
};

export default BookNowForm;
