import "../styles/gallery.css";
import VideoLayerCard from "../Components/VideoLayerCard";
import g1 from "../assets/gallery/Img11.jpeg";
import g2 from "../assets/gallery/Img12.jpeg";
import g3 from "../assets/gallery/Img13.jpeg";
import g4 from "../assets/gallery/Img14.jpeg";
import g5 from "../assets/gallery/Img15.jpeg";
import g6 from "../assets/gallery/Img16.jpeg";
import g7 from "../assets/gallery/Img21.jpeg";
import g8 from "../assets/gallery/Img22.jpeg";
import g9 from "../assets/gallery/Img23.jpeg";
import g10 from "../assets/gallery/Img24.jpeg";
import g11 from "../assets/gallery/Img25.jpeg";
import g12 from "../assets/gallery/Img26.jpeg";
import g13 from "../assets/gallery/Img31.jpeg";
import g14 from "../assets/gallery/Img32.jpeg";
import g15 from "../assets/gallery/Img33.jpeg";
import g16 from "../assets/gallery/Img34.jpeg";
import g17 from "../assets/gallery/Img35.jpeg";
import g18 from "../assets/gallery/Img36.jpeg";
import galleryBg from "../assets/bgpursuit.mp4";

const images1 = [g1, g2, g3, g4, g5, g6];
const images2 = [g7, g8, g9, g10, g11, g12];
const images3 = [g13, g14, g15, g16, g17, g18];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <video
        className="gallery-bg-video"
        src={galleryBg}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="gallery-title-card">
        <span className="gallery-title-text">GALLERY</span>
      </div>

      {/* 🔥 CENTER OVERLAY VIDEO CARD */}
      <div className="gallery-video-overlay">
        <VideoLayerCard />
      </div>

      {/* Infinite horizontal gallery */}
      <div className="gallery-wrapper">
        <div className="gallery-track">
          {[...images1, ...images1].map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-wrapper">
        <div className="gallery-track">
          {[...images2, ...images2].map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-wrapper">
        <div className="gallery-track">
          {[...images3, ...images3].map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

