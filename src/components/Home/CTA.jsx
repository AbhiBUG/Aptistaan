import React from 'react'
import { FaRegFaceFrown } from "react-icons/fa6";
import { FaRegFaceFrownOpen } from "react-icons/fa6";
import { FaRegFaceGrimace } from "react-icons/fa6";
import { FaRegFaceGrin } from "react-icons/fa6";
import { FaRegFaceGrinBeam } from "react-icons/fa6";
import character from "../../assets/character.png";

const emojis = [FaRegFaceFrown,FaRegFaceFrownOpen , FaRegFaceGrimace ,FaRegFaceGrin ,FaRegFaceGrinBeam];

const CTA = () => {
  return (
    <>
    <div className="bg-black space-y-10 p-5  flex flex-row justify-center">
      
      <div className="bg-black space-y-10 p-5  flex flex-col justify-center">
    <p className="text-[10px] text-white family-poppins flex items-center justify-center">Preparing for job interviews or entrance tests? We bring together 
      the two most crucial skills — Quantitative Aptitude and English Communication — 
      into one powerful learning platform. Dive into interactive practice, instant feedback,
       and skill-building tools that guide you every step of the way. Learn smarter. Practice
        better. Succeed faster.</p>
    <div className="flex flex-row items-center justify-center">
        
        <button className="text-white bg-black rounded-xl px-4 text-black bg-white border-2 border-blac">GET STARTED</button>
      
      </div>
      </div>
      <img src={character}></img>
    </div>
    {/*Start of Feedback Section */}
    <div className="flex flex-col items-center justify-center space-y-10 p-5 bg-white">
      <p className="text-[25px]">Help Us Improve!</p>
            <div className="flex flex-row w-full gap-4 mt-20">
            {/* Feedback Message */}
            <div className="bg-blue-200 flex flex-col items-center justify-center w-1/2 pt-5">
            <p className="text-black text-[20px]">Share your feedback</p>
            <form className="flex flex-col gap-2 pt-5">  
                <textarea className="border-2 w-[500px] h-[200px]" placeholder="Enter your feedback">
                </textarea>
                
            </form>
                <button className="text-white bg-black rounded-xl mt-4 px-2">Send</button>
            </div>
            {/* */}

            {/*Rating Feedback */}
            <div className="bg-blue-50 w-1/2 flex flex-col items-center justify-center">
              <p>Share your Overall Experience</p>
              <div className="flex flex-row items-center justify-center">
              {emojis.map((Emoji,key)=>(
                <Emoji key={key} className="text-4xl cursor-pointer m-5 hover:scale-110 transition-transform" />
              ))}
              </div>
            </div>
            {/* */}
            </div>
    </div>
    </>
  )
}

export default CTA
