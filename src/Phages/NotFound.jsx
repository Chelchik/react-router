import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notFound'>
        <span>
             <h3>such a country does not exist do you want to go</h3><Link to="/" className='go-home'>Home</Link>
        </span>
    </div>
  )
}

export default NotFound