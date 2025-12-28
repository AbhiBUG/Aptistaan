import React from 'react'
import d from "../data/numerical/DTS.json"

import Panel from '../components/Panel';

const DTS = ({panel,qno}) => {
  console.log(qno);
  var data = d[qno]; // 'd' is already the parsed JSON object
  console.log(data);
  return (
    <>
         <div className="flex">

      {panel === 0 && <div className="flex-1 px-5 py-4 rounded-md border-2 border-black">
        {/* Left half content */}
        {data.qno}. {data.question}?
      </div>

      }

      {panel === 1 &&
      <div className="flex-1">
        {/* Right half content */}
        <h1>Hello World</h1>
      </div>
  }



    </div>
    </>
  );
}

export default DTS;
