import React from 'react'
import abc from "../../../assets/abc.png"

const English = () => {
  return (
    <div className="flex flex-row items-center justify-center bg-blue-200">
     
             
            <div className="shadow-xl bg-white p-10">
               <h1>English isn't just about grammar — 
                it's about making a strong impression.
                 Whether you're facing comprehension questions, sentence correction,
                  or vocabulary challenges, we've got you covered. Learn the art of clear
                   communication, logical flow, and error spotting with our curated English
                    practice modules tailored for competitive exams.</h1>
             </div>
     
             {/* Overlapping content section */}
             <section className=" text-white">
               
               <img
               src={abc}
               className="size-[400px]">
               </img>
             </section>
             {/* */}
     
             
     
           </div>
          
  )
}

export default English
