import React from "react";
import "../Styles/Box.css";
import "remixicon/fonts/remixicon.css";
const Box = () => {
  return (
    <div>
         <h1 className="text-center font-[anzo5] uppercase leading-[1] text-[25vw] text-purple-700">Prizes</h1>
      <div className="gradient-box">
         <h1><i className="ri-trophy-line text-[18vw] leading-[0.8] text-orange-300 "></i></h1>
         <h2 className="text-center font-[anzo2] text-orange-300">Winner <br /> 50k</h2>
      </div>
      <div className="flex justify-self-center space-x-4">
      <div className="gradient-box">
         <h1><i className="ri-trophy-line text-[18vw] leading-[0.8] text-slate-400 "></i></h1>
         <h2 className="text-center font-[anzo2] text-slate-400"> 1st Runner Up <br /> 25k</h2>
      </div>
      <div className="gradient-box hover:shadow-2xl">
         <h1><i className="ri-trophy-line text-[18vw] leading-[0.8] text-orange-900 "></i></h1>
         <h2 className="text-center font-[anzo2] text-orange-900"> 2st Runner Up <br />15k</h2>
      </div>
      </div>
    </div>
  );
};

export default Box;
