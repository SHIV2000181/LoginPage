import React from 'react'

function CreateAccountForm({onSubmit}) {
    const datas = [
        { label: 'Full Name', required: true },
        { label: 'Phone number', required: true },
        { label: 'Email address', required: true },
        { label: 'Password', required: true },
        { label: 'Company name', required: false },
    ]
  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-gray-50'>
        <div className='bg-white h-screen sm:h-[95%] p-6 rounded-md w-full max-w-md sm:shadow-md'>
            <h1 className='text-xl font-bold text-gray-800 mb-1'>Create your</h1>
            <h1 className='text-xl font-bold text-gray-800 mb-1'>PopX account</h1>
            {datas.map((data,index) => {
                return (
                    <div className='w-full mb-4 relative' key={index} >
                        <label className='absolute -top-2 left-3 bg-white font-semibold px-1 text-purple-400'>
                            {data.label}{data.required && <span className='text-red-500'>*</span>}
                        </label>
                        <input
                        type="text"
                        defaultValue="Marry Doe"
                        className="w-full px-3 py-3 text-sm border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                        />

                    </div>
                )
            })}

            <div className='mt-4'>
                <label className='text-sm font-semibold text-gray-700'>
                Are you an Agency?<span className='text-red-500'>*</span>
                </label>
                <div className='flex items-center gap-6 mt-2'>
                    <label className='flex items-center gap-2 text-sm font-medium text-gray-800'>
                        <input 
                        type="radio"
                        name='acency'
                        value="yes"
                        className='accent-purple-500'
                        defaultChecked
                        />
                        Yes
                    </label>
                    <label className='flex items-center gap-2 text-sm font-medium text-gray-800'>
                        <input 
                        type="radio"
                        name='acency'
                        value="No"
                        className='accent-purple-500'
                        />
                        No
                    </label>
                </div>
                <button className='w-full bg-purple-600 text-white py-3 font-semibold rounded-md hover:bg-purple-700 transition duration-200 sm:mt-2 mt-40' onClick={onSubmit}>
                Create Account
                </button>
            </div>
        </div>
    </div>
  )
}

export default CreateAccountForm