import React, { useState } from "react";
import Split from "react-split";

import DTS from "../NumericalSet/DTS";
import RatioAndProportion from "../NumericalSet/RatioAndProportion";
import Probability from "../NumericalSet/Probability";
import SimpleInterest from "../NumericalSet/SimpleInterest";
import StatisticsGraphical from "../NumericalSet/StatisticsGraphical";
import StatisticsNumerical from "../NumericalSet/StatisticsNumerical";

import { FaPlay } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Panel = ({ Topic }) => {

  /* ✅ Store component references (NOT JSX) */
  const topicComponents = {
    "Distance, Time, Speed": DTS,
    "Ratio and Proportion": RatioAndProportion,
    "Probability": Probability,
    "Simple Interest": SimpleInterest,
    "Statistics-Graphical": StatisticsGraphical,
    "Statistics-Numerical": StatisticsNumerical
  };

  const [currentno, setCurrentno] = useState(0);

  const handleplay = () => {
    console.log("play");
  };

  /* ✅ Select component dynamically */
  const SelectedTopicComponent = topicComponents[Topic];

  return (
    <div className="h-screen w-full bg-white">

      {/* 🔹 Navigation Panel */}
      <div className="flex flex-row items-center justify-between px-5 bg-blue-400 w-full">
        <div className="flex flex-row items-center">
          <IoIosArrowDown />
          <h2 className="sticky top-0 bg-base-100 p-3 font-semibold text-black">
            Exercises
          </h2>
        </div>

        <div className="flex flex-row items-center space-x-3">
          <button
            className="text-white bg-black rounded-xl px-3"
            onClick={() => setCurrentno((prev) => Math.max(prev - 1, 0))}
          >
            Prev
          </button>

          <FaPlay onClick={handleplay} className="cursor-pointer" />

          <RiRefreshLine />

          <button
            className="text-white bg-black rounded-xl px-3"
            onClick={() => setCurrentno((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>

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
          {/* 🔹 Left Panel */}
          <div className="p-4 flex flex-col h-full gap-4 overflow-hidden bg-white">
            {SelectedTopicComponent && (
              <SelectedTopicComponent
                panel={0}
                qno={currentno}
              />
            )}
          </div>

          {/* 🔹 Right Panel */}
          <div className="h-full overflow-hidden bg-gray-200">
            
            {SelectedTopicComponent && (
              <SelectedTopicComponent
                panel={1}
                qno={currentno}
              />)}
            {/* Future use */}

            
          </div>
        </Split>
      </div>

    </div>
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


