import { useState } from "react";
import GaugeChart from "react-gauge-chart";

import eyeIcon from "../assets/visibility.svg";
import rightIcon from "../assets/chevron_right.svg";
import nbreportImage from "../assets/Nbreport.png";
import fileSaveImage from "../assets/file_save.svg";
import creditImage from "../assets/creditImage.svg";

const MIN = 300;
const MAX = 900;

const NBScoreCard = ({ score, setScore }) => {
  const [lastUpdated, setLastUpdated] = useState("25th Dec ’25");
  

  const percent = (score - MIN) / (MAX - MIN);

  const handleRefresh = () => {
    const delta = Math.floor(Math.random() * 20) - 10;
    const next = Math.min(
      MAX,
      Math.max(MIN, score + delta)
    );

    setScore(next);
    setLastUpdated("Just now");
  };


  return (
    <div className="p-4 lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-gray-100 w-[90%] h-full max-h-[480px] mx-auto rounded-lg shadow-lg shadow-[#1F5A8533] overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
              Hello, Rahul L.
            </h2>

            <div className="relative flex justify-center mt-6">
              <GaugeChart
                id="nb-score-gauge"
                nrOfLevels={5}
                arcsLength={[0.48, 0.18, 0.16, 0.16, 0.12]}
                colors={[
                  "#d4632c",
                  "#e68a2e",
                  "#f5d547",
                  "#a8cf5a",
                  "#4e9f2d",
                ]}
                percent={percent}
                cornerRadius={0}
                arcPadding={0.015}
                arcWidth={0.1}
                needleColor="#222"
                needleBaseColor="#e6e6e6"
                hideText
                animate={false}
                style={{ width: "100%", maxWidth: 300 }}
              />

              <span className="absolute xl:left-24 left-10 -bottom-2 text-[#BFBFBF] text-sm">
                300
              </span>
              <span className="absolute xl:right-24 right-10 -bottom-2 text-[#BFBFBF] text-sm">
                900
              </span>
            </div>

            <div className="text-center mt-2">
              <div className="text-3xl sm:text-4xl font-bold text-gray-800">
                {score}
              </div>
              <p className="text-sm sm:text-lg text-gray-700 mt-2">
                is your <span className="text-blue-500">NB</span> Score as of{" "}
                {lastUpdated}
              </p>
            </div>
          </div>

          <div className="bg-white px-6 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <button className="text-[#066A9B] cursor-pointer text-sm sm:text-base font-medium underline">
              Score Analysis
            </button>

            <button
              onClick={handleRefresh}
              className="bg-[#FDDC02] cursor-pointer text-sm sm:text-base px-6 sm:px-16 py-3 rounded-full font-medium hover:bg-yellow-500"
            >
              Refresh Now
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8">

          <div className="bg-white rounded-lg shadow-lg px-6 py-6 sm:py-8 flex flex-col sm:flex-row gap-6 justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#046899]">
                NB REPORT
              </h3>

              <p className="text-[#262626] my-3 text-sm sm:text-base max-w-sm">
                Get your personalized NB Report to plan your financial future.
              </p>

              <div className="space-y-4">
                <span className="flex items-center gap-2 cursor-pointer text-[#066A9B] font-medium underline">
                  <img src={eyeIcon} className="w-5 h-5" />
                  View Your NB Report
                  <img src={rightIcon} className="w-2.5 h-2.5" />
                </span>

                <span className="flex gap-2 items-center cursor-pointer text-[#066A9B] font-medium underline">
                  <img src={fileSaveImage} className="w-5 h-5" />
                <span> Download Your NB Report With Summary</span> 
                  <img src={rightIcon} className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>

            <img
              src={nbreportImage}
              className="w-20 h-20 hidden lg:block self-start "
            />
          </div>

          <div
            className="rounded-lg p-4 sm:p-6 justify-center items-center shadow-lg flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"
            style={{
              background:
                "radial-gradient(19.11% 89.96% at 95.54% 0%, #FFF8D4 0%, #FEEF93 100%)",
            }}
          >
            <p className="text-[#262626] text-sm sm:text-base lg:w-80  leading-relaxed">
              You currently have an active subscription. You will be able to access
                Free Annual NB Score & Report
              after the subscription period expires.
            </p>

            <img
              src={creditImage}
              className="w-30 sm:w-36 h-auto hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NBScoreCard;
