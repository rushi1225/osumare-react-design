import React from 'react';

const AboutSection = () => {
    return (
        <>
            <body className='bg-gray-100'>


                <section className="bg-gray-100 py-16 px-4 grid sm:grid-cols-[60%_auto] grid-cols-1 max-w-[1320px] mx-auto">

                    <div>
                        <section className="bg-red-500 text-white py-24 px-8 rounded-3xl items-center justify-center  mt-3">
                            <div className="container mx-auto text-center">
                                <h1 className="text-5xl font-bold mb-6">
                                    Organize. <br />
                                    Achieve. <br />
                                    Relax.
                                </h1>
                                <p className="text-lg mb-10">
                                    Turn clutter into clarity, chaos into control, and dreams into done. Bold visions into market success.
                                </p>
                                <div className="flex space-x-4 items-center justify-center">
                                    <button className="border bg-white  text-black px-4 py-2 rounded-full duration-500">Get Started Today</button>

                                    <button className="border border-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white">
                                        Discover Features
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div>
                        <section className=" px-4  sm:mt-0">
                            <div className="container mx-auto text-center h-[80%] mt-3 sm:mt-0">
                                {/* <h2 className="text-3xl font-bold mb-4">Your Tasks. Our Tools.</h2> */}
                                <img src="/Card.png" alt="Logo" className=" mx-auto mb-1 h-[500px] w-[100%]" />
                            </div>
                        </section>
                    </div>

                </section>


                <section className=" sm:py-14 sm:px-4 px-2 py-6">
                    <div className="max-w-[1220px] mx-auto text-center">
                        {/* <h2 className="text-3xl font-bold mb-4">Trusted by Top Brands</h2> */}
                        <div className="flex w-[100%] justify-around  object-cover">
                            <img src="/google.png" alt="Google Logo" className="sm:w-20 w-10" />
                            <img src="/facebook.png" alt="Facebook Logo" className="sm:w-20 w-10" />
                            <img src="/youtube.png" alt="YouTube Logo" className="sm:w-20 w-10" />
                            <img src="/pintrest.png" alt="Pinterest Logo" className="sm:w-20 w-10" />
                            <img src="/twitch.png" alt="Twitch Logo" className="sm:w-20 w-10" />
                        </div>
                    </div>
                </section>
            </body>
        </>



    );
};

export default AboutSection;