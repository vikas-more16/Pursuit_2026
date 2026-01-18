import "../styles/gallery.css";
import "../styles/events.css";
import bgVideo from "../assets/bgpursuit.webm";
import Poster from "../assets/Events/event1.png";

const Events = () => {
  const events = Array.from({ length: 6 });
  const duplicatedEvents = [...events];

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
        <span className="gallery-title-text">Events</span>
      </div>

      <div className="events-row-wrapper">
        <div className="events-row events-row-left">
          {duplicatedEvents.map((_, index) => (
            <div className="event-card" key={`left-${index}`}>
              <img src={Poster} alt="Event" className="event-poster" />
            </div>
          ))}
        </div>
      </div>

      <div className="events-row-wrapper">
        <div className="events-row events-row-right">
          {duplicatedEvents.map((_, index) => (
            <div className="event-card" key={`right-${index}`}>
              <img src={Poster} alt="Event" className="event-poster" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
