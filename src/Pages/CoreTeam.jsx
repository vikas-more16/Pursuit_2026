import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import "../styles/gallery.css";
import "../styles/coreteam.css";
import bgVideo from "../assets/bgpursuit.mp4";
import HeadPlaceholder from "../assets/pursuitlogo.png";

const coreHeads = [
  {
    name: "Vikas Gawade",
    role: "Student Co-Ordinator",
    phone: "+91 9000000001",
  },
  {
    name: "Om Deshmukh",
    role: "Student Co-Coordinator",
    phone: "+91 9000000001",
  },
  {
    name: "Nihal Kankal",
    role: "Student Co-Coordinator",
    phone: "+91 9000000001",
  },
  {
    name: "Vedant Darokar",
    role: "Student Co-Coordinator",
    phone: "+91 9000000002",
  },
  {
    name: "Sanskruti Kakade",
    role: "Student Co-Coordinator",
    phone: "+91 9000000003",
  },
  {
    name: "Shripad Ingle",
    role: "Management Team Head",
    phone: "+91 9000000004",
  },
  {
    name: "Dhanashri Borde",
    role: "Management Team Head",
    phone: "+91 9000000005",
  },
  {
    name: "Abhishek Kaniherkar",
    role: "Publicity Team Head",
    phone: "+91 9000000006",
  },
  {
    name: "Om Konde",
    role: "Publicity Team Head",
    phone: "+91 9000000007",
  },
  {
    name: "Chakradhar Mahale",
    role: "Treasurer",
    phone: "+91 9000000008",
  },
  {
    name: "Shreya Kathole",
    role: "Technical Team Head",
    phone: "+91 9000000009",
  },
  {
    name: "Krushnagopal Agnihotri",
    role: "Social Media Head",
    phone: "+91 9000000010",
  },
];

const instagramLink =
  "https://www.instagram.com/pursuit_ssgmce?igsh=MTQxbHMzb2g3YWI4Yg==";
const linkedinLink = "https://www.linkedin.com/company/pursuit-ssgmce/";

const CoreTeam = () => {
  return (
    <section className="gallery-section coreteam-section">
      <video
        className="gallery-bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="gallery-title-card">
        <span className="gallery-title-text">Core Team</span>
      </div>

      <div className="coreteam-wrapper">
        <div className="coreteam-grid">
          {coreHeads.map((head) => (
            <article key={head.name} className="core-card">
              <div className="core-card-top">
                <div className="core-avatar">
                  <img src={HeadPlaceholder} alt={head.name} />
                </div>
                <h3 className="core-name">{head.name}</h3>
                <p className="core-role">{head.role}</p>
                {head.phone && (
                  <a href={`tel:${head.phone}`} className="core-phone">
                    {head.phone}
                  </a>
                )}
              </div>

              <div className="core-card-bottom">
                <span className="core-connect-label">Connect</span>
                <div className="core-socials">
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
