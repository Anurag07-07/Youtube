import React from "react";
import { IoHome } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { useStore } from "../store/store";

const Slider = () => {
  const { expanded, collapse } = useStore();

  return (
    <div
      className={`h-[calc(100vh-64px)] flex flex-col py-6 bg-black text-white transition-[width] duration-500 ease-in-out
        ${expanded ? "w-64 px-6" : "w-0 sm:w-20 sm:items-center overflow-hidden"}
      `}
    >
      {/* Home */}
      <div className="flex items-center gap-x-4 mb-6 hover:bg-zinc-800 p-2 rounded-xl cursor-pointer">
        <IoHome size={24} />
        <span
          className={`${
            expanded ? "block text-base" : "hidden sm:hidden md:hidden lg:hidden"
          } transition-opacity duration-300`}
        >
          Home
        </span>
      </div>

      {/* Shorts */}
      <div className="flex items-center gap-x-4 mb-6 hover:bg-zinc-800 p-2 rounded-xl cursor-pointer">
        <SiYoutubeshorts size={24} />
        <span
          className={`${
            expanded ? "block text-base" : "hidden sm:hidden md:hidden lg:hidden"
          } transition-opacity duration-300`}
        >
          Shorts
        </span>
      </div>

      {/* Subscriptions */}
      <div className="flex items-center gap-x-4 mb-6 hover:bg-zinc-800 p-2 rounded-xl cursor-pointer">
        <MdSubscriptions size={24} />
        <span
          className={`${
            expanded ? "block text-base" : "hidden sm:hidden md:hidden lg:hidden"
          } transition-opacity duration-300`}
        >
          Subscriptions
        </span>
      </div>

      {/* Settings */}
      <div className="flex items-center gap-x-4 mt-auto hover:bg-zinc-800 p-2 rounded-xl cursor-pointer">
        <IoSettings size={24} />
        <span
          className={`${
            expanded ? "block text-base" : "hidden sm:hidden md:hidden lg:hidden"
          } transition-opacity duration-300`}
        >
          Settings
        </span>
      </div>
    </div>
  );
};

export default Slider;
