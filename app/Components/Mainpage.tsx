import React from 'react'
import { youtubeData } from '../db/data'
import Link from 'next/link'
import { Card } from './Card'
import { useStore } from '../store/store'

const Mainpage = () => {
  const {expand,expanded,collapse} = useStore()
  return (
    <div>
      {
        youtubeData.map(({id,channel,title,views,thumbnail,age})=>(
          <div key={id} className={expanded ? `` : ` px-3 pt-5`}>
          <Link key={id} href={`/video/${id}`}>
              <Card channel={channel} title={title} views={views} thumbnail={thumbnail} age={age} ></Card>
          </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Mainpage