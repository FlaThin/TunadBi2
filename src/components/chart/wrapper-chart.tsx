"use client"
import ReactEcharts from "echarts-for-react";

type WrapperChartProps = {
  option: any
} 


export function WrapperChart({option }: WrapperChartProps) {
  
  return <ReactEcharts  style={{height: "100%"}} className="h-full w-full" option={option} />  
}