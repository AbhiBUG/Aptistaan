import React from 'react'
import d from "../data/numerical/DTS.json"

import Panel from '../components/Panel';

const DTS = ({panel}) => {
  var data = d; // 'd' is already the parsed JSON object
  console.log(data);
  return (
    <>
         <div className="flex">
      <div className="flex-1 border-2 border-black">
        {/* Left half content */}
        {data.qno}. {data.question}?
      </div>
      <div className="flex-1">
        {/* Right half content */}
        
      </div>
    </div>
    </>
  );
}

export default DTS;
