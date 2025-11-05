const Navigation = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <nav className="bg-gray-900 rounded-2xl p-2 mb-8 flex gap-2 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === tab
              ? 'bg-gray-800 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
