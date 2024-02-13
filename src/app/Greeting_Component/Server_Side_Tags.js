import Image from 'next/image'
import React from 'react'

import LinkedIn_Logo from '../../Icons/linkedin.png'
import Behance_Logo from '../../Icons/behance.png'
import Dribbble_Logo from '../../Icons/dribbble-logo-01.png'
import Person_Image from '../../Illustarations/Untitled-1.png'
import Arrow_Icon from '../../Icons/Arrow.svg'

function Server_Side_Tags() {
    return (
        <>
            <Image src={Arrow_Icon} className='arrow-image' alt='arrows' />
            <section className='greeting-texts-container'>
                <h2>Hi, I am Farnoosh</h2>
                <h1>Product Designer</h1>
                <h2>Based in Sweden.</h2>
                <a href='https://api.farnooshdahesh.com/Assets/Resume.pdf' target='_blank' download className='download-cv-button'>Download CV</a>
            </section>
            <div className='picture-container'>
                <Image src={Person_Image} alt='person-image' />
                <span className='cube-up'></span>
            </div>
            <nav className='links'>
            <a href='https://linkedin.com/in/farnoosh-dahesh-27708771' target='_blank'>
                    <Image src={LinkedIn_Logo} width={20} height={20} alt='linked-in-image' />
                </a>
                <a href='https://dribbble.com/farnooshde' target='_blank'>
                    <Image src={Dribbble_Logo} width={42} height={20} alt='dribbble-logo-image' />
                </a>
                <a href='https://www.behance.net/farnooshdahesh2' target='_blank'>
                    <Image src={Behance_Logo} alt='dribbble-logo-image' />
                </a>
            </nav>
        </>
    )
}

export default Server_Side_Tags
