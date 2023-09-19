import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Total",
      data: [1200, 2100, 800, 1600, 900, 1700],
      backgroundColor: "rgba(136, 132, 216, 0.8)",
      borderColor: "rgba(136, 132, 216, 1)",
      borderWidth: 1,
      fill: true,
    },
  ],
};

interface Props {
  title: string;
}
const ChartComponent = ({ title }: Props) => {
  const chartRef = useRef(null);
  const chartInstance: any = useRef(null); // Sử dụng ref để theo dõi biểu đồ

  useEffect(() => {
    if (chartRef.current) {
      // Hủy biểu đồ cũ nếu đã tồn tại
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Tạo biểu đồ mới
      chartInstance.current = new Chart(chartRef.current, {
        type: "line",
        data: data,
        options: {
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="chart">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
