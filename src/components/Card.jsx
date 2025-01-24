import React from 'react';

const Card = ({ icon, title, description, number }) => {
    return (
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">

                <img src={icon} alt={title} className="w-10 h-10" />
                <div className=" rounded-full  flex items-end justify-end text-gray-300 text-3xl ml-auto opacity-100 p-2 font-extrabold">
                    {number}
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 h-10 justify-start text-start">{title}</h3>
            <div className='flex'>
            <span className='line border flex w-20  h-2 rounded-md items-center bg-red-500 mb-2 '></span>
            <span className='line border flex w-8 ml-2  h-2 rounded-md items-center bg-red-500 mb-2 '></span>
            </div>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;

