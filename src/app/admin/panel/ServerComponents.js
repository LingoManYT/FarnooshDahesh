import React from 'react'
import Work_Section_Component from './Work_Section_Component'
import Image from 'next/image'
import Add_New_Work_Modal from './Add_New_Work_Modal/Add_New_Work_Modal'

function ServerComponents(params) {
    return (
        <>
            {
                params.searchParams.new_work && params.searchParams.new_work === 'true' ?
                    <Add_New_Work_Modal />
                    : null
            }
            <section className='admin-panel-container'>
                <section className='change-settings-container'>
                    <header className='account-section'>
                        <Image src={User_Icon} alt='user-icon' />
                        <p>Admin</p>
                    </header>
                    <section className='change-buttons-container'>
                        <div className='setting-child'>
                            <Image src={Image_Icon} alt='image-icon' />
                            <p>Work</p>
                        </div>
                    </section>
                </section>
                <section className='setting-details-container'>
                    <Work_Section_Component />
                </section>
            </section>
        </>
    )
}

export default ServerComponents