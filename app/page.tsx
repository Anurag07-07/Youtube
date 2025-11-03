// 'use client'
// import {gsap} from 'gsap'
// import { useGSAP } from '@gsap/react'
// import Image from 'next/image'
// import you from './assets/youtube-color-svgrepo-com (1).svg'
// import { useRef } from 'react'
// export default function Page() {

//   const blockRef = useRef<HTMLDivElement | null>(null)
//   const lineRef = useRef<HTMLDivElement | null>(null)
//   const logoref = useRef<HTMLDivElement | null>(null)

//   useGSAP(()=>{
//     const tl = gsap.timeline({
//       onComplete:()=>{

//       }
//     })
//     tl.fromTo(lineRef.current,{
//       width:0
//     },{
//       width:"60%",
//       duration:1.5,
//       ease:'power2.out'
//     })

//     tl.fromTo(lineRef.current,{
//       width:'60%'
//     },{
//       width:0,
//       duration:1.8,
//       ease:'power2.out',
//       onComplete:()=>{
//         if (lineRef.current) {
//           lineRef.current.style.display='none'
//         }
//       }
//     },"-=0.5")

//     tl.fromTo(logoref.current,{
//       scale:0.8,opacity:0
//     },{ 
//       scale:1.2,
//       opacity:1,
//       duration:1.4,
//       ease:'power2.out'
//     })

//     tl.to('',{ duration:1})

//   })

//   return <div>
//     <div ref={blockRef} className=' w-full h-screen flex justify-center flex-col  items-center fixed inset-0'>
//       <div ref={lineRef} className=' bg-red-700 w-0 h-1'></div>
//       <div ref={logoref} className=' opacity-0'>
//         <Image src={you} width={100} alt='youtube'></Image>
//       </div>
//     </div>
//     {/* <main>Welcome to Youtube</main> */}
//   </div>
// }

// 'use client'
// import {gsap} from 'gsap'
// import { useGSAP } from '@gsap/react'
// import Image from 'next/image'
// import you from './assests/youtube-color-svgrepo-com.svg'
// import { useRef } from 'react'
// export default function Page() {

//   const blockRef = useRef<HTMLDivElement | null>(null)
//   const lineRef = useRef<HTMLDivElement | null>(null)
//   const logoref = useRef<HTMLDivElement | null>(null)

//   useGSAP(()=>{
//     const tl = gsap.timeline({
//       onComplete:()=>{

//       }
//     })
//     tl.fromTo(lineRef.current,{
//       width:0
//     },{
//       width:"60%",
//       duration:1.5,
//       ease:'power2.out'
//     })
//   })

//   return <div>
//     <div ref={blockRef} className=' w-full h-screen flex justify-center flex-col  items-center fixed inset-0'>
//       <div ref={lineRef} className=' bg-red-500 w-0 h-1'></div>
//       <div ref={logoref}>
//         <Image src={you} width={100} alt='youtube'></Image>
//       </div>
//     </div>
//     {/* <main>Welcome to Youtube</main> */}
//   </div>
// }

////////////////////////////////////////////////////////////////////////////////////////

'use client'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import you from './assets/sas.svg'
import { useRef, useState } from 'react'
import Landingpage from './Components/Landingpage'
export default function Page() {

  const blockRef = useRef<HTMLDivElement | null>(null)
  const lineRef = useRef<HTMLDivElement | null>(null)
  const logoref = useRef<HTMLDivElement | null>(null)
  const [view,setView] = useState<boolean>(false) 


  useGSAP(()=>{
    const tl = gsap.timeline({
      onComplete:()=>{
        setView((prev)=>!prev)
      }
    })
    tl.fromTo(lineRef.current,{
      width:0
    },{
      width:"60%",
      duration:1.5,
      ease:'power2.out'
    })

    tl.fromTo(lineRef.current,{
      width:'60%'
    },{
      width:0,
      duration:1.5,
      ease:'power2.out',
      onComplete:()=>{
        if(lineRef.current){
          lineRef.current.style.display='none'
        }
      }
    },'-=0.5')

    tl.fromTo(logoref.current,{
      scale:0.8,
      opacity:0
    },{scale:1.2,
      opacity:1,
      duration:1.4,
      ease:'power2.out'
    })

    tl.to({},{duration:1})
    tl.to(blockRef.current,{
      opacity:0,
      onComplete:()=>{
        if (blockRef.current) {
          blockRef.current.style.display='none'
        }
      }
    })
  },[])

  return( 
  <div>
    <div ref={blockRef} className=' w-full h-screen flex justify-center flex-col  items-center fixed inset-0'>
      <div ref={lineRef} className=' bg-red-700 w-0 h-1'></div>
      <div ref={logoref} className=' opacity-0'>
        <Image src={you} width={100} alt='youtube'></Image>
      </div>
    </div>
    <div>
      {
        view &&
        (
        <div>
          
          <Landingpage></Landingpage>
        </div>
        )
      }
    </div>
  </div>
  )
}