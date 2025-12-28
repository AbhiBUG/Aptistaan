import React from "react";
import Split from "react-split";
import DTS from '../NumericalSet/DTS'
import RatioAndProportion from '../NumericalSet/RatioAndProportion';
import Probability from '../NumericalSet/Probability';
import SimpleInterest from '../NumericalSet/SimpleInterest';
import StatisticsGraphical from '../NumericalSet/StatisticsGraphical';
import StatisticsNumerical from'../NumericalSet/StatisticsNumerical';

const Panel = ({ Topic }) => {

     const topicComponents = {
    "Distance, Time, Speed": <DTS/>,
    "Ratio and Proportion": <RatioAndProportion />,
    "Probability": <Probability />,
    "Simple Interest": <SimpleInterest />,
    "Statistics-Graphical": <StatisticsGraphical />,
    "Statistics-Numerical": <StatisticsNumerical />
  };

  return (
    <>
    <div className="h-screen w-full bg-white">
      {/* ✅ Desktop Split View */}
      <div className="hidden md:block h-full">
        <Split
          className="flex h-full"
          sizes={[55, 45]}
          minSize={320}
          gutterSize={10}
          gutterAlign="center"
          dragInterval={1}
          cursor="col-resize"
          gutter={() => {
            const gutter = document.createElement("div");
            gutter.className =
              "bg-gray-300 hover:bg-primary transition-colors rounded-md w-[6px] mx-auto cursor-col-resize";
            return gutter;
          }}
        >
          {/* Left Panel */}
          <div className="p-4 flex flex-col h-full gap-4 overflow-hidden bg-white">
            {/* {renderLeft} */}
            {topicComponents[Topic]}
            
          </div>

          {/* Right Panel */}
          <div className="h-full overflow-hidden bg-white">
            <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
              <div className="overflow-y-auto p-3 bg-white">
                {/* {renderRight} */}
              </div>
            </div>
          </div>
        </Split>
      </div>

      
    </div>
    </>
  );
};

export default Panel;



{/* Mobile stacked layout */}
      {/* <div className="md:hidden flex flex-col h-full p-3 gap-3">
        <details open className="flex-1 bg-base-100 rounded-2xl shadow-lg overflow-hidden">
          <summary className="p-3 font-semibold text-lg cursor-pointer bg-base-200 border-b rounded-t-2xl">
            Left Panel
          </summary>
          <div className="overflow-y-auto max-h-[50vh] p-3">
             {renderLeft} 
          </div>
        </details> */}

        {/* <details open className="flex-1 bg-base-100 rounded-2xl shadow-lg overflow-hidden">
          <summary className="p-3 font-semibold cursor-pointer bg-base-200 border-b rounded-t-2xl">
            Right Panel
          </summary>
          <div className="overflow-y-auto max-h-[50vh]">
            {renderRight}
          </div>
        </details> */}
      {/* </div> */}


