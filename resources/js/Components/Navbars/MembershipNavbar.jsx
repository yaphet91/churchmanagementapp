import React from 'react'
import logo from '../../assets/images/logos/anastasia_logo.png'
const MembershipNavbar = () => {
  return (
    <nav>
          <div>
              <div>
                  <a href='/' className='text-2xl font-semibold flex items-center'>
                      <img src={logo} alt='anastasia' className='w-10 inline-block items-center' /><span>ANASTASIA</span>
                  </a>
              </div>
      </div>
    </nav>
  )
}

export default MembershipNavbar
