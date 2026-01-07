import "../styles/navbar.css";
import pursuitLogo from "../assets/pursuitlogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="nav-logo">
          <img src={pursuitLogo} alt="Pursuit Logo" />
          <h1 className="nav-title">Pursuit 2026</h1>
        </div>
      </NavLink>

      <ul className="nav-links">
        <li>
          <NavLink to="/accomodation">Accommodation</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/workshops">Workshops</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="nav-actions">
        <button className="neo-btn">
          <NavLink to="/login">Login</NavLink>
        </button>
        <button className="neo-btn">
          <NavLink to="/register">Register</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
