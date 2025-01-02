import React from 'react';

function Sponsors() {
    return (
        <div className="text-center py-10">
            <h1 className="text-white text-3xl font-bold mb-8">SPONSORS & PARTNERS</h1>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ms-10 mt-10 me-5">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-red-500 rounded-full mx-auto"></div>
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-orange-500 rounded-full mx-auto"></div>
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-yellow-500 rounded-full mx-auto"></div>
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-lime-500 rounded-full mx-auto"></div>
            </div>
        </div>
    );
}

export default Sponsors;