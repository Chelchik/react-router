import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
        <nav>
            <ul className="menu">
                <li className='menu-bar'><NavLink to="/" className='menu-link'>Home</NavLink></li>
                <li className='menu-bar'><NavLink to="about" className='menu-link'>About</NavLink></li>
                <li className='menu-bar'><NavLink to="blog" className='menu-link'>Blog</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;