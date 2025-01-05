import VideoBG from "../assets/Background.mp4";
import Home from "./Home";
import Navbar from "./Navbar";

const Background = () => {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={VideoBG} type="video/mp4" />
      </video>
      <Navbar />
      <Home />
    </div>
  );
};

export default Background;
