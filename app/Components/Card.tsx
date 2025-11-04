import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { useStore } from '../store/store';

interface CardProps{
  channel:string
  views:string
  title:string
  thumbnail:StaticImageData
  age:string
}

export const Card = ({channel,views,title,thumbnail,age}:CardProps) => {
  {/* Main  */}
  const {expand,expanded,collapse} = useStore()
  return (
    <div className={expanded ? `` : ` flex flex-col`}>
      {/* For Image */}
      <div className={expanded? ``: ``}>
        <Image src={thumbnail} alt={title} className={expanded ? `` : ` rounded-2xl`}></Image>
      </div>
      {/* For Title  */}
      <div className={expanded ? ``: `flex justify-center items-center `}>
        {/* For Channel Image  */}
        <div className={expanded ? ``: ` w-28 rounded-full`}>
          <Image className={expanded ? `` : ` w-14 h-14 bg-green-500 rounded-full object-center`} src={thumbnail} alt={title}></Image>
        </div>
        {/* For Title+Subtitle+Time And Views  */}
        <div className={expanded ? `` :` `}>
          {/* Title */}
          <div>
            {title}
          </div>
          {/* Channel Name  */}
          <div className={expanded ? `` : ` flex  items-center gap-x-2 `}>
            {channel} <FaCheckCircle></FaCheckCircle>
          </div>
          {/* Views and Age  */}
          <div className=' flex gap-x-2'>
            {/* Views */}
            <div>{views}</div>
            {/* Age  */}
            <div>{age}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
