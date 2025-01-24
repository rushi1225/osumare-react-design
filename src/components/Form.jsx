import React, { useState } from 'react';

const Form = () => {
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
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-[750px] mx-auto">
            <h2 className="text-xl font-semibold mb-4">Get Started Today!</h2>
            <p className="text-gray-600 mb-6">Fill in your details and take control of your tasks.</p>

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
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
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
                        className="mr-2"
                    />
                    <label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={!termsAccepted}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md disabled:opacity-50"
                >
                    Done
                </button>
            </form>
        </div>































    );
};

export default Form;