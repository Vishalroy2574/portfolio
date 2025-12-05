import React from 'react';

const Navigation = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-2 flex gap-2 overflow-x-auto border border-gray-700">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap transform ${
            activeTab === tab
              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black scale-105 shadow-lg shadow-yellow-500/30'
              : 'text-gray-400 hover:text-white hover:bg-gray-800'
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;