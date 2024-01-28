'use client'
import React, { useEffect } from 'react'
import './Header.css'
import Image from 'next/image'

import Header_Logo from '../../Logos/logo-04 1.png'
import HamburgerMenu_Icon from '../../Icons/HamburgerMenu.svg'
import X_Icon from '../../Icons/x-lg.svg'

function Side_Menu_Component() {
    useEffect(() => {
        let MenuOpened = false
        const Hamburger_Menu = document.getElementById('menu-button')
        const Side_Menu = document.getElementById('side-menu-container')
        const Close_Button = document.getElementById('close-button')

        Hamburger_Menu.addEventListener('click', () => {
            if (!MenuOpened) {
                MenuOpened = true
                Side_Menu.style.display = 'flex'
                setTimeout(() => {
                    Side_Menu.style.transform = 'translateX(0px)'
                }, 10);
            }
        })
        Close_Button.addEventListener('click', () => {
            if (MenuOpened) {
                MenuOpened = false
                Side_Menu.style.transform = 'translateX(300px)'
                setTimeout(() => {
                    Side_Menu.style.display = 'flex'
                }, 400);
            }
        })
    }, [])
    return (
        <>
            <div className='menu-button' id='menu-button'>
                <Image src={HamburgerMenu_Icon} alt='hamburger-menu-icon' />
            </div>
            <section className='side-menu-container' id='side-menu-container'>
                <div className='close-button' id='close-button'>
                    <Image src={X_Icon} alt='x-icon' />
                </div>
                <section className='side-menu-elements-container'>
                    <section className='navigation-container'>
                        <nav>
                            <h4 onClick={() => {
                                window.scrollTo(0, 0)
                            }}>Home</h4>
                            <h4 onClick={() => {
                                window.scrollTo(0, 300)
                            }}>About Me</h4>
                            <h4 onClick={() => {
                                window.scrollTo(0, 600)
                            }}>Work</h4>
                            <h4 onClick={() => {
                                window.scrollTo(0, 1000)
                            }}>Contact</h4>
                        </nav>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Side_Menu_Component