import React from 'react'

const DashCard = ({ children, className }) => {
  return (
      <div className={`bg-bodydark1 rounded-lg
             overflow-x-hidden border border-[#D3D3D3] dark:border-[#484848]
             dark:bg-boxdark lg:static lg:translate-x-0 text-gray-400 ${className}`}>
            {children}
    </div>
  )
}

export default DashCard
