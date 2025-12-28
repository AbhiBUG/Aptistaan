import React, { useState } from 'react';
import DTS from '../NumericalSet/DTS'
import RatioAndProportion from '../NumericalSet/RatioAndProportion';
import Probability from '../NumericalSet/Probability';
import SimpleInterest from '../NumericalSet/SimpleInterest';
import StatisticsGraphical from '../NumericalSet/StatisticsGraphical';
import StatisticsNumerical from'../NumericalSet/StatisticsNumerical';
import  Panel from '../components/Panel';

const Numerical = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topicComponents = {
    "Distance, Time, Speed": <DTS />,
    "Ratio and Proportion": <RatioAndProportion />,
    "Probability": <Probability />,
    "Simple Interest": <SimpleInterest />,
    "Statistics-Graphical": <StatisticsGraphical />,
    "Statistics-Numerical": <StatisticsNumerical />
  };

  const arr = Object.keys(topicComponents);

  return (
    <div className="min-h-screen bg-blue-100 ">
      {!selectedTopic ? (
        <div className="flex flex-wrap gap-4 p-4">
          {arr.map((topic, key) => (
            <div
              className="shadow-xl h-[100px] w-[150px] p-2 bg-white flex justify-center items-center text-center cursor-pointer rounded-lg"
              key={key}
              onClick={() => setSelectedTopic(topic)}
            >
              <p>{topic}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
         
          {
          // topicComponents[selectedTopic]
        <Panel Topic={selectedTopic}></Panel>
          }
        </div>
      )}
    </div>
  );
};

export default Numerical;
