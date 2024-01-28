'use client'
import React from 'react'
import './Work_Card_Panel_Component.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { DeleteProject } from './DataBaseActions'

import TrashIcon from '../../../../Icons/trash.svg'
import EditIcon from '../../../../Icons/edit.svg'
import Are_You_Sure_Component from './Are_You_Sure_Component'

function Work_Card_Panel_Component({ TOKEN, Data }) {
    const Router = useRouter()

    const UUID = Data && Data.ID ? Data.ID : null
    const Type = Data && Data.Type ? Data.Type : null
    const Title = Data && Data.Title ? Data.Title : null
    const Main_Description = Data && Data.Main_Description ? Data.Main_Description : null
    const Thumbnail = Data && Data.Thumbnail ? Data.Thumbnail : null
    const Thumbnail_Names_Array = Thumbnail.split('/')
    const Thumbnail_Name = Thumbnail_Names_Array[Thumbnail_Names_Array.length - 1]

    return (
        <>
            <article className='portfolio-card-container'>
                {/* <Are_You_Sure_Component /> */}
                <div className='thumbnail-container'>
                    <img src={Thumbnail} alt={Thumbnail_Name} />
                </div>
                <div className='details-container'>
                    <h2>{Data && Type ? Type : "N/A"}</h2>
                    <h1>{Data && Title ? Title : "N/A"}</h1>
                    <p>{Data && Main_Description ? Main_Description : "N/A"}</p>
                </div>
                <div className='buttons-container'>
                    {/* <div className='action-button'>
                    <Image src={EditIcon} alt='edit-icon'/>
                </div> */}
                    <div className='action-button' onClick={async () => {
                        await DeleteProject(UUID)
                        Router.refresh()
                    }}>
                        <Image src={TrashIcon} alt='delete-icon' />
                    </div>
                </div>
            </article>
        </>
    )
}

export default Work_Card_Panel_Component