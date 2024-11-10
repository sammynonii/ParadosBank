import React from 'react'
import { Outlet } from 'react-router-dom'
import NavLinks from './Navigation/NavLinks'
import Footer from '../Components/Footer/Footer'

function Layout() {
    return (
        <div className='bg-black'>
            <div className='py-4 px-7 md:py-12 md:px-28 text-white text-sm'>
                <NavLinks />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
