import React from 'react'
import Navbar from './Components/Navbar'

import Footer from './Components/Footer'

import Login from './Pages/Login'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Campian from './Pages/Campian'
import BasicSetting from './Pages/BasicSetting'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/campion' element={<Campian />} />
      <Route path='/Basic/Setting' element={<BasicSetting />} />
    </Routes>

    <Footer />

   
    </>
  )
}


export default App