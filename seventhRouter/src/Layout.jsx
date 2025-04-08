import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from "./components/Footer/Footer.jsx"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>  // Header and Footer will same but Outlet    differs
        <Footer/>
    </>
  )
}

export default Layout