import React, { useState, useEffect } from "react";
 import Demo from "../../../pages/Demo.jsx"
import {useNavigate} from "react-router-dom"
import student from "../../../assets/student.png"
import learn from "../../../assets/learn.png"
import test from "../../../assets/test.png"
import apply from "../../../assets/apply.png"

const Context = () => {
    const navigate = useNavigate();

    const images = {
    Learn: learn,
    Test: test,
    Apply: apply,
  };

    const [cardOrder, setCardOrder] = useState(["Learn", "Test", "Apply"]);

     // Rotate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCardOrder((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first]; // rotate left
      });
    }, 3000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex flex-col m-5 items-center justify-center">
        <div className="flex flex-row justify-center">
        {/*Why Us Text*/}
        <div>
            <b><p className="text-[80px] bg-yellow-100">Why Us?</p></b>
        </div>
        {/* */}
         {/*Why Us Card*/}
      <div className="w-50 bg-white  rounded-xl shadow-xl p-5 m-5">
        <p className="text-[15px]">
            We are group of proessionals who are from multidisciplianry fields. 
            We recall the moments of our entrance exams for our very first job. 
            It was actually tough getting our very first job!!
        </p>
      </div>
      {/* */}
      </div>

        {/*Our Core Values*/}
        <div className="flex flex-col items-center justify-center mt-20">
        <p className="text-[50px] font-poppins font-bold">Our Core values</p>
        

          {/*Dict mapping*/}
          <div className="relative w-[400px] h-[200px] mx-auto mt-20">
            {cardOrder.map((key, index) => {
              const angle = [-45, 0, 45][index]; // Positioning each card along the curve
              return (
                <div
                  key={key}
                  className="absolute w-[100px] h-[150px] rounded shadow-lg overflow-hidden transition-all duration-700"
                  style={{
                    left: "50%",
                    bottom: 0,
                    transform: `translateX(-50%) rotate(${angle}deg) translateY(-100px) rotate(-${angle}deg)`,
                    zIndex: index === 1 ? 10 : 5,
                  }}
                >
                  <img src={images[key]} alt={key} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>
          {/* */}
              <img src={student}></img>
        </div>
        {/* */}

        {/*Play a demo */}
        <div>
            <button className="bg-black rounded-xl text-white px-4" onClick={()=>navigate("/Demo")} >
                Play a demo
            </button>
        </div>
    </div>
  )
}

export default Context
