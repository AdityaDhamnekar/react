import React from 'react'

const navbar = () => {
    return (
      <>
       <div className="container flex justify-between bg-slate-950 text-white text-4xl w-full">
        <div className="loga">
          <img className='size-10' src={img} alt=''/>
        </div>
        <div className="menu_sections">
          <ul className='flex text-4xl space-x-4'>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='contect'>Contact</Link>
            <Link to='services'>Services</Link>
            <Link to='loginSignup'>Loginsignup</Link>
           
          </ul>
        </div>
       </div>
      
      
      
      </>
    )
  }
  
  export default navbar