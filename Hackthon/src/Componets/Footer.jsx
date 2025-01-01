import 'remixicon/fonts/remixicon.css'
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-black bg-opacity-45">
      <div className="footer-container">
        {/* Logo and About Section */}
        <div className="footer-about">
          <h1 className='font-[Danger] text-2xl text-black'><span className='text-orange-500'>GHR </span>
            HACK</h1>
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
        <div className="footer-contact rounded-full">
          <h3 className="text-4xl">Contact Us</h3>
          <p>
            Gate No 57, Shirsoli Rd,<br />
            Tambapura, Mohadi, Jalgaon<br />
            Maharashtra 425002
          </p>
          <div className="footer-socials">
            <a href="mailto:contact@example.com" aria-label="Email">
            <i className="ri-mail-line text-3xl"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
              <i className="ri-twitter-x-line text-3xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="ri-instagram-line text-3xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="ri-linkedin-box-line text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
