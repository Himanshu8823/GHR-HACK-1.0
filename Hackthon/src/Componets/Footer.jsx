
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About Section */}
        <div className="footer-about">
          <img
            src="GHR-HACK-1.0\Hackthon\public\GHR-logo.svg" // Replace with your logo path
            alt="GHR-HACKLogo"
            className="footer-logo"
          />
          <p>
            <strong>GHR-HACK</strong>, a groundbreaking hackathon by{" "}
            <strong>GHRIEBM JALGAON</strong> and <strong></strong>, redefines creativity and technology. Join
            us in the pursuit of innovation, transcending traditional hackathons.
          </p>
        </div>

        {/* Useful Links Section */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer">
                Linktree
              </a>
            </li>
            <li>
              <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer">
                Devfolio
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            JIMS, Near Rithala Metro Station<br />
            Rohini Sector 5, Institutional Area,<br />
            New Delhi, Delhi 110085
          </p>
          <div className="footer-socials">
            <a href="mailto:contact@example.com" aria-label="Email">
              📧
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
              ❌
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              📸
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              💼
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
