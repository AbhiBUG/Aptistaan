import React from 'react'
import operator from "../../../assets/operator.png"
const Aptitude = () => {
  return (
   
      <div className="flex flex-row justify-center items-center bg-blue-100">
      
        
  

        {/* Overlapping content section */}
        <section className="text-white p-4">
          
          <img
          src={operator}
          >
          </img>
        </section>
        {/* */}

        <div className="shadow-xl bg-white p-10">
          <h1>Master the most essential aptitude skills required to 
            crack job entrance exams and competitive assessments. 
            From logical reasoning and data interpretation to numerical
             ability and problem-solving — our platform is designed 
             to boost your speed, accuracy, and confidence. With step-by-step explanations, mock tests, 
            and smart tracking, you'll learn how to solve problems faster and smarter.</h1>
        </div>

     
      </div>
    
  )
}

export default Aptitude
