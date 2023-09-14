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

import { cpnLoadData } from "../../../../FunctionTotal/FunctionTotal";
import { height } from "@mui/system";

export default function ChartDoanhSoNgayNV() {
  const [doanhSoNgay, setDoanhSoNgay] = useState<any>([]);
  const [ngayCuaDoanhSo, setNgayCuaDoanhSo] = useState<any>([]);
  async function loadData() {
    const url = `https://vngate.top/API/DungDB/outMain.php?sub=getDoanhSoByCode/dhahsd/`;
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        json.map((value: any) => {
          setDoanhSoNgay((prev: any) => [...prev, value.doanhSo]);
          setNgayCuaDoanhSo((prev: any) => [...prev, value.ngayThang]);
        });
      })
      .catch((err) => {
        /* return { "errorDev:": err }; */
        console.log({ "errorDev:": err });
      });
  }

  useEffect(() => {
    return () => {
      loadData();
    };
  }, []);

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
    /* maintainAspectRatio: false, */
    plugins: {
      legend: {
        position: "bottom" as const,
        display: true,
      },
      title: {
        display: true,
        text: "Doanh số ngày (triệu VND)",
        position: "bottom" as const,
      },
    },
  };

  const data = {
    labels: ngayCuaDoanhSo,
    datasets: [
      {
        label: "Doanh số",
        data: doanhSoNgay,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <Box>
        <Stack ml={1} mt={1} mr={1}>
          <button onClick={() => loadData()}>click</button>
          <div style={titleCss}>Doanh số ngày:</div>
          <Bar options={options} data={data} style={{ height: "300px" }} />
        </Stack>
      </Box>
    </>
  );
}
