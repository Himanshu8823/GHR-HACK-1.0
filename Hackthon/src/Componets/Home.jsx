import Banner from "../assets/images/Banner.png";
import ocean from "../assets/images/Ocean.png";
import Date from "../assets/images/Date.png";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="background" >
        <div className=" flex items-center justify-center"> 
          <img src={Banner} alt="Banner" className="Banner mt-32 h-54 w-full items-center justify-center" />
        </div>
        <div className="flex items-center justify-center"> 
        <img src={Date} alt="Date" className="Date w-96 h-16 items-center justify-center" /> 
        </div>
        {/* <div className="flex items-center justify-center mt-24"> 
        <img src={ocean} alt="Banner" className="w-96 items-center justify-center" /> 
        </div> */}
      
    </div>
  )
}

export default Home
