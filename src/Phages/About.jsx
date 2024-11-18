import React from 'react'
import { Route, Routes, Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
      <h3>About us</h3>
      <p>This is a demo website about React-router-dom library.</p>
      <ul>
        <li><Link to="contacts">Our contact</Link></li>
        <li><Link to="team">Our team</Link></li>
      </ul>

      {/* <Routes>
        <Route path="contacts" element={<p>Our contact</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Routes> */}
      <Outlet />
    </div>
  )
}

export default About