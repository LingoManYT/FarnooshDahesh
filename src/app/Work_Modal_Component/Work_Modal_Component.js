import React from 'react'
import './Work_Modal_Component.css'
import Image from 'next/image'
import axios from 'axios'
const jwt = require('jsonwebtoken')

import X_Icon from '../../Icons/x-lg.svg'
import Link from 'next/link'

async function Work_Modal_Component({ work }) {
    var Data
    var Error
    const GetProject = async () => {
        await axios.get(`http://localhost:3001/api/project?work=${work}`, {
            headers: {
                Authorization: process.env.TOKEN
            }
        })
            .then(res => {
                if (res.status === 200 && res.data.ok) {
                    Data = jwt.verify(res.data.Data, process.env.SECRET)
                }else {
                    Error = res.data.Message
                }
            })
            .catch(err => { Error = err })
    }
    await GetProject()

    const Content = Data && Data.Content ? JSON.parse(Data.Content) : null
    return (
        <div className='modal-background'>
            <article className='work-details-modal-container'>
                <Link href={"/"} scroll={false} className='close-button-container'>
                    <Image src={X_Icon} alt='close-image' className='close-icon'/>
                </Link>
                {
                    Data && Content ?
                        Content.map((Content, Index) => {
                            return <section className={Content.Class} key={Index}>
                                <img src={Content.Image} alt='Portfolio' />
                                <div className='texts'>
                                    <h2>{Content.Title}</h2>
                                    <p>{Content.Description}</p>
                                </div>
                            </section>
                        })
                    : null
                }
            </article>
        </div>
    )
}

export default Work_Modal_Component