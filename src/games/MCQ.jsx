import React, { useState } from 'react'

const MCQ = ({data, buttonState}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    console.log("Hello");
  return (
    <>
    <div className="p-4">
       {data.question}
       {
        Object.entries(data.options).map(([key, value]) => {
          let bgClass = '';
          if (selectedOption === key) {
            if (buttonState === 1) {
              bgClass = selectedOption === data.solution ? 'bg-green-200' : 'bg-red-200';
            } else {
              bgClass = 'bg-blue-200';
            }
          }
          return (
            <div
              key={key}     
              className={`px-5 py-4 rounded-md border-2 border-black cursor-pointer hover:bg-blue-300 active:bg-blue-400 my-2 ${bgClass}`}
              onClick={() => setSelectedOption(key)}
            >
              <strong>{key}.</strong> {value}
            </div>
          );
        })}
    </div>
    </>
  )
}

export default MCQ
