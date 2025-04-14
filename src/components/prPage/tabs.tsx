import React, { ReactNode, useState } from "react";
import { Timeline } from "./timeline";
import { ChecksIcon, CommitIcon, ConversationIcon, FilesChangedIcon } from "../../utils/icons";
import { Sidebar } from "./reviewers";

interface Tab {
  id: string;
  label: string;
  content:  ReactNode;
  icon:ReactNode;
  count:number;
}

const tabs: Tab[] = [
  { id: "tab1", label: "Conversation", content: <Timeline/>,icon :<ConversationIcon/>,count:3 },
  { id: "tab2", label: "Commits", content: "This is the second item's tab body.",icon:<CommitIcon/>,count:1 },
  { id: "tab3", label: "Checks", content: "This is the third item's tab body.", icon:<ChecksIcon/>, count:5 },
  { id: "tab4", label: "Files changed", content: "This is the third item's tab body.", icon:<FilesChangedIcon/>, count:1 },
];

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  return (
    <div>
      {/* Mobile: Select Dropdown */}
      <select
        id="tab-select"
        className="sm:hidden py-3 px-4 pe-9 block w-full border-[#d1d9e0] text-sm "
        value={activeTab}
        onChange={(e) => setActiveTab(e.target.value)}
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <option key={tab.id} value={tab.id}>
            {tab.label}
          </option>
        ))}
      </select>

      {/* Desktop: Tab Buttons */}
      <div className="hidden sm:block border-b border-[#d1d9e0] mt-4">
        <nav className="flex gap-x-2" aria-label="Tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`-mb-px rounded-[4px] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium text-center border focus:outline-none text-[#1f2328]
                ${
                  activeTab === tab.id
                    ? "bg-white border-b-transparent  border-[#d1d9e0] hover:border-[#d1d9e0]"
                    : "bg-transparent text-gray-500 hover:text-gray-700"
                }`}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span><span>{tab.label}</span><span className="px-[0.375rem] rounded-full bg-[#818b981f]">{tab.count}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-3 flex w-full flex-wrap  justify-between">
        <div className="w-[77%]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className={activeTab === tab.id ? "block" : "hidden"}
          >
            <div className="p-3 sm:p-0">
              <p className="text-gray-500">
                {tab.content}
              </p>
            </div>
          </div>
        ))}
        </div>

        <div className="w-[22%]"><Sidebar /></div>

      </div>
    </div>
  );
};

export default TabComponent;
