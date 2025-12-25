const SEGMENTS = [
  { min: 300, max: 739, percent: 15, color: "#E65C24", topPercent: 85 },
  { min: 740, max: 747, percent: 22, color: "#F18700", topPercent: 70 },
  { min: 748, max: 764, percent: 26, color: "#FFE100", topPercent: 55 },
  { min: 765, max: 777, percent: 18, color: "#A8CF5A", topPercent: 30 },
  { min: 778, max: 900, percent: 20, color: "#0A9900", topPercent: 10 },
];

const Stand = ({ score }) => {
  let activeSegment = null;

  for (let i = 0; i < SEGMENTS.length; i++) {
    if (score >= SEGMENTS[i].min && score <= SEGMENTS[i].max) {
      activeSegment = SEGMENTS[i];
      break;
    }
  }

  let markerPosition = 0;
  if (activeSegment) {
    let offset = 0;
    for (let i = 0; i < SEGMENTS.length; i++) {
      if (SEGMENTS[i] === activeSegment) break;
      offset += SEGMENTS[i].percent;
    }
    markerPosition = offset + activeSegment.percent / 2;
  }

  const topPercent = activeSegment?.topPercent ?? null;

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-10 shadow-sm">
      <h2 className="text-sm sm:text-lg font-semibold text-[#046899] mb-4 sm:mb-6">
        WHERE YOU STAND <span className="text-[#004364]">ⓘ</span>
      </h2>

      <div className="bg-[#F7F9FA] rounded-xl p-3 sm:p-6">
        <div className="bg-white p-4 sm:p-6 rounded-xl">
          
          {/* BAR + MARKER */}
          <div className="relative">
            <div className="flex h-10 sm:h-16 rounded-lg overflow-hidden text-xs sm:text-lg font-semibold">
              {SEGMENTS.map(seg => (
                <div
                  key={`${seg.min}-${seg.max}`}
                  className="flex items-center justify-center text-white"
                  style={{
                    width: `${seg.percent}%`,
                    backgroundColor: seg.color,
                  }}
                >
                  {seg.percent}%
                </div>
              ))}
            </div>

            {activeSegment && (
              <div
                className="absolute left-0"
                style={{
                  top: "100%",
                  marginTop: "6px",
                  width: "100%",
                }}
              >
                <div
                  className="absolute"
                  style={{
                    left: `${markerPosition}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="w-0 h-0 border-l-5 border-r-5 border-b-6 border-transparent border-b-[#046899]" />
                </div>
              </div>
            )}
          </div>

          {/* SCORE */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-xs sm:text-base font-medium text-gray-700">
              Your NB Score
            </p>
            <p className="text-3xl sm:text-5xl font-bold text-[#262626]">
              {score}
            </p>
          </div>

          <hr className="my-3 sm:my-4 opacity-15" />

          {/* LEGEND */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-base text-gray-700">
            <span className="font-normal text-[#262626]">
              Score Range
            </span>

            {SEGMENTS.map(seg => (
              <div
                key={`legend-${seg.min}-${seg.max}`}
                className="flex items-center gap-2"
              >
                <span
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm"
                  style={{ backgroundColor: seg.color }}
                />
                <span className="font-bold text-[#595959]">
                  {seg.min}-{seg.max}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-6 sm:mt-8 text-gray-800">
          {topPercent !== null && (
            <p className="text-sm sm:text-lg">
              Your NB Score lies in the top {topPercent}% in All Of India.
            </p>
          )}
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Based on the NB Data
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stand;
