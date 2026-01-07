import "../styles/gallery.css";
import "../styles/speakers.css";
import bgVideo from "../assets/bgpursuit.mp4";
import SpeakerImg from "../assets/pursuitlogo.png";

const speakers = [
  { name: "Dr. A. Visionary", title: "AI Strategist, Futurist" },
  { name: "Riya Patel", title: "Lead Developer, Quantum Labs" },
  { name: "Karan Mehta", title: "Cybersecurity Architect" },
  { name: "Sara Thomas", title: "Product Lead, Cloud Systems" },
  { name: "Arjun Nair", title: "Robotics & Automation Expert" },
  { name: "Neha Sharma", title: "Data Scientist, InnovateX" },
];

const Speakers = () => {
  return (
    <section className="gallery-section">
      <video
        className="gallery-bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="gallery-title-card">
        <span className="gallery-title-text">Speakers</span>
      </div>

      <div className="speakers-wrapper">
        <p className="speakers-intro">
          Meet the minds inspiring Pursuit 2026 — innovators, builders, and
          leaders shaping the future.
        </p>
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="speaker-card">
              <div className="speaker-avatar">
                <img src={SpeakerImg} alt={speaker.name} />
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
