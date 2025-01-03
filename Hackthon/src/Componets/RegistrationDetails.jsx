import React, { useEffect } from "react";
import "../Styles/RegistrationDetails.css";

const RegistrationDetails = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    } else {
                        entry.target.classList.remove("animate");
                    }
                });
            },
            { threshold: 0.5 }
        );

        const elements = document.querySelectorAll(".animated-circle");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center text-white py-10">
                <h1 className="text-4xl font-bold mb-10">REGISTRATION DETAILS</h1>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
                    <div className="flex flex-col items-center animated-circle left-circle">
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10">
                            <i className="fas fa-qrcode text-teal-800 text-9xl"></i>
                        </div>
                        <h2 className="text-xl font-bold">How to Register</h2>
                        <p>Scan the QR code or visit</p>
                        <p className="text-orange-500">www.ghrhack.com</p>
                    </div>
                    <div className="text-8xl text-white">
                        <i className="fas fa-chevron-right"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="flex flex-col items-center animated-circle top-circle">
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10">
                            <i className="fas fa-dollar-sign text-teal-800 text-9xl"></i>
                        </div>
                        <h2 className="text-xl font-bold">No Fees</h2>
                        <p>Free registration for all</p>
                        <p>Participants</p>
                    </div>
                    <div className="text-8xl text-white">
                        <i className="fas fa-chevron-right"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="flex flex-col items-center animated-circle right-circle">
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10">
                            <i className="fas fa-user-graduate text-teal-800 text-9xl"></i>
                        </div>
                        <h2 className="text-xl font-bold">Eligibility</h2>
                        <p>Open to students and</p>
                        <p>professionals nationwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationDetails;

