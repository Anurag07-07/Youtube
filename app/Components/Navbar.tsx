import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import image from '../assets/sas.svg';
import acc from '../assets/queenland.png';
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { TiMicrophoneOutline } from "react-icons/ti";
import Image from 'next/image';
import { useStore } from '../store/store';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const { expanded, expand, collapse } = useStore();

  return (
    <div className="transition-all duration-300">
      {nav ? (
        <nav className="transition-all duration-300 flex justify-between p-4 gap-x-2 items-center text-white bg-black">
          {/* Sidebar Toggle */}
          <div onClick={() => (expanded ? collapse() : expand())} className="cursor-pointer">
            <IoMenu size={30} />
          </div>

          {/* Logo and search bar */}
          <div className="flex justify-between w-full">
            <div className="flex justify-between items-center gap-x-4">
              {/* Logo */}
              <div className="relative flex justify-center items-center gap-x-1">
                <Image src={image} width={30} alt="logo" />
                <div className="font-semibold text-lg">YouTube</div>
              </div>

              {/* Search icon (mobile only) */}
              <div onClick={() => setNav(false)} className="sm:hidden cursor-pointer">
                <CiSearch size={30} />
              </div>
            </div>

            {/* Search bar (desktop) */}
            <div className="relative hidden sm:flex justify-center items-center">
              <input
                placeholder="Search"
                className="w-[30vw] rounded-full px-3 py-1 bg-gray-800 text-white outline-none"
              />
              <div className="absolute right-0 bg-gray-600 w-14 h-7 flex justify-center items-center rounded-r-full">
                <CiSearch />
              </div>
              <div className="rounded-full w-8 h-8 bg-gray-600 absolute -right-10 flex justify-center items-center cursor-pointer">
                <TiMicrophoneOutline size={20} />
              </div>
            </div>

            {/* Create & Account */}
            <div className="flex justify-center items-center gap-x-3">
              <button className="bg-gray-700 px-3 py-1 rounded-md hover:bg-gray-600">+ Create</button>
              <Image src={acc} width={30} height={30} className="rounded-full" alt="account" />
            </div>
          </div>
        </nav>
      ) : (
        // Mobile Search View
        <nav className="transition-all duration-300 w-full flex justify-between items-center p-4 bg-black text-white">
          <div onClick={() => setNav(true)} className="cursor-pointer">
            <FaArrowLeft size={20} />
          </div>

          {/* Input Box */}
          <div className="flex relative">
            <input
              placeholder="Search"
              className="border-2 w-80 rounded-full px-3 bg-gray-800 text-white outline-none"
            />
            <div className="absolute right-0 bg-gray-600 w-14 h-7 flex justify-center items-center rounded-r-full">
              <CiSearch />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
