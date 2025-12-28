import React from 'react'
import d from "../data/numerical/DTS.json"

import Panel from '../components/Panel';
import { datalist } from 'framer-motion/client';
import MCQ from '../games/MCQ';

const DTS = ({panel,qno,buttonState}) => {
  console.log(qno);
  var data = d[qno]; // 'd' is already the parsed JSON object
  console.log(data);
  return (
    <>
         <div className="flex">

      {panel === 0 && <div className="flex-1 px-5 py-4 rounded-md text-[30px] font-bold text-blue-500">
        {/* Left half content */}
        {data.qno}. {data.question}?
      </div>

      }

      {panel === 1 &&
      <div className="flex-1 overflow-hidden-x-hidden">
        {/* Right half content */}

        {/* Question */}
        {data.questionlist.given.question}

        {/* Options */}
         {/* {Object.entries(data.questionlist.given.options).map(
            ([key, value]) => (
              <div
                key={key}
                className="px-5 py-4 rounded-md border-2 border-black cursor-pointer hover:bg-blue-300 active:bg-blue-400 my-2"
              >
                <strong>{key}.</strong> {value}
              </div>
            )
          )} */}
         {data.questionlist.given.map((question, index) => {
          if(question.type === "mcq") {
            return <MCQ data={question} key={index} buttonState={buttonState} />
          }
          return null;
})}
          
{/* {console.log(data.questionlist.given.type)} */}
          
{/* {console.log(data.questionlist.given.type)} */}
      </div>

  }




    </div>
    </>
  );
}

export default DTS;
