import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function PieChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["NV001", "Cty"],
    datasets: [
      {
        label: "Doanh số (triệu VND): ",
        data: [50, 230],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Doanh số (triệu VND)",
        position: "bottom" as const,
      },
    },
  };
  return (
    <>
      <Pie data={data} options={options} />
    </>
  );
}
