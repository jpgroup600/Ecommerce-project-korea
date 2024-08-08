import React from 'react'
import Navbar from './Components/Navbar'

import Footer from './Components/Footer'

import Login from './Pages/Login'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Campian from './Pages/Campian'
import BasicSetting from './Pages/BasicSetting'
import User from './Pages/User'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/campion' element={<Campian />} />
      <Route path='/Basic/Setting' element={<BasicSetting />} />
      <Route path='/User' element={<User />} />
    </Routes>

    <Footer />

   
    </>
  )
}


export default App