import "../styles/gallery.css";
import "../styles/sponsors.css";
import bgVideo from "../assets/bgpursuit.webm";
import SponsorImg from "../assets/pursuitlogo.png";

const sponsors = [
  { name: "TechNova", tier: "Title Sponsor" },
  { name: "CodeCraft", tier: "Platinum Sponsor" },
  { name: "CloudCore", tier: "Gold Sponsor" },
  { name: "DataSphere", tier: "Silver Sponsor" },
  { name: "RoboEdge", tier: "Tech Partner" },
  { name: "SecureNet", tier: "Security Partner" },
];

const Sponsers = () => {
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
        <span className="gallery-title-text">Sponsors</span>
      </div>

      <div className="sponsors-wrapper">
        <p className="sponsors-intro">
          Grateful to the partners powering Pursuit 2026 with innovation and
          support.
        </p>
        <div className="sponsors-grid">
          {sponsors.map((sponsor) => (
            <article key={sponsor.name} className="sponsor-card">
              <div className="sponsor-logo">
                <img src={SponsorImg} alt={sponsor.name} />
              </div>
              <div className="sponsor-info">
                <h3 className="sponsor-name">{sponsor.name}</h3>
                <p className="sponsor-tier">{sponsor.tier}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsers;
