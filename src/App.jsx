import React from 'react'
import './App.css'
import Header from "./Header/Header"
import Sidebar from './Sidebar/Sidebar'
import { useState } from 'react'
import Home from './Home/Home'


const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home/>
    
    </div>
  )
}

export default App
