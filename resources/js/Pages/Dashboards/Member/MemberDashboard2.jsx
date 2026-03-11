import MemberLayout from '@/Layouts/MemberLayout'
import { ArrowSmRightIcon } from '@heroicons/react/solid'
import { Book, BookOpen, CalendarPlus, Cross } from 'lucide-react'
import React, { useEffect } from 'react'

const MemberDashboard2 = ({ auth }) => {
  // useEffect(() => {
  //   console.log(auth.user)
  // }, [])

  return (
    <MemberLayout
    >
      <div className='flex items-center justify-between mb-8'>
      <h1 className='text-3xl  font-bold text-gray-600'>Member Dashboard</h1>
        <button className='p-2 px-4 hover:bg-gray-400 rounded-lg text-lg font-semibold hover:text-black bg-gray-700'>Request Service </button>
      </div>
      {/* first Card */}
      <div className='h-[130px] w-full border border-[#D3D3D3] dark:border-[#484848] flex
       flex-col items-center justify-center
       bg-bodydark1 rounded-sm  py-5  mt-3
             overflow-x-hidden
             dark:bg-boxdark lg:static lg:translate-x-0 text-gray-400'>
        <h1 className='text-2xl font-bold text-gray-600'>Daily Bible Verse</h1>
        <p className='px-6 py-2 text-lg'>And the Word was made flesh, and dwelt among us,
          (and we beheld his glory, the glory as of the only begotten of the Father,)
          full of grace and truth. <span className='ml-2 text-blue-700'>John 1:14</span></p>
      </div>
      {/* second card with daily readings and eshir payments */}
      <div className='flex flex-row space-x-3'>
        <div className='bg-bodydark1 rounded-sm flex flex-col w-[50%] py-5 px-5 items-start justify-center mt-3
             overflow-x-hidden border border-[#D3D3D3] dark:border-[#484848]
             dark:bg-boxdark lg:static lg:translate-x-0 text-gray-400'>
          <div className='flex items-center justify-center gap-5 font-bold text-gray-600'>
            <h1 className='text-3xl flex font-bold text-gray-500'>Daily Readings  </h1>
            {/* <BookOpen /> */}
          </div>
          <div className='flex flex-col mt-4 gap-2 items-left justify-start font-semibold text-xl text-gray-400'>
            <h1 className='flex items-start'><Cross size={20} /> <span className='ml-2'>Rome 3: 5 - 15</span></h1>
            <h1 className='flex items-start'><Cross size={20} /> <span className='ml-2'>1 Peter 2: 1 - 10</span></h1>
            <h1 className='flex items-start'><Cross size={20} /> <span className='ml-2'>Acts 6: 25 - 36</span></h1>
            <h1 className='flex items-start'><Cross size={20} /> <span className='ml-2'>Psalms 10: 5 - 7</span></h1>
            <h1 className='flex items-start'><Cross size={20} /> <span className='ml-2'>John 1: 1 - 20</span></h1>
          
          </div>
          <div className='mt-4 flex items-center justify-center gap-5 font-bold text-gray-600'>
            <h1 className='text-3xl flex font-bold text-gray-500'>Commeration  </h1>
            {/* <CalendarPlus /> */}
          </div>
          <p>The saints that are commemerated in this day are _______ their blessing and interession be with us</p>

        </div>
        <div className='bg-bodydark1 rounded-sm flex flex-col w-full py-5 items-center justify-center mt-3
             overflow-x-hidden border border-[#D3D3D3] dark:border-[#484848]
             dark:bg-boxdark lg:static lg:translate-x-0 text-gray-400'>
        </div>
      </div>
      {/* third card grid recent notifications messages up coming events */}
      <div className='flex flex-row space-x-3'>
        <div className='bg-bodydark1 rounded-sm flex flex-row w-full items-center justify-between mt-3
             overflow-x-hidden border border-[#D3D3D3] dark:border-[#484848]
             dark:bg-boxdark text-gray-400 py-3 pt-5'>
          {/* Notifications */}
          <div className='font-bold text-gray-600 border-r border-gray-700 h-[400px] w-full md:w-1/3 p-2 flex items-start justify-start'>
            <h1 className='text-2xl pl-3'>Recent Nofications</h1>
          </div>
          {/* Messages */}
          <div className='font-bold text-gray-600 border-r border-gray-700 h-full w-full md:w-1/3 p-2 flex items-start justify-start'>
            <h1 className='text-2xl pl-3'>Recent Messages</h1>

          </div>
          {/* Upcoming Events */}
          <div className='font-bold text-gray-600 h-full w-full md:w-1/3 p-2 flex items-start justify-start'>
            <h1 className='text-2xl pl-3'>Up Coming Events</h1>

          </div>

        </div>
       
      </div>
    </MemberLayout>
  )
}

export default MemberDashboard2

