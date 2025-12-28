import React from 'react'
import Aptistaan from "../../assets/Aptistaan.png";
import Aptistaan1 from "../../assets/Aptistaan1.png";
import RotatingText from "../RotatingText.jsx";


const Introduction = () => {
  return (
    <>
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat mt-5"
      
    >
    
    <div className="min-h-screen flex flex-col items-center justify-center">
      


      <img
        src={Aptistaan}
        className="h-[300px] cursor-pointer mb-4"
        alt="Main Logo"
      />

<div className="flex flex-row items-center justify-center space-x-5">
      {/* Animated Welcome Text */}
      <p className=" font-bold text-[20px] animate-fadeIn text-yellow-600">
        Welcome to
      </p>
      <span className="text-[35px] text-black font-gilroy inline-flex overflow-hidden">
              <RotatingText
                texts={["Aptistaan", "Aptistaan",]}
                splitBy="characters"
                transition={{ duration: 0.5, ease: "easeOut" }}
                rotationInterval={2500}
                staggerDuration={0.03}
                splitLevelClassName=""
                elementLevelClassName="text-primary"
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "100%", opacity: 0 }}
                exit={{ y: "-100%", opacity: 0 }}
                 />
            </span>
</div>
     
      
    </div>
    </div>
    </>
  )
}

export default Introduction
