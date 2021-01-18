import React from "react";
import { Doughnut } from "react-chartjs-2";
import Card from "./Card";
import Loader from "./Loader";
import useStats from "../hooks/useStats";

import "../styles/stats.css";

function Stats({ url }) {
  const { stats, error, loading } = useStats(url);
  const data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["#3F51B5", "#32970a", "#d2173b"]
      },
    ],
  };
  if (stats) {
    data.labels = ["Active", "Recovered", "Deaths"];
    data.datasets[0].data = [stats.active, stats.recovered, stats.deaths];
  }

  return (
    <div className="container">
      {error ? (
        <h4 className="error">Looks like there is a problem...</h4>
      ) : null}
      {loading ? <Loader /> : null}
      {stats && !loading && !error ? (
        <>
          <div className="card-container">
            <Card
              title="Total cases"
              count={stats.error ? 0 : stats.cases}
              total={stats.error ? 0 : stats.cases}
              variant="global"
            />
            <Card
              title="Active cases"
              count={stats.error ? 0 : stats.active}
              total={stats.error ? 0 : stats.cases}
              variant="active"
            />
            <Card
              title="Recovered"
              count={stats.error ? 0 : stats.recovered}
              total={stats.error ? 0 : stats.cases}
              variant="recover"
            />
            <Card
              title="Deaths"
              count={stats.error ? 0 : stats.deaths}
              total={stats.error ? 0 : stats.cases}
              variant="death"
            />
            <Card
              title="Today cases"
              count={stats.error ? 0 : stats.todayCases}
              total={stats.error ? 0 : stats.cases}
              variant="today"
            />
            <Card
              title="Today deaths"
              count={stats.error ? 0 : stats.todayDeaths}
              total={stats.error ? 0 : stats.cases}
              variant="today"
            />
          </div>
          <div className="graph">
            <Doughnut
              data={data}
              options={{
                title: {
                  display: true,
                  text: "Cases distribution",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                },
                responsive: true,
                maintainAspectRatio: true,
              }}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default React.memo(Stats);
