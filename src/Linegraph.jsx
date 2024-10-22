import React, { useRef, useEffect, useContext } from "react";
import { numGenerator } from "./RandomNumgenerator";
import { Chart, registerables } from "chart.js";
import { RandomContext } from "./context";
import { interval } from "./RandomNumgenerator";

Chart.register(...registerables);

function Linegraph() {
  const chartInstance = useRef(null);
  const { updateRandomNumber } = useContext(RandomContext);

  useEffect(() => {
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
        responsive: true,
      },
    });

    let counter = 0;
    let intervalId; 

    intervalId = numGenerator((ranNum) => {
      counter++;
      updateRandomNumber(ranNum);
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
      if (intervalId) {
        clearInterval(intervalId); 
      }
    };
  }, [interval]);

  return (
    <div className="w-2/3 max-md:w-11/12">
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default Linegraph;
