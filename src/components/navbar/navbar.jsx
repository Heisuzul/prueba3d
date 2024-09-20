import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
            <li>Biodiversidad</li>
            <li>Consecuencias</li>
        </ul>   
        <div className='nav-connect'>Quiz</div>

    </div> 
  )
}

export default navbar