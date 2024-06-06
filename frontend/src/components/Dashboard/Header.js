import React from 'react'
import logo from '../../data/Logo.png'
import { UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
function header() {
  return (
    <div className='z-50 bg-secondaryColorB border-b-2 shadow-sm h-20 p-10 flex justify-between items-center w-full fixed'>
        <Link to="/"><img alt='logo' src={logo} className='w-40 rounded'></img></Link>
        <UserButton></UserButton>
    </div>
  )
}

export default header