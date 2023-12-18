import style from "./footer.module.css";
const Footer = () => {
  return (
    <footer className="container" style={{ textAlign: "center" }}>
      <h1>
        Student Special: Discounted rates <br /> on tropical getaways!
      </h1>
      <p style={{ marginTop: "10px" }}>
        Let’s embody your beautiful ideas together, simplify the way you
        visualize your next big things.
      </p>

      <div className={style.footerLinksContainer}>
        <ul className={style.footerLinks}>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Sales and Refunds</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
          <div className={style.boldLinks}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Schedules</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
            <li>
              <a href="#">Joins</a>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
