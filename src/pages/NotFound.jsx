import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='max-w-[1220px] mx-auto '>
            <div className='w-[80%] mx-auto items-center justify-center flex'>
                <img src="./notfound.png" alt="" className='h-[500px]' />
                
            </div>
            <Link to="/" className='items-center justify-center flex'>
                <button className="border border-red-500 px-4 py-2 rounded-full bg-red-500 text-white">
                    Back To Home
                </button></Link>
        </div>
    )
}

export default NotFound
