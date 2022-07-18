import React from 'react'
import HomeContainer from './HomeContainer'
import Footer from './Footer'


const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer/>
      <Footer/>
      
    </div>
  )
}

export default MainContainer