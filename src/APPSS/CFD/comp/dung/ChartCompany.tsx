import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function ChartCompany() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: true,
        text: "Doanh số (triệu VND)",
      },
    },
  };

  const options2 = {
    indexAxis: "y" as const,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: ["NV001", "NV002", "NV003", "NV004", "NV005", "NV006", "NV007"],
    datasets: [
      {
        label: "Doanh số",
        data: [12, 230, 3, 5, 2, 3, 20],
        borderColor: "green",
        backgroundColor: "lime",
      },
    ],
  };

  /* new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "NV001",
        "NV002",
        "NV003",
        "NV004",
        "NV005",
        "NV006",
        "NV007",
        "NV008",
        "NV009",
        "NV010",
      ],
      datasets: [
        {
          label: "Doanh số tháng (triệu VND)",
          data: [12, 230, 3, 5, 2, 3, 20, 40, 50, 60],
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  }); */

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}
