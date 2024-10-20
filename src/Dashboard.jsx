import React, { useEffect, useState, useRef } from "react";
import Dropdown from "./components/Dropdown";
import { numGenerator, manageMinVal, manageMaxVal } from "./RandomNumgenerator";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function Dashboard() {
  const chartInstance = useRef(null);
  const [randomNumber, setRandomNumber] = useState(null);

  const handleNewMinValue = (val) => {
    manageMinVal(val); 
  };

  const handleNewMaxValue = (val) => {
    manageMaxVal(val); 
  };

  useEffect(() => {
    handleNewMaxValue(100); 

    const ctx = document.getElementById("myChart")?.getContext("2d");
    if (!ctx) {
      console.error("Canvas context not found.");
      return;
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Random Number",
            data: [],
            borderColor: "#f51b07",
            borderWidth: 1,
            fill: true,
            backgroundColor: "#fabab4",
            tension: 0.5,
          },
        ],
      },
      options: {
        responsive: true
      },
    });

    let counter = 0;

    numGenerator((ranNum) => {
      counter++;
      setRandomNumber(ranNum);
      chartInstance.current.data.labels.push(counter);
      chartInstance.current.data.datasets[0].data.push(ranNum);
      chartInstance.current.update();

      if (chartInstance.current.data.labels.length > 20) {
        chartInstance.current.data.labels.shift();
        chartInstance.current.data.datasets[0].data.shift();
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <main className="flex gap-5 flex-col pt-4 h-400px items-center">
      <div className="flex justify-around w-full">
        <Dropdown
          onNewDropvalue={handleNewMinValue}
          name="Minimum "
          initialVal={1}
        />
        <Dropdown
          onNewDropvalue={handleNewMaxValue}
          name="Maximum "
          initialVal={100}
        />
      </div>
      <div className="w-full flex justify-around items-center">
        <div className="w-2/3">
          <canvas id="myChart"></canvas>
        </div>
        <div className="h-24 w-24 bg-green-400 rounded-md flex items-center justify-center text-5xl text-white">
          {randomNumber}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
