import React from 'react'
import Navbar from './Components/Navbar'
import SliderContainer from './Components/Slider'
import SmallCard from './Components/SmallCard'
import Category from './Components/Category'
import EventBanner from './Components/EventBanner'
import AgainCategory from './Components/AgainCategory'
import ContactBanner from './Components/ContactBanner'


const App = () => {
  return (
    <>
    <Navbar />
    <SliderContainer />
    <SmallCard />
    <Category />
    <EventBanner />


    <AgainCategory />
    <ContactBanner />
    </>
  )
}


export default App