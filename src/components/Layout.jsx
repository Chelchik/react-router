import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className='root'>
        <Header />

        <Outlet />

        <footer>
            <h4>website 2024 by Georgi</h4>
        </footer>
    </div>
  )
}

export default Layout