import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";
const MobileNav = ({ links }) => {
  const [open, setOpen] = useState(false);

  const containerStyle = {
    transform: open ? "translateX(0px)" : "translateX(-380px)",
    transition: "transform 0.3s ease-in-out", // Added transition property
  };

  return (
    <div className="">
      <div className="menu-icon" onClick={() => setOpen(true)}>
        <CiMenuFries />
      </div>
      <div className="mobile-nav-container" style={containerStyle}>
        <p onClick={() => setOpen(false)}>
          <RxCross2 />
        </p>
        <ul className="mobile-nav-items">
          {links.map((link) => (
            <li key={link.name} className="links">
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;

MobileNav.propTypes = {
  links: PropTypes.array,
};
