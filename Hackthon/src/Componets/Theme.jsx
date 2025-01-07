// import "../Styles/HackathonThemes.css"; 
import {useNavigate} from "react-router-dom";   

const themes = [
    {
        icon: "cloud-computing",
        title: "Cloud Computing",
        image: "/path-to-image/cloud-icon.png", // Replace with your image paths
    },
    {
        icon: "education",
        title: "Education",
        image: "/path-to-image/education-icon.png",
    },
    {
        icon: "ai",
        title: "Artificial Intelligence",
        image: "/path-to-image/ai-icon.png",
    },
    {
        icon: "iot",
        title: "IoT",
        image: "/path-to-image/iot-icon.png",
    },
    {
        icon: "healthcare",
        title: "Healthcare",
        image: "/path-to-image/healthcare-icon.png",
    },
    {
        icon: "machine-learning",
        title: "Machine Learning",
        image: "/path-to-image/ml-icon.png",
    },
  
];

const HackathonThemes = () => {
    
    return (
        <section className=" bg-[#014EB6] text-white py-16">
            <div  className="container mx-12 px-12">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Hackathon Themes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {themes.map((theme, index) => (
                        <div
                            key={index}
                            className="theme-card bg-gradient-to-b from-teal-600 to-teal-800 rounded-lg p-6 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={theme.image}
                                alt={theme.title}
                                className="w-20 h-20 mb-4"
                            />
                            <h3 className="text-lg font-semibold">{theme.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HackathonThemes;
