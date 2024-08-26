import React from 'react'
import Navbar from './Components/Navbar'
import SliderContainer from './Components/Slider'
import SmallCard from './Components/SmallCard'
import Category from './Components/Category'
import EventBanner from './Components/EventBanner'
import AgainCategory from './Components/AgainCategory'
import ContactBanner from './Components/ContactBanner'
import Footer from './Components/Footer'
import Slider2 from './Components/Slider2'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/campian' element={<Campian />} />
      <Route path='/Basic/Setting' element={<BasicSetting />} />
      <Route path='/User' element={<User />} />
    </Routes>

    <Footer />

   
    </>
  )
}


export default App