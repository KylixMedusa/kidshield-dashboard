import React from "react";

import dayjs from "dayjs";
import Chart, { Props } from "react-apexcharts";

const state: Props["series"] = [
  {
    name: "Filtered Pages",
    data: [11, 32, 45, 32, 34, 52, 41],
    // data: [31, 40, 28, 51, 42, 109, 100],
    color: "#ef4444",
  },
  {
    name: "Total Visits",
    data: [31, 40, 28, 51, 42, 109, 100],
    color: "#60a5fa",
  },
];

const options: Props["options"] = {
  chart: {
    type: "area",
    animations: {
      easing: "linear",
      speed: 300,
    },
    sparkline: {
      enabled: false,
    },
    brush: {
      enabled: false,
    },
    id: "basic-bar",
    foreColor: "hsl(var(--nextui-default-800))",
    stacked: true,
    toolbar: {
      show: false,
    },
  },

  xaxis: {
    type: "datetime",
    categories: [
      // populate with last 7 days
      dayjs().subtract(6, "day").toISOString(),
      dayjs().subtract(5, "day").toISOString(),
      dayjs().subtract(4, "day").toISOString(),
      dayjs().subtract(3, "day").toISOString(),
      dayjs().subtract(2, "day").toISOString(),
      dayjs().subtract(1, "day").toISOString(),
      dayjs().toISOString(),
    ],
    // tooltip: {
    //   formatter: (value) => dayjs(value).format("dd MMM YYYY"),
    // },
    labels: {
      // show: false,
      style: {
        colors: "hsl(var(--nextui-default-800))",
      },
      format: "dd MMM yyyy",
    },
    axisBorder: {
      color: "hsl(var(--nextui-nextui-default-200))",
    },
    axisTicks: {
      color: "hsl(var(--nextui-nextui-default-200))",
    },
  },
  yaxis: {
    labels: {
      style: {
        // hsl(var(--nextui-content1-foreground))
        colors: "hsl(var(--nextui-default-800))",
      },
    },
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    show: true,
    borderColor: "hsl(var(--nextui-default-200))",
    strokeDashArray: 0,
    position: "back",
  },
  stroke: {
    curve: "smooth",
    fill: {
      //   colors: ["red"],
    },
  },
  // @ts-expect-error marker is not in the types
  markers: false,
};

export const Steam: React.FC = () => {
  return (
    <>
      <div className="w-full z-20">
        <div id="chart">
          <Chart options={options} series={state} type="area" height={425} />
        </div>
      </div>
    </>
  );
};
