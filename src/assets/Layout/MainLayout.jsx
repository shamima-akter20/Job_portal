import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../pages/Shared/Navbar'
import Footer from '../../pages/Shared/Footer'

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
