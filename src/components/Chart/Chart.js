import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...dataPointsValue);
  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.lable}
            maxValue={totalMaximum}
            value={dataPoint.value}
            lable={dataPoint.lable}
          />
        );
      })}
    </div>
  );
};

export default Chart;
