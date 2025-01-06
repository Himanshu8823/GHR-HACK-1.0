import React from "react";
import "../Styles/Box.css"; // Add styles here or use Tailwind CSS

const prizes = [
    {
        position: "2nd Prize",
        amount: "₹15,000",
        medal: "Silver",
        icon: "/path-to-image/silver-medal.png", // Replace with actual paths
        borderColor: "border-gray-500",
    },
    {
        position: "1st Prize",
        amount: "₹20,000",
        medal: "Gold",
        icon: "/path-to-image/gold-trophy.png",
        borderColor: "border-pink-500",
    },
    {
        position: "3rd Prize",
        amount: "₹10,000",
        medal: "Bronze",
        icon: "/path-to-image/bronze-medal.png",
        borderColor: "border-gray-500",
    },
];

const PrizeCards = () => {
    return (
        <section className="bg-[#014EB6] text-white py-16">
            <div className="container mx-auto flex justify-center gap-6">
                {prizes.map((prize, index) => (
                    <div
                        key={index}
                        className={`prize-card bg-gray-900 rounded-xl p-6 text-center shadow-lg border-2 ${prize.borderColor} ${
                            prize.position === "1st Prize" ? "ring-4 ring-pink" : ""
                        } hover:scale-105 hover:shadow-2xl transition-transform duration-300`}
                    >
                        <div className="flex justify-center mb-4">
                            <img src={prize.icon} alt={prize.medal} className="w-16 h-16" />
                        </div>
                        <h3 className="text-xl font-bold">{prize.position}</h3>
                        <p className="text-3xl font-extrabold mt-2">{prize.amount}</p>
                        <span className="mt-4 inline-block bg-purple-900 text-purple-300 text-sm px-3 py-1 rounded-full">
                            {prize.medal}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PrizeCards;
