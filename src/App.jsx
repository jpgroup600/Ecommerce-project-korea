import React from 'react'
import Navbar from './Components/Navbar'

import Footer from './Components/Footer'

import Login from './Pages/Login'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Campian from './Pages/Campian'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/campion' element={<Campian />} />
    </Routes>

    <Footer />

   
    </>
  )
}


export default App