import Banner from "../assets/images/Banner.png";
import ocean from "../assets/images/Ocean.png";
import Date from "../assets/images/Date.png";

const Home = () => {
  return (
    <div className="mt-32">
        <div className="flex items-center justify-center"> 
          <img src={Banner} alt="Banner" className="w-full items-center justify-center" />
        </div>
        <div className="flex items-center justify-center"> 
        <img src={Date} alt="Date" className="w-64 items-center justify-center" /> 
        </div>
        <div className="flex items-center justify-center mt-24"> 
        <img src={ocean} alt="Banner" className="w-96 items-center justify-center" /> 
        </div>
      
    </div>
  )
}

export default Home
