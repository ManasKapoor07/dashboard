import { useState } from "react";

import homeIcon from "../assets/homeSvg.svg";
import reportIcon from "../assets/description.svg";
import alertIcon from "../assets/alertSvg.svg";
import simulatorIcon from "../assets/simulatorSvg.svg";
import educationIcon from "../assets/educationSvg.svg";
import upgradeIcon from "../assets/upgradeSvg.svg";
import rewardsIcon from "../assets/rewardsSvg.svg";

const menu = [
  {
    id: "overview",
    label: "Overview",
    icon: homeIcon,
    children: [
      "Score & Report",
      "Summary",
      "History",
      "Where You Stand",
    ],
  },
  { id: "report", label: "Your Report", icon: reportIcon },
  { id: "alerts", label: "Alerts", icon: alertIcon, badge: 4 },
  { id: "simulator", label: "Simulator", icon: simulatorIcon },
  { id: "education", label: "Education", icon: educationIcon },
  { id: "upgrade", label: "Upgrade My Plan", icon: upgradeIcon },
  { id: "rewards", label: "Rewards Program", icon: rewardsIcon },
];

const Sidebar = () => {
  const [openSection, setOpenSection] = useState("overview");
  const [activeChild, setActiveChild] = useState("Summary");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <button
        className="lg:hidden fixed top-2 left-4 z-50 bg-green-700 text-white p-2 rounded-md"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static top-0 left-0 z-50 h-screen  bg-[#008A00] text-white
        transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0 w-72" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <div className="px-6 py-5 flex items-center gap-3">
          <div className="w-4 h-4 bg-yellow-400" />
          <span className="text-xl font-bold tracking-wide flex items-start gap-1">
            NETBRAMHA
            <sup className="text-[10px] font-light leading-none mt-3">TM</sup>
          </span>
        </div>

        <div className="flex-1 py-4">
          {menu.map((item) => {
            const isOpen = openSection === item.id;
            const isCollapsible = Array.isArray(item.children);

            return (
              <div key={item.id} className={isOpen ? "bg-[#007200]" : ""}>
                <button
                  className="flex items-center justify-between w-full text-left px-6 py-3"
                  onClick={() =>
                    isCollapsible &&
                    setOpenSection(isOpen ? null : item.id)
                  }
                >
                  <div className="flex items-center gap-3">
                    <img src={item.icon} alt="" className="w-4 h-4" />
                    <span className="text-base">{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className="bg-yellow-400 text-green-900 text-sm font-semibold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}

                  {isCollapsible && (
                    <span
                      className={`transition-transform ${
                        isOpen ? "" : "rotate-180"
                      }`}
                    >
                      ⌃
                    </span>
                  )}
                </button>

                {isCollapsible && isOpen && (
                  <div className="relative ml-7 mt-4 pb-8 flex gap-4">
                    <div className="w-[2px] bg-[#3FA23F] rounded-full" />
                    <div className="space-y-6 text-green-100">
                      {item.children.map((child) => {
                        const isActive = activeChild === child;

                        return (
                          <div
                            key={child}
                            onClick={() => {
                              setActiveChild(child);
                              setIsSidebarOpen(false); 
                            }}
                            className={`cursor-pointer ${
                              isActive
                                ? "text-white font-semibold"
                                : "hover:text-white"
                            }`}
                          >
                            {child}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
