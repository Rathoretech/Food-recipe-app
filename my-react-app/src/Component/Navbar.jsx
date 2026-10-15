import React from 'react'
import { NavLink } from 'react-router-dom'




const Navbar = () => {
  return (
    
      <div className='w-full h-15  fixed  top-0 left-0 z-50 shadow-2xl bg-white flex'>
        <h1 className='flex text-xl px-12 py-2 font-bold'>Recipe <span className='text-orange-500'>Hub</span></h1>
        
<div className='flex gap-6'>

<NavLink to="/" className="py-4 p-4 ml-50 text-md hover:text-orange-400">Home</NavLink>
<NavLink to="/categories" className="py-4 pl-12 text-md  "><span className='hover:text-orange-500'>Categories</span></NavLink>
<NavLink to="/favorites" className="py-4 pl-12 text-md "> <span  className='hover:text-orange-500'>Favorites</span></NavLink>
<NavLink to="/about" className="py-4 pl-12 "><span  className='hover:text-orange-500'>About</span></NavLink>




</div>
   



  




      </div>
    
  )
}

export default Navbar
