import { FaGoogle, FaArrowLeft } from "react-icons/fa6";
// import "../styles/gallery.css";
import "../styles/auth.css";
import bgVideo from "../assets/bgpursuit.mp4";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered (demo)");
  };

  const handleGoogle = () => {
    alert("Register with Google (demo)");
  };

  return (
    <section className="gallery-section auth-section">
      <video
        className="gallery-bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <button className="auth-back" type="button" onClick={() => navigate("/")}>
        <FaArrowLeft /> Back
      </button>
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-card-header">
            <div className="auth-title-stack">
              <h2 className="auth-heading">Join Pursuit 2026</h2>
              <p className="auth-subtext">
                Be part of the innovation. Create your account to get started.
              </p>
            </div>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-label" htmlFor="reg-name">
              Full Name
            </label>
            <input
              id="reg-name"
              name="name"
              type="text"
              className="auth-input"
              placeholder="Your name"
              required
            />

            <label className="auth-label" htmlFor="reg-email">
              Email
            </label>
            <input
              id="reg-email"
              name="email"
              type="email"
              className="auth-input"
              placeholder="your.email@example.com"
              required
            />

            <label className="auth-label" htmlFor="reg-password">
              Password
            </label>
            <input
              id="reg-password"
              name="password"
              type="password"
              className="auth-input"
              placeholder="Create a strong password"
              required
            />

            <button type="submit" className="auth-button primary">
              Register
            </button>
            <button
              type="button"
              className="auth-button ghost"
              onClick={handleGoogle}
            >
              <FaGoogle /> Register with Google
            </button>
          </form>

          <p className="auth-footer-text">
            Already registered?{" "}
            <span className="auth-link">
              {" "}
              <NavLink to="/login">Login to continue.</NavLink>{" "}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
