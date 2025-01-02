
import "../Styles/EventHighlights.css";
import mantaRayImage from "../assets/images/manta-ray.png"; // Update with the correct path

const EventHighlights = () => {
  return (
    <div className="highlights-container">
      <div className="highlights-content">
        <h2 className="text-white">Event Highlights</h2>
        <ul>
          <li>
            <strong>Duration:</strong> 28 hours of non-stop innovation.
          </li>
          <li>
            <strong>Tracks:</strong> Artificial Intelligence, Blockchain,
            Sustainability, FinTech, Healthcare, Open Innovation.
          </li>
          <li>
            <strong>Networking Opportunities:</strong> Collaborate with
            industry experts, mentors, and peers.
          </li>
          <li>
            <strong>Workshops:</strong> Participate in hands-on workshops with
            cutting-edge technologies.
          </li>
          <li>
            <strong>Recognition:</strong> Certificates for all participants.
          </li>
          <li>
            <strong>Exciting Perks:</strong> Goodies, swag, free meals, and
            more.
          </li>
        </ul>
        <img src={mantaRayImage} alt="Manta Ray" className="highlights-image" />
      </div>
    </div>
  );
};

export default EventHighlights;
