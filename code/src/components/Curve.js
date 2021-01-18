/* eslint-disable no-unreachable */
import React from "react";
import useStats from "../hooks/useStats";
import Loader from "./Loader";
import "../styles/curve.css";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

function Curve({ url, selectedCountryCode }) {
  const { stats, loading, error } = useStats(url);
  let chartData = [];
  let chartArr = [];
  if (stats) {
    chartData = selectedCountryCode ? stats["timeline"] : stats;
    chartData &&
      chartData["cases"] &&
      Object.keys(chartData["cases"]).map((key) => {
        let tempObj = {};
        tempObj.dates = key;
        tempObj.cases = chartData["cases"][key];
        tempObj.recovered = chartData["recovered"][key];
        tempObj.deaths = chartData["deaths"][key];
        tempObj.active = tempObj.cases - (tempObj.recovered + tempObj.deaths)
        chartArr.push(tempObj);
        return chartArr;
      });
  }
  //   console.log(chartArr);
  return (
    <div className="curve-container">
      {error ? (
        <h4 className="error">Looks like there is a problem...</h4>
      ) : null}
      {loading ? <Loader /> : null}
      {chartData && !loading && !error ? (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={chartArr}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dates" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dot={false} dataKey="cases" stroke="#fb542b" />
            <Line dot={false} dataKey="active" stroke="#3F51B5" />
            <Line
              dot={false}
              dataKey="recovered"
              stroke="#32970a"
              activeDot={{ r: 8 }}
            />
            <Line
              dot={false}
              dataKey="deaths"
              stroke="#d2173b"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  );
}

export default Curve;
