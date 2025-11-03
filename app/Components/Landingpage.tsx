import React from 'react';
import Slider from './Slider';
import Mainpage from './Mainpage';
import Navbar from './Navbar';
import { useStore } from '../store/store';

const Landingpage = () => {
  const { expanded } = useStore();

  return (
    <div className="h-screen flex bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-16 bottom-0 bg-gray-950 z-40 transition-all duration-500 ease-in-out
          ${expanded ? 'w-64 sm:w-64' : 'w-0 sm:w-20'}
          ${expanded ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
        `}
      >
        <Slider />
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-500 ease-in-out ${
          expanded ? 'sm:ml-64' : 'sm:ml-20'
        }`}
      >
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 h-16 bg-gray-900 z-50">
          <Navbar />
        </div>

        {/* Scrollable main content */}
        <div className="flex-1 mt-16 overflow-auto bg-gray-900">
          <Mainpage />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
