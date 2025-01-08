// import React from "react";
import "../Styles/Box.css"; // Add styles here or use Tailwind CSS
import TridentGold from "../assets/Prizes/Trident-Gold.png"; // Import images here

const prizes = [
    {
        position: "2nd Prize",
        amount: "₹15,000",
        medal: "Silver",
        icon: TridentGold, // Replace with actual paths
        borderColor: "border-grayamber-500",
    },
    {
        position: "1st Prize",
        amount: "₹30,000",
        medal: "Gold",
        icon: TridentGold,
        borderColor: "border-Amber-700",
    },
    {
        position: "3rd Prize",
        amount: "₹10,000",
        medal: "Bronze",
        icon: TridentGold,
        borderColor: "border-Amber-500",
    },
];

const PrizeCards = () => {
    return (
        <section className="bg-[#014EB6] text-white py-16">
            <h1 className="text-5xl font-[Ghr4]" >Prize</h1>
            <div className="container mx-auto flex justify-center gap-6">
                
                {prizes.map((prize, index) => (
                    <div
                        key={index}
                        className={`prize-card w-60  bg-slate-900 rounded-xl p-6 text-center shadow-lg border-2 ${prize.borderColor} ${
                            prize.position === "1st Prize" ? "ring-4 ring-pink" : ""
                        } hover:scale-105 hover:shadow-2xl transition-transform duration-300`}
                    >
                        <div className="flex justify-center mb-4">
                            <img src={prize.icon} alt={prize.medal} className="w-22" />
                        </div>
                        <h3 className="text-xl font-bold">{prize.position}</h3>
                        <p className="text-3xl font-extrabold mt-2">{prize.amount}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PrizeCards;
