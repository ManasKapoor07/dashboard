import { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

const MONTHS = [
  "JAN","FEB","MAR","APR","MAY","JUN",
  "JUL","AUG","SEP","OCT","NOV","DEC",
];

const SCORES = {
  APR: 520,
  MAY: 580,
  JUN: 493,
  AUG: 510,
};

const HISTORY = {
  AUG: [
    { score: 493, date: "10/12/2025", trend: "up" },
    { score: 490, date: "11/12/2025", trend: "down" },
    { score: 510, date: "12/12/2025", trend: "up" },
    { score: 509, date: "13/12/2025", trend: "flat" },
    { score: 509, date: "13/12/2025", trend: "flat" },
    { score: 609, date: "13/12/2025", trend: "up" },
    { score: "N/H", date: "14/012/2025", trend: "none" },
  ],
  JUN: [{ score: 493, date: "18/12/2025", trend: "down" }],
  MAY: [{ score: 580, date: "18/12/2025", trend: "up" }],
  APR: [{ score: 520, date: "15/12/2025", trend: "up" }],
};

const NBScoreHistory = () => {
  const [activeMonth, setActiveMonth] = useState("AUG");

  const values = MONTHS.map(m => SCORES[m] ?? null);

  const lastIndex = (() => {
    const valid = values
      .map((v, i) => (v != null ? i : null))
      .filter(v => v != null);
    return valid.length ? valid[valid.length - 1] : -1;
  })();

  const data = {
    labels: MONTHS,
    datasets: [
      {
        data: values,
        borderColor: "#003A5D",
        borderWidth: 2,
        tension: 0,
        fill: false, 

        pointRadius: 5,
        pointHoverRadius: 7,
        pointBorderWidth: 3,
        pointBorderColor: "#003A5D",
        pointBackgroundColor: ctx =>
          ctx.dataIndex === lastIndex ? "#FDDC02" : "#FFFFFF",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      mode: "point",
      intersect: true,
    },
    hover: {
      mode: "point",
      intersect: true,
    },

    onClick: (_, elements) => {
      if (!elements.length) return;
      const idx = elements[0].index;
      const month = MONTHS[idx];
      if (SCORES[month]) setActiveMonth(month);
    },

    plugins: {
      legend: { display: false },
      tooltip: {
  enabled: true,
  displayColors: false,

  backgroundColor: (ctx) => {
    const point = ctx.tooltip?.dataPoints?.[0];
    if (!point) return "#00A6CA";
    return point.dataIndex === lastIndex ? "#FDDC02" : "#00A6CA";
  },

  callbacks: {
    title: () => "",

    label: (ctx) => {
      const value = ctx.parsed?.y ?? ctx.raw;
      if (value == null) return "";
      const isLast = ctx.dataIndex === lastIndex;
      return `${value} ${isLast ? "›" : "+"}`;
    },

    labelTextColor: (ctx) => {
      return ctx.dataIndex === lastIndex ? "#000000" : "#FFFFFF";
    },
  },
},

    },

    scales: {
      x: {
        grid: {
          color: "#D9D9D9",
          borderDash: [4, 4],
        },
        ticks: {
          color: "#B3B3B3",
        },
      },
      y: {
        min: 300,
        max: 900,
        ticks: {
          stepSize: 100,
          color: "#B3B3B3",
        },
        grid: {
          color: "#D9D9D9",
          borderDash: [4, 4],
        },
      },
    },
  };

  return (
    <div className="bg-white p-10 shadow-sm">
      <h2 className="text-lg font-semibold text-[#046899] mb-2">
        NB SCORE HISTORY <span className="text-[#004364]">ⓘ</span>
      </h2>
      
      <p className="text-[#262626] mb-6 text-base">
        Trended view of the changes in your NB Score with every refresh.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 rounded-xl bg-[#FAFAFA]">
        <div className="lg:col-span-3 h-[320px]  rounded-xl ">
          <Line data={data} options={options} />
        </div>

        <div className="bg-white rounded-xl shadow-sm h-[260px]  p-4 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b text-[#262626]">
            {activeMonth} 2025
          </h3>

          <div className="">
            {(HISTORY[activeMonth] || []).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b  border-gray-300 pb-2 my-1"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-lg ${
                      item.trend === "up"
                        ? "text-green-600"
                        : item.trend === "down"
                        ? "text-red-600"
                        : item.trend === "flat"
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    {item.trend === "up" && "↗"}
                    {item.trend === "down" && "↘"}
                    {item.trend === "flat" && "→"}
                    {item.trend === "none" && "—"}
                  </span>

                  <span className={`font-semibold text-base ${item.score === "N/H" ? "text-gray-300": "text-[#262626]"} `}>
                    {item.score}
                  </span>
                </div>

                <span className="text-[#262626] text-sm">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NBScoreHistory;
