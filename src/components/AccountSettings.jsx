import React from 'react'
import { Camera } from 'lucide-react';

function AccountSettings() {
  return (
    <div className='max-w-sm mx-auto h-full min-h-screen rounded-lg sm:shadow-sm'>
        <div className="p-5 bg-gray-100">
            <h2 className="text-gray-700 font-medium text-lg">Account Settings</h2>
        </div>
        <div className='flex items-center flex-wrap'>
            <div className='p-4 flex gap-4'>
                <div className='relative'>
                    <img 
                    src='https://img.freepik.com/premium-photo/beautiful-cute-indian-girl-with-arms-crossed-corporate-suit-portrait_1163492-2072.jpg'
                    alt='Profile'
                    className='w-16 h-16 rounded-full object-cover'
                    />
                    <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
                   <Camera className="w-4 h-4 text-white" />
                </div>

                {/* Hidden File Input */}
                <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => {
                    // handle image upload
                    console.log(e.target.files[0]);
                    }}
                />
                
            </div>
      
        </div>
        <div>
            <h3 className="font-semibold text-gray-800">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
            </div>
        </div>
        <p className="text-sm mt-2 px-4 text-gray-600">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
        Erat, Sed Diam
        </p>
        
        
        
    </div>
  )
}

export default AccountSettings