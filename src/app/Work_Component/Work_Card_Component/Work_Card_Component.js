import Link from 'next/link'
import React from 'react'
import './Work_Card_Component.css'
import Image from 'next/image'

import TestImage from '../../../Logos/Rectangle 3805.png'

function Work_Card_Component({ Data }) {
  const Title = Data && Data.Title ? Data.Title : null
  const Type = Data && Data.Type ? Data.Type : null
  const Main_Description = Data && Data.Main_Description ? Data.Main_Description : null
  const Thumbnail = Data && Data.Thumbnail ? Data.Thumbnail : null
  const Thumbnail_Names_Array = Thumbnail.split('/')
  const Thumbnail_Name = Thumbnail_Names_Array[Thumbnail_Names_Array.length - 1]
  return (
    <Link href={"/?work=" + Title} scroll={false} className='work-card-component'>
        <img src={Thumbnail} alt={Data && Thumbnail_Name ? Thumbnail_Name.split('.')[0] : "Thumbnail"}/>
        <div className='little-info-container'>
            <h3>{Data && Type ? Type : "N/A"}</h3>
            <h2>{Data && Title ? Title : "N/A"}</h2>
            <p className='half-description'>{Data && Main_Description ? Main_Description.length > 115 ? Main_Description.slice(0, 112) + "..." : Main_Description : "N/A"}</p>
            <p className='view-button'>view</p>
        </div>
    </Link>
  )
}

export default Work_Card_Component