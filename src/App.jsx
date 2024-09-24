import React from 'react'
import Navbar from './Components/Navbar'

import Footer from './Components/Footer'
import "../src/assets/Main.scss"

import Login from './Pages/Login'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Campian from './Pages/Campian'
import BasicSetting from './Pages/BasicSetting'
import User from './Pages/User'
import Desktop17 from './Pages/Desktop17'
import Signup from './Pages/Signup'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/campion' element={<Campian />} />
      <Route path='/Basic/Setting' element={<BasicSetting />} />
      <Route path='/User' element={<User />} />
      <Route path='/desktop_17' element={<Desktop17 />} />
    </Routes>

    <Footer />

   
    </>
  )
}


export default App