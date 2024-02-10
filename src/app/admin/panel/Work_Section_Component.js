import axios from 'axios'
import React from 'react'
import Work_Card_Panel_Component from './Work_Card_Panel_Component/Work_Card_Panel_Component'
import Link from 'next/link'
import Image from 'next/image'
const jwt = require('jsonwebtoken')

import Add_Icon from '../../../Icons/plus-black.svg'

async function Work_Section_Component(params) {
    var Data
    var Error
    const GetProjects = async () => {
        await axios.get('https://api.farnooshdahesh.com/projects', {
            headers: {
                Authorization: process.env.TOKEN
            }
        })
            .then(res => {
                if (res.status === 200 && res.data.ok) {
                    Data = jwt.verify(res.data.Data, process.env.SECRET)
                } else {
                    Error = res.data.Message
                }
            })
            .catch(err => { Error = err })
    }
    await GetProjects()
    return (
        <>
            <header className='setting-details-section-shower-container'>
                <h1>Work</h1>
            </header>
            <section className='main-work-settings-container'>
                <Link className='add-new-worksample-button' href={"/admin/panel?new_work=true"}>
                    <Image src={Add_Icon} alt='add-icon'/>
                    <p>Add New WorkSample</p>
                </Link>
                <div className='list-of-work-cards-container'>
                    {
                        Data ? 
                        Data.map((Item, Index) => {
                            return <Work_Card_Panel_Component TOKEN={process.env.TOKEN} Data={Item} key={Index}/>
                        })
                        : null
                    }
                </div>
            </section>
        </>
    )
}

export default Work_Section_Component
