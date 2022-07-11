import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterScreen from './components/Shared/FooterScreen'
import HeaderScreen from './components/Shared/HeaderScreen'

const PagesWithNavbar = () => {
    return (
        <>
            <HeaderScreen />
            <div className="main">
                <Outlet />

            </div>
            <FooterScreen />
        </>
    )
}
export default PagesWithNavbar