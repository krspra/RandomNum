import React, { useEffect, useRef, useContext, useState } from "react";
import { Chart, registerables } from "chart.js";
import { RandomContext } from "./context";

Chart.register(...registerables);

function Bargraph() {
  const barChartInstance = useRef(null);
  const { randomNumber } = useContext(RandomContext);
  const [counts, setCounts] = useState(Array(10).fill(0)); 

  useEffect(() => {
    const ctx = document.getElementById("myBarGraph")?.getContext("2d");
    if (!ctx) {
      console.error("Canvas context not found.");
      return;
    }

    barChartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "1-10", "11-20", "21-30", "31-40", "41-50",
          "51-60", "61-70", "71-80", "81-90", "91-100",
        ],
        datasets: [
          {
            data: counts,
            borderWidth: 1,
            fill: true,
            backgroundColor: [
              "blue", "green", "pink", "yellow", "purple",
              "orange", "brown", "red", "#34d8eb", "#eb6e34",
            ],
            tension: 0.5,
          },
        ],
      },
      options: {
        plugins:{
          legend:{
            display:false,
          }
        },
        responsive:true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        animation: false,
      },
    });

    return () => {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (randomNumber >= 1 && randomNumber <= 10) {
        newCounts[0]++;
      } else if (randomNumber >= 11 && randomNumber <= 20) {
        newCounts[1]++;
      } else if (randomNumber >= 21 && randomNumber <= 30) {
        newCounts[2]++;
      } else if (randomNumber >= 31 && randomNumber <= 40) {
        newCounts[3]++;
      } else if (randomNumber >= 41 && randomNumber <= 50) {
        newCounts[4]++;
      } else if (randomNumber >= 51 && randomNumber <= 60) {
        newCounts[5]++;
      } else if (randomNumber >= 61 && randomNumber <= 70) {
        newCounts[6]++;
      } else if (randomNumber >= 71 && randomNumber <= 80) {
        newCounts[7]++;
      } else if (randomNumber >= 81 && randomNumber <= 90) {
        newCounts[8]++;
      } else {
        newCounts[9]++;
      }

      if (barChartInstance.current) {
        barChartInstance.current.data.datasets[0].data = newCounts; 
        barChartInstance.current.update(); 
      }

      return newCounts;
    });
  }, [randomNumber]);

  return (
    <div className="w-2/3 max-md:w-11/12">
      <canvas id="myBarGraph"></canvas>
    </div>
  );
}

export default Bargraph;
