import React from "react";
import { Box, Stack, Paper } from "@mui/material";
import { titleCss, Bold } from "../../Context/CSS";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function ChartTienDoNgay() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Đã hoàn thành", "Chưa hoàn thành"],
    datasets: [
      {
        label: "Số lượng: ",
        data: [6, 4],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
        display: true,
      },
      title: {
        display: true,
        text: "Số lượng: ",
        position: "bottom" as const,
      },
    },
  };
  return (
    <>
      <Box>
        <Stack ml={1} mt={1} mr={1}>
          <div style={titleCss}>Tiến độ ngày:</div>
          <Pie data={data} options={options} />
        </Stack>
      </Box>
    </>
  );
}
