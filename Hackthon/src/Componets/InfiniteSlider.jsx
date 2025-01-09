import React from "react";
import "../Styles/InfiniteSlider.css"; // Ensure this CSS is linked

const images = [
  // Replace these paths with your images
  "../src/assets/images/image1.jpg",
  "../src/assets/images/image4.jpg",
  "../src/assets/images/image3.jpg",
  "../src/assets/images/image2.jpg",
];

const InfiniteSlider = () => {
  return (
    <div className="slider-container">
        <h1 className="font-[Ghr4] text-3xl">Glimps of previous events</h1>
      <div className="slider">
        {/* Duplicate the image set to enable seamless looping */}
        {[...images, ...images].map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
