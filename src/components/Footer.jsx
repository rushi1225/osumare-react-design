import React from 'react';

const Footer = () => {
    const socialLinks = [
      { icon: 'facebook', link: '/public/1facebook', text: 'Facebook' },
      { icon: 'instagram', link: 'https://www.instagram.com/', text: 'Instagram' },
      { icon: 'twitter', link: 'https://twitter.com/', text: 'X' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/', text: 'LinkedIn' },
      { icon: 'youtube', link: 'https://www.youtube.com/', text: 'YouTube' },
    ];
  return (
    <footer className="bg-white max-w-[1320px] mx-auto sm:p-5 p-4 justify-center items-center ">
      <div className=" mx-auto sm:py-10">
        <div className="grid  sm:grid-cols-[40%_auto]">

          <div>
            <div className='flex items-center justify-center sm:justify-start'>
              <img src="/logo.png" alt="Do List Logo" className="w-20 sm:mb-0 flex " />
            </div>
            <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
            <div className=" mt-4 flex items-center justify-center sm:justify-start">
              <input type="email" placeholder="Your email here" className="border border-gray-300 px-4 py-2 rounded-l-md" />
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-md">Join</button>
            </div>
            <p className="mt-2 text-xs">By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
          </div>


          <div className='grid grid-cols-1 sm:grid-cols-3 py-5 justify-evenly sm:ml-10 ml-2'>

            <div>
              <h3 className="text-lg font-semibold mb-2 sm:mt-5">Useful Links</h3>
              <ul className="list-none">
                <li><a href="#" className="hover:text-red-500">Home Page</a></li>
                <li><a href="#" className="hover:text-red-500">About Us</a></li>
                <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-red-500">Bug Reports</a></li>
                <li><a href="#" className="hover:text-red-500">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 sm:mt-5 mt-4">Resources</h3>
              <ul className="list-none">
                <li><a href="#" className="hover:text-red-500">Help Center</a></li>
                <li><a href="#" className="hover:text-red-500">User Guide</a></li>
                <li><a href="#" className="hover:text-red-500">Community Forum</a></li>
                <li><a href="#" className="hover:text-red-500">Feedback</a></li>
                <li><a href="#" className="hover:text-red-500">Support</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-start mt-4">
              <h3 className="text-lg font-semibold  sm:mb-2 ">Connect With Us</h3>
              <ul className="list-none">
                <li>
                  <a href="" className='flex gap-4 mb-2 h-6 w-6' >
                    <img src="/1facebook.png" alt="facebook" /> Facebook
                  </a>

                  <a href="" className='flex gap-4 mb-2 h-6 w-6' >
                    <img src="/2instagram.png" alt="instagram" /> Instagram
                  </a>
                  <a href="" className='flex gap-4 mb-2 h-6 w-6' >
                    <img src="/3x.png" alt="x" /> X
                  </a>
                  <a href="" className='flex gap-4 mb-2 h-6 w-6' >
                    <img src="/4linkedIn.png" alt="linkedIn" /> LinkedIn
                  </a>
                  <a href="" className='flex gap-4 h-6 w-6' >
                    <img src="/5youtube.png" alt="youtube" /> Youtube
                  </a>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="sm:mt-8 border-t border-gray-200 pt-4 text-center grid sm:grid-cols-2 grid-cols-1">

        <div className='sm:order-1 order-2 sm:justify-start flex justify-center'>
          <p>&copy; 2024 Osumare. All rights reserved.</p>
        </div>

        <div className=" space-x-4 sm:order-2 order-1 p-1 sm:justify-end flex">
          <a href="#" className="text-gray-500 hover:text-red-500">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-red-500">Terms of Service</a>
          <a href="#" className="text-gray-500 hover:text-red-500">Cookie Settings</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;