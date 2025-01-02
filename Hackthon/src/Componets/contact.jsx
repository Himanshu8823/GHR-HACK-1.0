
import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-8 p-2 min-h-screen">
            <div className="text-white">
                <h1 className="text-4xl font-bold mb-4">CONTACT US</h1>
                <p className="text-lg mb-4">I AM INTERESTED IN:</p>
                <div className="flex flex-wrap gap-4">
                    <button className="px-4 py-2 border border-white rounded-full">Participating</button>
                    <button className="px-4 py-2 border border-white rounded-full">Collaboration</button>
                    <button className="px-4 py-2 border border-white rounded-full">Sponsorship</button>
                    <button className="px-4 py-2 border border-white rounded-full">Helping</button>
                    <button className="px-4 py-2 border border-white rounded-full">Event</button>
                </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <form className="space-y-4">
                    <div className="flex space-x-4">
                        <input className="w-1/2 p-2 border-b border-gray-300 focus:outline-none text-gray-900" placeholder="Full Name*" type="text" />
                        <input className="w-1/2 p-2 border-b border-gray-300 focus:outline-none text-gray-900" placeholder="Email*" type="email" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <img alt="Indian flag" className="w-5 h-5" height="20" src="https://storage.googleapis.com/a1aa/image/Dwqjud1nVTbkPle1xg4WfZDgIQfZWCDWme5Bi27Q4vZ40DEQB.jpg" width="20" />
                        <input className="w-full p-2 border-b border-gray-300 focus:outline-none text-gray-900" placeholder="+91 Phone Number*" type="text" />
                    </div>
                    <textarea className="w-full p-2 border-b border-gray-300 focus:outline-none text-gray-900" placeholder="Leave us a message"></textarea>
                    <div className="flex items-center space-x-2">
                        <input className="form-checkbox" type="checkbox" />
                        <label className="text-sm text-gray-900">
                            I have read &amp; I agree to the <a className="text-purple-600" href="#">privacy policy.</a>
                        </label>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-full" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;