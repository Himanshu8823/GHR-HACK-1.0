
import "./Prizes.css";
import whaleImage from "./assets/images/whale.png"; // Replace with your whale image path
import starfishImage from "./assets/images/starfish.png"; // Replace with your starfish image path
import specialAwardStarfish from "./assets/images/special-award-starfish.png"; // Replace with your special award starfish image path

const Prizes = () => {
  return (
    <div className="prizes-container">
      <h2>PRIZES</h2>
      <div className="prizes-content">
        <div className="prize-item">
          <div className="prize-icons">
            <img src={starfishImage} alt="Starfish" className="starfish" />
            <img src={starfishImage} alt="Starfish" className="starfish" />
            <img src={starfishImage} alt="Starfish" className="starfish" />
            <img src={starfishImage} alt="Starfish" className="starfish" />
            <img src={starfishImage} alt="Starfish" className="starfish" />
          </div>
          <p className="prize-title">Winner</p>
          <p className="prize-amount">₹1,00,000</p>
        </div>
        <div className="prize-item">
          <div className="prize-icons">
            <img src={starfishImage} alt="Starfish" className="starfish" />
            <img src={starfishImage} alt="Starfish" className="starfish" />
            <img src={starfishImage} alt="Starfish" className="starfish" />
            <img src={starfishImage} alt="Starfish" className="starfish" />
          </div>
          <p className="prize-title">Runners-Up</p>
          <p className="prize-amount">₹50,000</p>
        </div>
        <div className="prize-item">
          <div className="prize-icons">
            <img src={specialAwardStarfish} alt="Special Award Starfish" className="starfish special" />
          </div>
          <p className="prize-title">Special Awards</p>
          <p className="prize-description">Domain-Specific Winners & Best Beginner Hack</p>
        </div>
      </div>
      <img src={whaleImage} alt="Whale" className="background-whale" />
    </div>
  );
};

export default Prizes;
