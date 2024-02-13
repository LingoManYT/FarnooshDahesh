import React from 'react'
import './Header.css'
import Image from 'next/image'

import Header_Logo from '../../Logos/logo-04 1.png'
import HamburgerMenu_Icon from '../../Icons/HamburgerMenu.svg'
import Side_Menu_Component from './Side_Menu_Component'
// ../../Helpers/Resume.pdf
function Header() {
    return (
        <header>
            <section className='header-elements-container'>
                <Image src={Header_Logo} className='header-logo' alt='farnoosh-dahesh-logo' style={{ width: 'auto', height: 'auto' }}/>
                <a href='https://api.farnooshdahesh.com/Assets/Resume.pdf' target='_blank' download className='download-cv-button'>Download CV</a>
                <Side_Menu_Component />
            </section>
        </header>
    )
}

export default Header
