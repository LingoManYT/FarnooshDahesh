'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

import Scroll_Down_Icon from '../Icons/Scroll_Down.svg'

function Scroll_Down_Component() {
    useEffect(() => {
        const ScrollDownComponent = document.getElementById('scroll-down-section')
        window.addEventListener('scroll', () => {
            const ScrollPosition = window.scrollY
            if (ScrollPosition >= 1000) {
                ScrollDownComponent.classList.add('hidden')
            } else {
                ScrollDownComponent.classList.remove('hidden')
            }
        })
    }, [])
    return (
        <div className='scroll-down-section' id='scroll-down-section'>
            <Image src={Scroll_Down_Icon} alt='scroll-down-image' />
            <p>scroll down</p>
        </div>
    )
}

export default Scroll_Down_Component