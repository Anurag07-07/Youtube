import React from 'react';
import Slider from './Slider';
import Mainpage from './Mainpage';
import Navbar from './Navbar';
import { useStore } from '../store/store';

const Landingpage = () => {
  const { expanded } = useStore();

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      {/* Navbar (fixed height) */}
      <div className="h-16">
        <Navbar />
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            expanded ? 'w-64' : 'w-20'
          }`}
        >
          <Slider />
        </div>

        {/* Main Content (does NOT shrink, stays same width) */}
        <div className="flex-1 bg-gray-900 overflow-auto">
          <Mainpage />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
