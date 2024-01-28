import React from 'react'
import Image from 'next/image'

import Email_Icon from '../../Icons/Email_Icon.svg'
import Phone_Icon from '../../Icons/Group.svg'
import LinkedIn_Logo from '../../Icons/linkedin.png'
import Behance_Logo from '../../Icons/behance.png'
import Dribbble_Logo from '../../Icons/dribbble-logo-01.png'

function Server_Side_Tags() {
    return (
        <>
            <h1>Drop a message to me</h1>
            <span></span>
            <p>Let&apos;s transform digital dreams into reality...I&apos;m here to turn your ideas into awesome designs that work great and make people happy. Drop me a message, and let&apos;s start our creative journey together.</p>
            <section className='contact-way-container'>
                <div className='email-container'>
                    <Image src={Email_Icon} alt='email-ico' />
                    <p>farnoosh.dahesh@hyperisland.se</p>
                </div>
                <div className='phone-container'>
                    <Image src={Phone_Icon} alt='email-ico' />
                    <p>+46 (0) 737528390</p>
                </div>
            </section>
            <nav className='social-media-container'>
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