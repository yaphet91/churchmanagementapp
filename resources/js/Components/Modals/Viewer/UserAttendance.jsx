import EventsTable from '@/Components/Tables/EventsTable/EventsTable';
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const UserAttendance = () => {
  return (
    <div className='overflow-hidden scroll-auto p-5'>
      <div className='flex items-start justify-between mb-5'>

        <div className='flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md'>
            <h1 className='text-green-500 text-4xl font-bold'>27</h1>
            <h2 className='text-gray-700 dark:text-gray-300 text-xl'>Attendance</h2>
        </div>
        <div className='flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md'>
            <h1 className='text-yellow-500 text-4xl font-bold'>4</h1>
            <h2 className='text-gray-700 dark:text-gray-300 text-xl'>Late</h2>
        </div>
        <div className='flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md'>
            <h1 className='text-red-500 text-4xl font-bold'>5</h1>
            <h2 className='text-gray-700 dark:text-gray-300 text-xl'>Absent</h2>
        </div>
        <div className='flex flex-col items-center justify-center border border-gray-400 px-8 py-5 w-[200px] h-[120px] rounded-md'>
          <CircularProgressbar value={50} text={`${50}%`}
            styles={buildStyles({
              // rotation: 0.25,
              // strokeLinecap: 'butt',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              // pathTransition: 'none',
              pathColor: `rgba(62, 152, 199, ${100 / 100})`,
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })} />
        </div>
        
      </div>

      <EventsTable />
    </div>
  )
}

export default UserAttendance
