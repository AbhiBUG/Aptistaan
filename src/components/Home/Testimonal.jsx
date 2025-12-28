import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const arr = ["Abhi", "Siddhi", "Pankaj", "Rahul", "Ravi", "Tanvi", "Nidhi", "Yash"];

const CARDS_PER_VIEW = 3;
const INTERVAL = 3000; // 3 seconds

const Testimonal = () => {
  const [index, setIndex] = useState(0);

  // Automatically go to the next set every INTERVAL ms
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Math.ceil(arr.length / CARDS_PER_VIEW));
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const start = index * CARDS_PER_VIEW;
  const visibleCards = arr.slice(start, start + CARDS_PER_VIEW);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <p className="text-[40px] text-poppins font-semibold">Testimonial Section!</p>

      <div className="relative w-full max-w-5xl h-80 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-5"
          >
            {visibleCards.map((name, key) => (
              <div
                key={key}
                className="h-60 w-60 bg-yellow-100 shadow-xl flex items-center justify-center rounded-lg text-lg font-medium"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonal;




{/*import React from 'react'

var arr = ["Abhi","Siddhi","Pankaj","Rahul","Ravi"];

const Testimonal = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>Testimonal Section</p>
      <div className="h-80 m-5 flex flex-row items-center justify-center gap-5">
            {arr.map((name,key)=>{
                 return <div className=" h-80 w-80 m-5 bg-yellow-100 shadow-xl flex items-center justify-center">
                  <p>{name}</p>
                 </div> 
            }
            
            )
          }    
            

      </div>
    </div>
  )
}

export default Testimonal
 */}