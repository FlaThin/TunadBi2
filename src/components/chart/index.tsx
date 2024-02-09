import { Suspense } from "react";
import { WrapperChart } from "./wrapper-chart";
import { Loader } from "./loader";


interface ChartTypes {
  Date: string,
  Value: string
}

export async function Chart() {
  const request = await fetch("http://localhost:3000/data.json");
  const data: ChartTypes[] = await request.json();

  const dates = data.map(item => new Date(item.Date));
  const values = data.map(item => parseInt(item.Value));

  const option = {
    dataZoom: [
      {
          id: 'dataZoomX',
          type: 'slider',
          xAxisIndex: [0],
          filterMode: 'filter',
          
      },
    ],
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: values,
        type: 'line',
        large: true
      }
    ],
    grid: {
      left: '16px',
      right: '16px',
      containLabel: true,
    },
  };

  return (
    <WrapperChart option={option} />
  )
}