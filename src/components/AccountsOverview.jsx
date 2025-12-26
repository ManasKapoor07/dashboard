import { useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

import warnigImg from "../assets/warning.svg";
import refrence from "../assets/refrence.svg";

ChartJS.register(ArcElement, Tooltip, Legend);

const ACCOUNTS = [
  { label: "Closed credit cards", value: 4, color: "#7C7BE6", type: "closed" },
  { label: "Closed loans", value: 1, color: "#F6E36B", type: "closed" },
  { label: "Open credit cards", value: 2, color: "#9ED7E5", type: "open" },
  { label: "Open loans", value: 6, color: "#7ED59A", type: "open" },
];

const AccountsOverview = () => {
  const [filter, setFilter] = useState("all");

  const filteredAccounts =
    filter === "all"
      ? ACCOUNTS
      : ACCOUNTS.filter(a => a.type === filter);

  const totalAccounts = filteredAccounts.reduce(
    (sum, a) => sum + a.value,
    0
  );

  const data = {
    labels: filteredAccounts.map(a => a.label),
    datasets: [
      {
        data: filteredAccounts.map(a => a.value),
        backgroundColor: filteredAccounts.map(a => a.color),
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white w-full px-4 sm:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6">

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border-t-2 border-[#00A6CA] p-4 sm:p-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-[#046899]">
                Your Accounts
              </h3>
              <span className="text-gray-900 text-lg">ⓘ</span>
            </div>

            <div className="flex bg-gray-100 rounded-lg p-1 text-sm w-fit">
              {["all", "open", "closed"].map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-1 rounded-lg capitalize transition ${
                    filter === type
                      ? "bg-[#066A9B] text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0">
              <Pie data={data} options={options} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-sm text-gray-500">Total Accounts</p>
                <p className="text-2xl font-bold">{totalAccounts}</p>
              </div>
            </div>

            <div className="flex flex-col space-y-5 w-full max-w-sm">
              {filteredAccounts.map(({ label, value, color }) => (
                <div
                  key={label}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-gray-800 font-medium text-sm sm:text-base">
                      {label}
                    </span>
                  </div>
                  <span className="text-gray-900 font-semibold">
                    {value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-6">

          <div className="flex rounded-2xl border-t-2 border-[#7CC6DD] overflow-hidden bg-white shadow-sm">
            <div className="w-14 sm:w-16 bg-blue-50 flex items-start justify-center pt-6">
              <img src={warnigImg} className="w-5 h-5" />
            </div>

            <div className="flex-1 p-4 sm:p-6 flex justify-between gap-4">
              <div>
                <h4 className="font-medium text-[#046899] text-sm sm:text-base">
                  Total Disputes
                </h4>
                <p className="text-[#595959] mt-2 text-sm max-w-xs">
                  Learn more about credit reporting and related policies.
                </p>
                <button className="text-[#066A9B] font-medium text-sm mt-3 underline">
                  Read More
                </button>
              </div>
              <div className="text-lg font-bold text-[#262626]">
                12
              </div>
            </div>
          </div>

          <div className="flex rounded-2xl border-t-2 border-[#7CC6DD] overflow-hidden bg-white shadow-sm">
            <div className="w-14 sm:w-16 bg-blue-50 flex items-start justify-center pt-6">
              <img src={refrence} className="w-5 h-5" />
            </div>

            <div className="flex-1 p-4 sm:p-6 flex justify-between gap-4">
              <div>
                <h4 className="font-medium text-[#046899] text-sm sm:text-base">
                  Total Enquiries
                </h4>
                <p className="text-[#595959] mt-2 text-sm">
                  (In last 3 years)
                </p>
              </div>
              <div className="text-lg font-bold text-[#262626]">
                05
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountsOverview;
