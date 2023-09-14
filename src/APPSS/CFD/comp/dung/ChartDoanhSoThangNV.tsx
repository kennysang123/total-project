import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { Box, Stack, Paper } from "@mui/material";
import { titleCss, Bold } from "../../Context/CSS";

export default function ChartDoanhSoThangNV() {
  const [doanhSoNgay, setDoanhSoNgay] = useState<any>([]);
  const [ngayCuaDoanhSo, setNgayCuaDoanhSo] = useState<any>([]);
  async function loadData() {
    const url = `https://vngate.top/API/DungDB/outMain.php?sub=getDoanhSoNam/dhahsd/`;
    const var1: any = [];
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.map((value: any) => {
          console.log(typeof value.doanhSoThang);
          typeof value.doanhSoThang === "string" &&
            var1.push(Number(value.doanhSoThang));
          typeof value.doanhSoThang === "object" && var1.push(0);

          //setDoanhSoNgay((prev: any) => [...prev, Number(value.doanhSo)]);
          //setNgayCuaDoanhSo((prev: any) => [...prev, value.ngayThang]);
        });
      })
      .catch((err) => {
        /* return { "errorDev:": err }; */
        console.log({ "errorDev:": err });
      });
    setDoanhSoNgay(var1);
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    indexAxis: "x" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        display: true,
      },
      title: {
        display: true,
        text: "Doanh số tháng (triệu VND)",
        position: "bottom" as const,
      },
    },
  };

  const data = {
    labels: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    datasets: [
      {
        label: "Doanh số",
        data: doanhSoNgay,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
  useEffect(() => {
    return () => {
      loadData();
    };
  }, []);
  return (
    <>
      <Box>
        <Stack ml={1} mt={1} mr={1}>
          <button onClick={() => loadData()}>click</button>
          <div style={titleCss}>Doanh số tháng:</div>
          <Bar options={options} data={data} />
        </Stack>
      </Box>
    </>
  );
}
