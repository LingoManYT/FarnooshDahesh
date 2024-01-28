import Header from '@/Global Components/Header/Header'
import React from 'react'
import './not_found.css'
import Section_Show_Component from './Section_Show_Component/Section_Show_Component'
import Link from 'next/link'
import Image from 'next/image'

import Not_Found_Illu from '../Illustarations/IMG_20240118_115334_790.png'

function not_found() {
    return (
        <>
            <Header />
            <main>
                <section className='main-elements-container'>
                    <div className='not-found-container'>
                        <Image src={Not_Found_Illu} alt='not-found-image'/>
                        <div className='not-found-text-container'>
                            <p>Page Not Found! <Link href={"/"}>Click Here</Link> to go back!</p>
                        </div>
                    </div>
                    <Section_Show_Component From_Not_Found_Page={true} />
                </section>
            </main>
        </>
    )
}

export default not_found