import React from 'react'
import Aptitude from "./Hero/Aptitude.jsx"
import English from "./Hero/English.jsx"
import Context from "./Hero/Context.jsx"
const Hero = () => {
  return (
    <>
    <div className="flex flex-col justify-center ">
    <Context />
    
      <Aptitude/>
     

      
      <English/>

    </div>
    </>
  )
}

export default Hero
