import ronaldo from '../assets/ronaldo.png'
import messi from '../assets/messi.png'
import arijit from '../assets/atifarijit.png'
import football from '../assets/indiaFootball.png'
import queenland from '../assets/queenland.png'
import twitch from '../assets/twitch.png'
import { StaticImageData } from 'next/image'

interface IData{
  id:number,
  title:string,
  channel:string,
  views:string,
  duration:string,
  thumbnail:StaticImageData,
  age:string
  videoLink:string
  like:string,
  subscriber:string
}

export const youtubeData:IData[] = [
  {
    id: 1,
    title: "Build a Livestream App With Next.js | Twitch Clone | Part 1/2",
    channel: "Code with Antonio",
    views: "242K views",
    age: "1 years ago",
    duration: "7:04:05",
    like: "7K",
    subscriber:"400K",
    videoLink: "https://youtu.be/a02JAryRPVU",
    thumbnail:twitch,
  },
  {
    id: 2,
    title: "Arijit Singh X Atif aslam Mashup | Best of Arijit singh and Atif aslam Mashup | Trending lofi song",
    channel: "Mode off Songs",
    views: "8.8M views",
    age: "1 years ago",
    duration: "22.53",
    like: "67K",
    subscriber:"92K",
    videoLink: "https://youtu.be/CmDvOSx-ISY?list=RDCmDvOSx-ISY",
    thumbnail:arijit,
  },
  {
    id: 3,
    title: "Queenstown: The World’s Most Stunning City! 🇳🇿",
    channel: "Passenger Paramvir",
    views: "2.4M views",
    age: "1 years ago",
    duration: "36:53",
    like: "46K",
    subscriber:"2.5M",
    videoLink: "https://youtu.be/ILQx_kZVIPw",
    thumbnail:queenland,
  },
  {
    id: 4,
    title: "Lionel Messi 2017 ● The Unstoppable Man - Dribbling Skills & Goals HD",
    channel: "LM10HD",
    views: "4.5M views",
    age: "8 years ago",
    duration: "12.55",
    like: "54K",
    subscriber:"203K",
    videoLink: "https://youtu.be/DjSDCnHtdyw",
    thumbnail:messi,
  },
  {
    id: 5,
    title: "ALL BY HIMSELF: The Solo Masterclasses of Cristiano Ronaldo",
    channel: "Aedits",
    views: "210K views",
    age: "1 month ago",
    duration: "12.52",
    like: "8K",
    subscriber:"90.2K",
    videoLink: "https://youtu.be/6z09e3tHyI8",
    thumbnail:ronaldo,
  },
  {
    id: 6,
    title: "These Matches Will Decide The Future of Indian Football!",
    channel: "Talk Football HD",
    views: "17k views",
    age: "6 hours ago",
    duration: "14.32",
    like: "1.6k",
    subscriber:"505K",
    videoLink: "https://youtu.be/Mu-q32r5Itg",
    thumbnail:football,
  },
];
