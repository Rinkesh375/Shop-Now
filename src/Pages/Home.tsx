import React from 'react'
import BannerSlider from '../Componants/BannerSlider'
import Navbar from '../Componants/Navbar'

const Home = () => {
  return (
    <div style={{width:"100%"}}>
      <Navbar />
      <div style={{width:"100%"}}>
      <BannerSlider/>
      </div>      
    </div>
  )
}

export default Home