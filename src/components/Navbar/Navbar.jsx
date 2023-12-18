import MobileNav from "./MobileNav";
import RightMenuButton from "./RightMenuButton";
import "./navbar.css";

const links = [
  { path: "#home", name: "Home" },
  { path: "#about", name: "About" },
  { path: "#schedules", name: "Schedules" },
  { path: "#membership", name: "Membership" },
  { path: "#pricing", name: "Pricing" },
];
const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="mobile-nav">
        <MobileNav links={links} />
      </div>
      <ul className="nav-items">
        {links.map((link) => (
          <li key={link.name} className="links">
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      <RightMenuButton />
    </header>
  );
};

export default Navbar;
