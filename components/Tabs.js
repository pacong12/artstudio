import { useState } from 'react';

const Tabs = ({ setFilter }) => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFilter(tab); // Update filter berdasarkan tab yang dipilih
  };

  return (
    <div className="flex space-x-4 mb-6">
      {['All', 'Upcoming', 'Ongoing', 'Recent'].map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabChange(tab)}
          className={`px-4 py-2 font-semibold  ${
            activeTab === tab ? 'text-black hover:text-gray-900' : 'text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;