import Image from 'next/image';
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import image from '../assets/sas.svg'
import acc from '../assets/queenland.png'
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
const Landingpage = () => {
  const [nav,setNav] = useState<boolean>(true)
  const [slider,setSlider] = useState<boolean>(true) 
  return (
    <>
      <div className=' transition-all duration-300 z-50'>
      {
        nav ? (<nav className='  transition-all duration-300  flex justify-between p-4 gap-x-2 items-center'>
      {/* Slider */}
      <div onClick={()=>{
        setSlider((prev)=>!prev)
      }}>
        <IoMenu size={30} />
      </div>
      {/* Logo and search bar */}
      <div className=' flex justify-between w-96'>
      <div className=' flex justify-center items-center gap-x-4'>
        {/* Logo  */}
        <div className=' flex justify-center items-center gap-x-1'>
          <Image src={image} width={30} alt='logo'></Image>
          <div>YouTube</div>
        </div>
        {/* Search bar */}
        <div onClick={()=>{
          setNav((prev)=>!prev)
        }}>
          <CiSearch size={30} />
        </div>
      </div>
      {/* Create account  */}
      <div className=' flex justify-center items-center gap-x-3'>
        <button>+Create</button>
        <Image src={acc} width={30} className='w-5 rounded-full h-5' alt='account'></Image>
      </div>
      </div>
    </nav>):(<nav className='   transition-all duration-300   w-full flex justify-between items-center p-4'>
      {/* Arrow */}
      <div onClick={()=>{
        setNav((prev)=>!prev)
      }}>
        <FaArrowLeft size={20} />
      </div>
      {/* Input Box */}
      <div className=' flex relative'>
        <input placeholder='Search' className=' border-2 w-80 rounded-4xl px-3'></input>
        <div className=' absolute right-0 bg-gray-400 w-14 h-7 flex justify-center items-center rounded-r-full'>
          <CiSearch></CiSearch>
        </div>
      </div>
    </nav>)
      }
    </div>
    {/* Main Screen */}
    <div className=' flex'>
      {/* Slider  */}
      <div className={slider ? ` bg-yellow-400 h-screen w-96 z-20 transition-all duration-500` : `bg-yellow-400 w-0 transition-all duration-500`}></div>
      {/* Main */}
      <div className=' bg-green-500 w-full h-screen'>
        {
            
        }
      </div>
    </div>
    </>
  )
}

export default Landingpage