import React from 'react';

const LifeSection = () => {
    return (
        <section className="bg-white py-16 px-4 items-center justify-center flex max-w-[1220px] mx-auto">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                    <img src="/phone.png" alt="Phone with app" className="rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 md:pl-10">
                    <h2 className="text-3xl font-bold mb-4">Start Organizing Your Life Today</h2>
                    <p className="text-lg mb-6">
                        Join us now and transform your productivity with our intuitive to-do list platform!
                    </p>
                    <div className="flex space-x-4 items-center justify-center sm:items-start sm:justify-start ">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Sign Up</button>
                        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LifeSection;