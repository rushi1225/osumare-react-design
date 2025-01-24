import React from 'react'

const TestimonialsSection = () => {
    return (
        <div>
            <section className='grid sm:grid-cols-[60%_auto] grid-cols-1 max-w-[1320px]  items-center justify-center p-2'>
                <div>
                    <h1 className='text-3xl font-bold text-center '>Customer Testimonials</h1>
                    <p className='mt-3 text-center'>This tool has transformed my productivity and Organization !</p>
                    <div className='mt-5 sm:h-[400px] sm:w-[400px] h-[400px] w-[400px] border-red-500 sm:border-8 mx-auto px-5 sm:px-0  '>
                        <div className='sm:p-3 p-2 bg-white sm:ml-2 sm:mt-16 absolute sm:w-[500px] w-[300px] h-[300px] gap-1 '>
                            <h1 className='text-3xl font-medium'>Using this website has made my <br />tasks so much easier ! i can't<br /> imagine my day without it. "</h1>
                            <div className='flex'>

                                <div className='w-5 h-5 bg-red-500 mt-[30px] flex'>
                                </div>
                                <div className='mt-3 ml-4'>
                                    <p>Sheri Cronin</p>
                                    <p>Project Manager, TechCorp</p>
                                </div>
                            </div>
                            <div className='items-center justify-center'>
                                <button className="bg-red-500 mt-3 hover:bg-red-600 border- sm:border-red-500  text-red-600 px-4 py-2 rounded-[50%] h-12 w-10"> </button>
                                <button className="bg-red-500 mt-3 hover:bg-red-600 ml-3 text-white px-4 py-2 rounded-[50%] h-12 w-10"></button>
                            </div>


                        </div>

                        {/* <span className='line border flex w-[100%]  h-2 rounded-md items-center bg-red-500 mb-2 '></span>
                      <span className='line border flex w-[100%] mt-[300px] h-2 rounded-md items-center bg-red-500 mb-2 '></span> */}
                    </div>

                </div>
                <div className='sm:mt-32 items-center justify-center ml-[35px] sm:ml-0'>
                    <img src="testinomial.png" alt="" />
                </div>

            </section>
        </div>
    )
}

export default TestimonialsSection
