import React from "react";
import { IoHome } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { useStore } from "../store/store";

const Slider = () => {
  const { expanded } = useStore();

  return (
    <div
      className={`bg-black text-white h-[calc(100vh-64px)] flex flex-col py-6 transition-all duration-500 ease-in-out
        ${expanded ? "w-64 px-6" : "w-20 items-center"}`}
    >
      {/* Home */}
      <div className="flex items-center gap-x-4 mb-6 hover:bg-zinc-800 p-2 rounded-xl cursor-pointer">
        <IoHome size={24} />
        <span className={`${expanded ? "block text-base" : "hidden"} transition-all`}>
          Home
        </span>
      </div>

      {/* Shorts */}
      <div className="flex items-center gap-x-4 mb-6 hover:bg-zinc-800 p-2 rounded-xl cursor-pointer">
        <SiYoutubeshorts size={24} />
        <span className={`${expanded ? "block text-base" : "hidden"} transition-all`}>
          Shorts
        </span>
      </div>

      {/* Subscriptions */}
      <div className="flex items-center gap-x-4 mb-6 hover:bg-zinc-800 p-2 rounded-xl cursor-pointer">
        <MdSubscriptions size={24} />
        <span className={`${expanded ? "block text-base" : "hidden"} transition-all`}>
          Subscriptions
        </span>
      </div>

      {/* Settings */}
      <div className="flex items-center gap-x-4 mt-auto hover:bg-zinc-800 p-2 rounded-xl cursor-pointer">
        <IoSettings size={24} />
        <span className={`${expanded ? "block text-base" : "hidden"} transition-all`}>
          Settings
        </span>
      </div>
    </div>
  );
};

export default Slider;
