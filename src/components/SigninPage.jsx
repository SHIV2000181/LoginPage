import React from 'react'

function SigninPage({onSubmit}) {
  return (
    <div className='min-h-screen flex flex-col sm:items-center sm:justify-center bg-white px-4'>
        <div className='w-full max-w-sm sm:bg-gray-50 p-4 pb-30'>
            <h2 className='text-2xl font-bold text-gray-900'>Signin to your</h2>
            <h2 className='text-2xl font-bold text-gray-900 mb-2'>PopX account</h2>
            <p className='text-sm text-gray-500 mb-6'>Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit.</p>
            {/* Email */}
            <div className="w-full mb-6 relative">
                <label className="absolute -top-2 left-3 bg-[#f9f9f9] px-1 text-sm font-semibold text-purple-600 z-10">
                    Email Address
                </label>

                <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full px-3 py-3 text-sm border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>
            {/* Password */}
            <div className="w-full mb-6 relative">
                <label className="absolute -top-2 left-3 bg-[#f9f9f9] px-1 text-sm font-semibold text-purple-600 z-10">
                    Password
                </label>

                <input
                    type="Password"
                    placeholder="Enter password"
                    className="w-full px-3 py-3 text-sm border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>
            {/* Login page */}
            <button className='w-full bg-gray-300 text-white font-semibold py-3 rounded-lg cursor-pinter' onClick={onSubmit}>Login</button>
           


        </div>
       

    </div>
  )
}

export default SigninPage