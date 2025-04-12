import React from 'react'

function WelcomeScreen({onCreateAccount , onSigning}) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-amber-50'>
        <div className='flex flex-col justify-end items-center min-h-screen px-4 pb-10 sm:h-screen sm:w-[30%] sm:border-[2px] sm:border-blue-50'>
        <div className='text-center w-full'>
           <div>
           <h1 className='text-xl font-bold text-gray-900 text-left'>Welcome to PopX</h1>
           <p className='text-sm text-gray-500 mt-2 text-left'>Lorem ipsum dolor sit amet,</p>
           <p className='text-sm text-gray-500 mt-2 text-left'>consectetur adipiscing elit.</p>
           </div>
            <button className='w-full bg-purple-600 font-medium text-white py-3 rounded-lg mt-6' onClick={onCreateAccount}>Create Account</button>
            <button className='w-full bg-purple-100 text-black font-semibold py-3 rounded-lg mt-3' onClick={onSigning}> Already Registered? Login</button>
        </div>
    </div>
    </div>
  )
}

export default WelcomeScreen