import React, { useState } from 'react';


const HeroSection = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('Male');
    const [language, setLanguage] = useState('English');
    const [email, setEmail] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
       
        alert('Form submitted:', {
            firstName,
            lastName,
            gender,
            language,
            email,
        });
    };


    return (
        <div className='bg-gray-100'>

            <section className="bg-gray-100 sm:py-16 px-4 mx-auto ">
                <div className="container mx-auto text-center ">
                    <h1 className="text-4xl font-bold mb-4">Simplify Your Life with Our <br /> Todo App</h1>
                    <p className="text-lg mb-8">
                        Stay organized and boost your productivity with our intuitive todo website. <br />
                        Experience a modern approach to task management that fits your lifestyle.
                    </p>
                    <div className="flex space-x-4 items-center justify-center mx-auto">


                        <button type="button" className=" bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full w-[150px] duration-500" data-toggle="modal" data-target="#exampleModalCenter">
                            Get Started
                        </button>
                        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white w-[150px] duration-500">Learn More</button>





                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered " role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Get Started Today</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">



                                        <form onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700" >
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        value={lastName} required
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <label className="block text-sm font-medium text-gray-700">Gender</label>
                                                <div className="mt-2 flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        value="Male"
                                                        checked={gender === 'Male'}
                                                        onChange={() => setGender('Male')}
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor="male" className="mr-4">
                                                        Male
                                                    </label>
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        value="Female"
                                                        checked={gender === 'Female'}
                                                        onChange={() => setGender('Female')}
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor="female">Female</label>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <label className="block text-sm font-medium text-gray-700">Language</label>
                                                <div className="mt-2">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            id="english"
                                                            checked={language === 'English'}
                                                            onChange={() => setLanguage('English')}
                                                            className="mr-2"
                                                        />
                                                        <label htmlFor="english">English</label>
                                                    </div>
                                                    <div className="flex items-center mt-2">
                                                        <input
                                                            type="checkbox"
                                                            id="hindi"
                                                            checked={language === 'Hindi'}
                                                            onChange={() => setLanguage('Hindi')}
                                                            className="mr-2"
                                                        />
                                                        <label htmlFor="hindi">Hindi</label>
                                                    </div>
                                                    <div className="flex items-center mt-2">
                                                        <input
                                                            type="checkbox"
                                                            id="marathi"
                                                            checked={language === 'Marathi'}
                                                            onChange={() => setLanguage('Marathi')}
                                                            className="mr-2"
                                                        />
                                                        <label htmlFor="marathi">Marathi</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                                />
                                            </div>

                                            <div className="mt-4 flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="terms"
                                                    checked={termsAccepted}
                                                    onChange={() => setTermsAccepted(!termsAccepted)}
                                                    className="mr-2" required
                                                />
                                                <label htmlFor="terms" className="text-sm">
                                                    I agree to the terms and conditions
                                                </label>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white w-[150px] duration-500" data-dismiss="modal">Close</button>
                                                <button
                                                    type="submit" className="border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white w-[150px] duration-500 disabled:opacity-50" >Done
                                                </button>
                                            </div>
                                        </form>



                                    </div>

                                </div>
                            </div>
                        </div>














                        {/* <a href="./popupform">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full w-[150px] duration-500">Get Started</button></a> */}
                        {/* <button className="border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white w-[150px] duration-500">Learn More</button> */}
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 mb-8 mr-8">
                    <span className="bg-red-500 rounded-full w-4 h-4"></span>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;