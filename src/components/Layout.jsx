import React from 'react'
import { Link as RouterLink, Outlet } from "react-router-dom";
import Nav from './Nav';
const Layout = () => {
  return (
    <>
        {/* <div>Layout</div> */}
        <Nav />
        <Outlet />
    </>
    
  )
}

export default Layout