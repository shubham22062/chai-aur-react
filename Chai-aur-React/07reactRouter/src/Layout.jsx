import React from 'react'
import Header from './components/Header/Header'
import Header from './components/Footer/Footer'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </> 
    )
}

export default Layout
