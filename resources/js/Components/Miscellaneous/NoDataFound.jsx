import { Info } from 'lucide-react'
import React from 'react'

const NoDataFound = () => {
  return (
      <div className='flex flex-row space-x-3 py-10 w-full items-center justify-center text-2xl'>
          <Info strokeWidth={1} />
          <h1 className='uppercase'>No data found</h1>
      </div>
  )
}

export default NoDataFound
