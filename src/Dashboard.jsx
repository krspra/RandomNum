import React, { useEffect, useContext } from "react";
import RangeDropdown from "./components/RangeDropdown";
import IntervalDropdown from "./components/IntervalDropdown";
import {
  manageMinVal,
  manageMaxVal,
  manageIntervalVal,
} from "./RandomNumgenerator";
import Linegraph from "./Linegraph";
import Bargraph from "./Bargraph";
import { RandomContext } from "./context";

function Dashboard() {
  const { randomNumber } = useContext(RandomContext);

  const handleNewMinValue = (val) => {
    manageMinVal(val);
  };

  const handleNewMaxValue = (val) => {
    manageMaxVal(val);
  };

  const handleNewInterval = (val) => {
    manageIntervalVal(val);
  };

  useEffect(() => {
    handleNewMaxValue(100);
    handleNewMinValue(1);
    handleNewInterval(1);
  }, []);

  return (
    <main className="flex gap-5 flex-col pt-4 h-400px items-center justify-center">
      <div className="flex justify-around w-full flex-wrap gap-y-3">
        <RangeDropdown
          onNewDropvalue={handleNewMinValue}
          name="Minimum "
          initialVal={1}
        />
        <IntervalDropdown onNewDropvalue={handleNewInterval} />
        <RangeDropdown
          onNewDropvalue={handleNewMaxValue}
          name="Maximum "
          initialVal={100}
        />
      </div>
      <div className="w-full flex justify-around items-center max-md:flex-col gap-y-5">
        <Linegraph />
        <div className="flex flex-col">
          <div
            className={`h-24 w-24 rounded-md flex items-center justify-center text-5xl text-white ${
              randomNumber % 2 == 0 ? "bg-green-400" : "bg-pink-500"
            }`}
          >
            {randomNumber}
          </div>
          <div className="flex justify-around">
            <span className="text-pink-500 font-bold">Odd</span>
            <span className="text-green-400 font-bold">Even</span>
          </div>
        </div>
      </div>
      <Bargraph/>
    </main>
  );
}

export default Dashboard;
